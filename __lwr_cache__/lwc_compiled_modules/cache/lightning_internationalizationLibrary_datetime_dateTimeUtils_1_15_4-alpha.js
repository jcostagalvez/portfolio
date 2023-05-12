// TODO: When migrating off Aura, consider removing 'asserts'; consider
// consider using console.error, throwing Error and/or sticking with
// default behavior for handling invalid inputs in i18nService
import { assert } from 'lightning/utilsPrivate';
import locale from '@salesforce/i18n/locale';
import shortDateFormat from '@salesforce/i18n/dateTime.shortDateFormat';
import mediumDateFormat from '@salesforce/i18n/dateTime.mediumDateFormat';
import longDateFormat from '@salesforce/i18n/dateTime.longDateFormat';
import shortTimeFormat from '@salesforce/i18n/dateTime.shortTimeFormat';
import mediumTimeFormat from '@salesforce/i18n/dateTime.mediumTimeFormat';
import shortDateTimeFormat from '@salesforce/i18n/dateTime.shortDateTimeFormat';
import mediumDateTimeFormat from '@salesforce/i18n/dateTime.mediumDateTimeFormat';
import longDateTimeFormat from '@salesforce/i18n/dateTime.longDateTimeFormat';
import { formattingOptions } from 'lightning/i18nCldrOptions';
import { getDateTimeFormat, getDateTimeISO8601Parser, getDateTimeCLDRParser } from 'lightning/i18nService';
import { isValidISODateTimeString, isValidISOTimeString, removeTimeZoneSuffix, STANDARD_DATE_FORMAT, TIME_SEPARATOR } from 'lightning/iso8601Utils';
import { formatDate, formatTime, formatDateTimeUTC, parseDateTimeUTC, parseDateTimeISO8601, syncUTCToWallTime, syncWallTimeToUTC, parseTime, parseDateTime, toOtherCalendar, fromOtherCalendar } from '../localizationService';
import { isAuraL10NAvailable, getDateTimeErrorMessage } from '../utils';

// set long time format to medium time format since
// lightning-input currently treats a 'long' time-style
// the same way as a 'medium' time-style
formattingOptions.longTimeFormat = formattingOptions.mediumTimeFormat;
const ISO_FORMAT = "yyyy-MM-dd'T'hh:mm:ss.SSS'Z'";
const LATN = 'latn';
const utcTimeZone = {
  timeZone: 'UTC'
};

/**
 * HELPER FUNCTIONS
 */

/**
 * Checks if a value contains a time zone offset by checking
 * for a '+' or '-' character in string and null otherwise
 *
 * @param {any} value
 * @returns
 */
const hasTimeZoneOffset = value => {
  if (typeof value === 'string') {
    return value.indexOf('+') !== -1 || value.indexOf('-') !== -1;
  }
  return false;
};

/**
 * If provided a string returns trimmed string, otherwise
 * returns provided value exactly as-is
 *
 * @param {any} value
 * @returns {any}
 */
const getTrimmedValue = value => {
  return typeof value === 'string' ? value.trim() : value;
};

/**
 * Returns part of a provided string before 'T', representing
 * date portion of ISO string. If provided value is not a string
 * simply returns the value exactly as-is
 *
 * @param {any} value - value to get date for
 * @returns {any}
 */
const getDateOnly = value => {
  return typeof value === 'string' ? value.split(TIME_SEPARATOR)[0] : value;
};

/**
 * Returns true if provided value is a Date object, false otherwise
 *
 * @param {any} value - value to check if Date object or not
 * @returns {boolean}
 */
export function isDate(value) {
  return Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime());
}

/**
 * @returns YYYY-MM-DD string for system time zone
 */
export function getCurrentDateString() {
  const today = getTodayBasedOnTimezone();
  return getISODateString(today);
}

/**
 * Returns ISO date string corresponding to provided date in local time zone
 *
 * @param {Date} date - date to get ISO date string for
 * @returns 'YYYY-MM-DD' string representing provided date in local time zone
 */
export function getISODateString(date) {
  if (!isDate(date)) {
    return null;
  }
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/**
 * Returns ISO time string without any time zone indicator
 * corresponding to provided date in local time zone
 *
 * @param {Date} date - date to get ISO time string in local time zone for
 * @returns 'HH:mm:ss.SSS' string representing the provided
 * date time in local time zone
 */
export function getISOTimeString(date) {
  if (!isDate(date)) {
    return null;
  }
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${doublePad(date.getMilliseconds())}`;
}

/**
 * Returns ISO time string without any time zone indicator
 * corresponding to provided date in UTC time zone
 *
 * @param {Date} date - date to get ISO time string in UTC for
 * @returns 'HH:mm:ss.SSS' string representing the provided
 * date time in UTC time zone
 */
function getISOTimeStringUTC(date) {
  if (!isDate(date)) {
    return null;
  }
  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}.${doublePad(date.getUTCMilliseconds())}`;
}

/**
 * Gets current time in provided timezone in hours and minutes
 *
 * @param {string} timezone - timezone to get time for
 * @returns time in HH:mm format
 */
export function getCurrentTimeString(timezone) {
  const today = getTodayBasedOnTimezone(timezone);
  return `${pad(today.getHours())}:${pad(today.getMinutes())}`;
}

/**
 * Gets offset between provided timezone and either
 * system timezone or UTC timezone at current date
 *
 * @param {Date} date - date used when determining offset
 * @param {string} timeZone - time zone to get offset for
 * @returns {Number} offset in milliseconds
 */
function getOffsetForTimezone(date, timeZone, shouldAddUTCOffset) {
  const time1 = getDateTimeCLDRParser({
    pattern: ISO_FORMAT,
    timeZone,
    numberingSystem: LATN
  }).parse(date.toISOString());
  const extraOffset = shouldAddUTCOffset ? date.getTimezoneOffset() : 0;
  // need to subtract milliseconds since CLDR seems to reset milliseconds to zero
  const time2 = date.getTime() - date.getMilliseconds() + extraOffset * 60 * 1000;
  return time2 - time1;
}

/**
 * Adjust provided date by offset from either system time zone or UTC
 *
 * @param {Date} date - initial date to adjust
 * @param {string} timeZone - time zone to adjust date based on
 * @param {boolean} shouldAddUTCOffset - adjust by UTC instead of local offset if true
 *
 * @returns {Date} date adjusted by either system time zone or UTC
 * e.g., if the date corresponds to 2pm in provided time zone and calculated
 * offset is +4 hours, returns date corresponding to 6pm in provided time zone
 */
function adjustDateByOffset(date, timeZone, shouldAddUTCOffset) {
  const offset = getOffsetForTimezone(date, timeZone, shouldAddUTCOffset);
  const timestamp = date.getTime() + offset;
  return new Date(timestamp);
}

/**
 * Get current date moved by offset between provided timezone
 * (or system time zone if none provided) and UTC
 *
 * @param {string} timeZone - optional time zone to get current date for
 * @returns {Date} current date adjusted by offset between provided
 * time zone and UTC; e.g., if current time is 6pm in UTC and 2pm
 * locally, returns date corresponding to 6pm locally and 10pm UTC
 */
function getTodayBasedOnTimezone(timeZone) {
  const today = new Date();
  if (isAuraL10NAvailable) {
    // time in UTC
    today.setTime(today.getTime() + today.getTimezoneOffset() * 60 * 1000);
    // localization service will use $Locale.timezone when no timezone provided
    return syncUTCToWallTime(today, timeZone);
  }
  return adjustDateByOffset(today, timeZone, true);
}
function pad(n) {
  return Number(n) < 10 ? '0' + n : n;
}
function doublePad(n) {
  const number = Number(n);
  if (number < 10) {
    return '00' + n;
  } else if (number < 100) {
    return '0' + n;
  }
  return n;
}

/**
 * STYLE-TO-FORMAT MAPPING
 */

const DATE = 'date';
const TIME = 'time';
const DATETIME = 'datetime';
const DATETIME_STYLES = {
  SHORT: 'short',
  MEDIUM: 'medium',
  LONG: 'long'
};
// mapping of type/style of formats to use when
// getting format based on provided type/style
const DATETIME_FORMATS = {
  [DATE]: {
    [DATETIME_STYLES.SHORT]: shortDateFormat,
    [DATETIME_STYLES.MEDIUM]: mediumDateFormat,
    [DATETIME_STYLES.LONG]: longDateFormat,
    name: 'DateFormat'
  },
  [TIME]: {
    [DATETIME_STYLES.SHORT]: shortTimeFormat,
    [DATETIME_STYLES.MEDIUM]: mediumTimeFormat,
    [DATETIME_STYLES.LONG]: mediumTimeFormat,
    name: 'TimeFormat'
  },
  [DATETIME]: {
    [DATETIME_STYLES.SHORT]: shortDateTimeFormat,
    [DATETIME_STYLES.MEDIUM]: mediumDateTimeFormat,
    [DATETIME_STYLES.LONG]: longDateTimeFormat,
    name: 'DateTimeFormat'
  }
};

/**
 * Returns short/medium/long format for date/time/datetime
 * in CLDR format or options for datetime formatter
 *
 * Always returns CLDR in Aura, otherwise returns
 * formatting object if isCldr is falsy
 *
 * @param {string} type - date/time/datetime
 * @param {string} style - short/medium/long
 * @param {boolean} isCldr - true if getting cldr format
 * @returns {string|Object}
 */
const getFormatFromStyle = (type, style, isCldr) => {
  if (isAuraL10NAvailable || isCldr) {
    return DATETIME_FORMATS[type][style];
  }
  const path = `${style}${DATETIME_FORMATS[type].name}`;
  return formattingOptions[path];
};
export const getDateFormatFromStyle = (dateStyle, isCldr) => {
  return getFormatFromStyle(DATE, dateStyle, isCldr);
};
export const getTimeFormatFromStyle = (timeStyle, isCldr) => {
  return getFormatFromStyle(TIME, timeStyle, isCldr);
};
export const getDateTimeFormatFromStyle = (datetimeStyle, isCldr) => {
  return getFormatFromStyle(DATETIME, datetimeStyle, isCldr);
};

/**
 * NORMALIZE ISO DATETIMES
 */

/**
 * Normalizes ISO date string to localized short,
 * medium, or long date string. Uses Aura on core
 * and localizer off-core.
 *
 * @param {string} value - ISO date to normalize
 * @param {string} dateStyle - style date should be in
 * eg., style 'short' may correspond to 'dd/mm/yy'
 *
 * @returns {Object} with ISO value and localized display value
 */
export function normalizeISODate(value, dateStyle) {
  const format = getDateFormatFromStyle(dateStyle);
  const isoValue = getDateOnly(getTrimmedValue(value));
  let parsedDate, displayValue;
  if (isoValue) {
    assert(isValidISODateTimeString(isoValue), getDateTimeErrorMessage(value));
    if (isAuraL10NAvailable) {
      parsedDate = parseDateTime(isoValue, STANDARD_DATE_FORMAT);
      // converts to Buddhist calendar if necessary
      const civilDate = toOtherCalendar(parsedDate);
      displayValue = formatDate(civilDate, format);
    } else {
      parsedDate = getDateTimeISO8601Parser().parse(isoValue);
      const formatOptions = Object.assign({}, utcTimeZone, format);
      displayValue = getDateTimeFormat(locale, formatOptions).format(parsedDate);
    }
  }
  if (!parsedDate) {
    return {
      isoValue: null,
      displayValue: value || ''
    };
  }
  return {
    isoValue,
    displayValue
  };
}

/**
 * Normalizes ISO time string to localized format
 * Used in formattedTime and timepicker components
 *
 * @param {string} value - ISO time to normalize
 * @param {string} timeStyle - style time should be in
 * eg., style 'short' may correspond to 'HH:mm'
 *
 * @returns {Object} with ISO value, parsed Date value and localized display value
 */
export function normalizeISOTime(value, timeStyle) {
  const format = getTimeFormatFromStyle(timeStyle);
  const timeValue = getTrimmedValue(removeTimeZoneSuffix(value));
  let parsedValue, displayValue, getISO;
  if (timeValue) {
    assert(isValidISOTimeString(timeValue), getDateTimeErrorMessage(value));
    if (isAuraL10NAvailable) {
      parsedValue = parseTime(timeValue);
      displayValue = formatTime(parsedValue, format);
      getISO = getISOTimeString;
    } else {
      parsedValue = getDateTimeISO8601Parser().parse(timeValue);
      const formatOptions = Object.assign({}, utcTimeZone, format);
      displayValue = getDateTimeFormat(locale, formatOptions).format(parsedValue);
      getISO = getISOTimeStringUTC;
    }
  }
  if (!parsedValue) {
    return {
      isoValue: null,
      parsedValue: null,
      displayValue: value || ''
    };
  } else if (hasTimeZoneOffset(value)) {
    // log warning to avoid confusion when time zone offset is ignored
    console.warn('lightning-formatted-time does not support non-UTC time zones and will ignore any time zone offsets.');
  }
  const isoValue = getISO(parsedValue);
  return {
    isoValue,
    parsedValue,
    displayValue
  };
}

/**
 * Normalizes ISO datetime string to localized format
 * Used in datetimepicker component
 *
 * @param {string} value - ISO datetime to normalize
 * @param {string} timeZone - IANA time zone to adjust value to
 *
 * @returns {Object} with ISO value, and localized/time zone adjusted display value
 */
export function normalizeISODateTime(value, timeZone) {
  const dateTimeValue = getTrimmedValue(value);
  let parsedDate, displayValue;
  if (dateTimeValue) {
    assert(isValidISODateTimeString(dateTimeValue), getDateTimeErrorMessage(value));
    if (isAuraL10NAvailable) {
      parsedDate = syncUTCToWallTime(parseDateTimeISO8601(dateTimeValue), timeZone);
      displayValue = formatDateTimeUTC(parsedDate);
    } else {
      const utcDate = getDateTimeISO8601Parser().parse(dateTimeValue);
      parsedDate = adjustDateByOffset(utcDate, timeZone);
      const defaultDateFormat = formattingOptions.mediumDateFormat;
      const defaultTimeFormat = formattingOptions.mediumTimeFormat;
      const formatOptions = Object.assign({}, utcTimeZone, defaultDateFormat, defaultTimeFormat);
      displayValue = getDateTimeFormat(locale, formatOptions).format(parsedDate);
    }
  }
  if (!parsedDate) {
    return {
      isoValue: null,
      displayValue: value || ''
    };
  }
  return {
    isoValue: removeTimeZoneSuffix(parsedDate.toISOString()),
    displayValue
  };
}

/**
 * NORMALIZE FORMATTED DATETIMES
 */

/**
 * Attempts to parse provided string into Date assuming string
 * is provided date style (short, medium, long) and returns string
 * in YYYY-MM-DD format. If parsing unsuccessful returns null.
 *
 * @param {string} value - formatted date string to parse into date
 * @param {string} dateStyle - date style to parse string as (short/medium/long)
 * @returns {string|null}
 */
export function normalizeFormattedDate(value, dateStyle) {
  const dateValue = getTrimmedValue(value);
  const format = getDateFormatFromStyle(dateStyle, true);
  let parsedDate;
  try {
    if (dateValue) {
      if (isAuraL10NAvailable) {
        parsedDate = fromOtherCalendar(parseDateTime(dateValue, format, true));
      } else {
        // doesn't work as expected for th-TH
        parsedDate = getDateTimeCLDRParser({
          pattern: format
        }).parse(dateValue);
      }
    }
  } catch (error) {
    return null;
  }
  if (!parsedDate) {
    return null;
  }
  return getISODateString(parsedDate);
}

/**
 * Attempts to parse provided string into Date assuming string
 * is provided time style (short, medium, long) and returns string
 * in HH:mm:ss.SSS format. If parsing unsuccessful returns null.
 *
 * @param {string} value - formatted time string to parse into date
 * @param {string} timeStyle - time style to parse string as (short/medium/long)
 * @returns {string|null}
 */
export function normalizeFormattedTime(value, timeStyle) {
  const timeValue = getTrimmedValue(value);
  const format = getTimeFormatFromStyle(timeStyle, true);
  let parsedTime;
  try {
    if (timeValue) {
      if (isAuraL10NAvailable) {
        parsedTime = parseTime(timeValue, format || mediumTimeFormat, true);
      } else {
        parsedTime = getDateTimeCLDRParser({
          pattern: format
        }).parse(timeValue);
      }
    }
  } catch (error) {
    return null;
  }
  if (!parsedTime) {
    return null;
  }
  return getISOTimeString(parsedTime);
}

/**
 * Converts ISO date time string without time zone indicator in given
 * time zone to the equivalent ISO date time string in UTC time zone
 *
 * @param {string} value - ISO datetime string without time zone indicator
 * @param {string} timeZone - IANA time zone that corresponds to value
 * @returns Equivalent ISO date string in UTC
 */
export function normalizeFormattedDateTime(value, timeZone) {
  const datetimeValue = getTrimmedValue(value);
  let parsedDate;
  try {
    if (datetimeValue) {
      if (isAuraL10NAvailable) {
        // given that value is an ISO string without Z, the parseDateTimeUTC
        // call below is equivalent to parseDateTimeISO8601(value + 'Z')
        parsedDate = syncWallTimeToUTC(parseDateTimeUTC(datetimeValue), timeZone);
      } else {
        // no time zone in value so UTC time zone is assumed
        const utcDate = getDateTimeISO8601Parser().parse(datetimeValue);
        parsedDate = getDateTimeCLDRParser({
          pattern: ISO_FORMAT,
          timeZone,
          numberingSystem: LATN
        }).parse(utcDate.toISOString());
      }
    }
  } catch (error) {
    return null;
  }
  if (!parsedDate) {
    return null;
  }
  return parsedDate.toISOString();
}

/**
 * Checks if normalization function recognizes provided value for any styles
 * returning the style recognized and the value as an ISO string
 * Used to allow user's to input a date/time in any style and have it
 * recognized as valid even though the picker defaults to a specific style
 *
 * @param {Function} normalizeFormattedValue - function to normalize formatted string to ISO string
 * @param {string} displayValue - string to format, generally input by user
 * @returns {Object} object with style of displayValue and displayValue normalized to ISO string
 */
const parseFormattedValue = (normalizeFormattedValue, displayValue) => {
  const allowedStyles = Object.values(DATETIME_STYLES);
  let value = null,
    style = null;
  for (let i = 0; i < allowedStyles.length; i++) {
    value = normalizeFormattedValue(displayValue, allowedStyles[i]);
    if (value) {
      style = allowedStyles[i];
      break;
    }
  }
  return {
    value,
    style
  };
};
export const parseFormattedTime = value => {
  return parseFormattedValue(normalizeFormattedTime, value);
};
export const parseFormattedDate = value => {
  return parseFormattedValue(normalizeFormattedDate, value);
};