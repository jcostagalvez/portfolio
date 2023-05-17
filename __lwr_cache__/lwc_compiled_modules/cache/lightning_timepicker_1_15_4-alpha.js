import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./timepicker.html";
/* eslint-disable @lwc/lwc/no-api-reassignments */

import labelInvalidDate from '@salesforce/label/LightningDateTimePicker.invalidDate';
import labelRangeOverflow from '@salesforce/label/LightningDateTimePicker.rangeOverflow';
import labelRangeUnderflow from '@salesforce/label/LightningDateTimePicker.rangeUnderflow';
import labelRequired from '@salesforce/label/LightningControl.required';
import labelHelpTextAlternativeText from '@salesforce/label/LightningInput.helptextAlternativeText';
import { getTimeToHighlight } from './utils';
import { classSet, formatLabel } from 'lightning/utils';
import { isBefore, isAfter, normalizeISOTime, parseFormattedTime, getTimeFormatFromStyle, getISOTimeString } from 'lightning/internationalizationLibrary';
import { removeTimeZoneSuffix } from 'lightning/iso8601Utils';
import { normalizeBoolean, synchronizeAttrs, normalizeString, computeAriaInvalid } from 'lightning/utilsPrivate';
import { normalizeVariant, VARIANT } from 'lightning/inputUtils';
const i18n = {
  invalidDate: labelInvalidDate,
  rangeOverflow: labelRangeOverflow,
  rangeUnderflow: labelRangeUnderflow,
  required: labelRequired,
  helpTextAlternativeText: labelHelpTextAlternativeText
};
const STEP = 15; // in minutes
const TIME_STYLE = {
  SHORT: 'short',
  MEDIUM: 'medium',
  LONG: 'long'
};
class LightningTimePicker extends LightningElement {
  constructor(...args) {
    super(...args);
    this._disabled = false;
    this._required = false;
    this._displayValue = null;
    this._value = null;
    this._min = void 0;
    this._max = void 0;
    this._items = [];
    this._fieldLevelHelp = void 0;
    this._variant = 'lookup';
    this._mainInputId = void 0;
    this._errorMessage = void 0;
    this._readonly = true;
    this._describedByElements = [];
    this.autocomplete = 'off';
    this.ariaLabelledByElement = void 0;
    this.ariaControlsElement = void 0;
    this.ariaLabel = void 0;
    this.label = void 0;
    this.name = void 0;
    this.placeholder = '';
    this.messageWhenValueMissing = void 0;
    this._ariaDescribedByElements = void 0;
  }
  get messageWhenBadInput() {
    return this._messageWhenBadInput || formatLabel(i18n.invalidDate, getTimeFormatFromStyle(this.timeStyle, true));
  }
  set messageWhenBadInput(message) {
    this._messageWhenBadInput = message;
  }
  get messageWhenRangeOverflow() {
    // using isoValue since the manually entered time could have seconds/milliseconds and the locale format generally doesn't have this precision
    return this._messageWhenRangeOverflow || formatLabel(i18n.rangeOverflow, normalizeISOTime(this.max, this.timeStyle).isoValue);
  }
  set messageWhenRangeOverflow(message) {
    this._messageWhenRangeOverflow = message;
  }
  get messageWhenRangeUnderflow() {
    return this._messageWhenRangeUnderflow || formatLabel(i18n.rangeUnderflow, normalizeISOTime(this.min, this.timeStyle).isoValue);
  }
  set messageWhenRangeUnderflow(message) {
    this._messageWhenRangeUnderflow = message;
  }
  set ariaDescribedByElements(el) {
    if (Array.isArray(el)) {
      this._ariaDescribedByElements = el;
    } else {
      this.ariaDescribedByElements = [el];
    }
  }
  get ariaDescribedByElements() {
    return this._ariaDescribedByElements;
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    const normalizedValue = removeTimeZoneSuffix(newValue);
    const normalizedTime = normalizeISOTime(normalizedValue, this.timeStyle);
    this._value = normalizedTime.isoValue;
    this._displayValue = normalizedTime.displayValue;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }
  get readOnly() {
    return this._readonly;
  }
  set readOnly(value) {
    this._readonly = normalizeBoolean(value);
    if (this._readonly) {
      this._variant = VARIANT.STANDARD;
    }
  }
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = normalizeBoolean(value);
  }
  hasBadInput() {
    return !!this._displayValue && this._value === null;
  }
  showHelpMessage(message) {
    if (!message) {
      this.classList.remove('slds-has-error');
      this._errorMessage = '';
    } else {
      this.classList.add('slds-has-error');
      this._errorMessage = message;
    }
  }
  set fieldLevelHelp(value) {
    this._fieldLevelHelp = value;
  }
  get fieldLevelHelp() {
    return this._fieldLevelHelp;
  }
  get variant() {
    return this._variant || VARIANT.STANDARD;
  }
  set variant(value) {
    this._variant = normalizeVariant(value);
  }
  get max() {
    return this._max;
  }
  set max(newValue) {
    this._max = newValue;
    if (this.connected) {
      this.rebuildAndUpdateTimeList();
    }
  }
  get min() {
    return this._min;
  }
  set min(newValue) {
    this._min = newValue;
    if (this.connected) {
      this.rebuildAndUpdateTimeList();
    }
  }

  /**
   * Sets focus on the input element.
   */
  focus() {
    if (this.connected) {
      this.getCombobox().focus();
    }
  }

  /**
   * Removes keyboard focus from the input element.
   */
  blur() {
    if (this.connected) {
      this.getCombobox().blur();
    }
  }
  get timeStyle() {
    return this._timeStyle;
  }
  set timeStyle(value) {
    this._timeStyle = normalizeString(value, {
      fallbackValue: TIME_STYLE.SHORT,
      validValues: [TIME_STYLE.SHORT, TIME_STYLE.MEDIUM, TIME_STYLE.LONG]
    });
    const normalizedDate = normalizeISOTime(this._value, this.timeStyle);
    this._displayValue = normalizedDate.displayValue;
  }
  connectedCallback() {
    this.connected = true;
  }
  disconnectedCallback() {
    this.connected = false;
  }
  synchronizeA11y() {
    const label = this.template.querySelector('label');
    const comboBox = this.template.querySelector('lightning-base-combobox');
    let describedByElements = [];
    if (this._ariaDescribedByElements) {
      describedByElements = describedByElements.concat(this._ariaDescribedByElements);
    }
    const errorMessage = this.template.querySelector('[data-error-message]');
    if (errorMessage) {
      describedByElements.push(errorMessage);
    }
    comboBox.inputDescribedByElements = describedByElements;
    synchronizeAttrs(label, {
      for: this._mainInputId
    });
  }
  renderedCallback() {
    this.synchronizeA11y();
  }
  get displayValue() {
    return this._displayValue;
  }
  get items() {
    return this._items;
  }
  get i18n() {
    return i18n;
  }
  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }
  get computedLabelClass() {
    return classSet('slds-form-element__label').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }
  handleReady(e) {
    this._mainInputId = e.detail.id;
  }
  buildTimeList() {
    // We should always display the options in the short style since m/l will add an extra :00 to the options.
    const timeList = [];
    const minTime = normalizeISOTime(this.min, TIME_STYLE.SHORT).parsedValue;
    const minHour = minTime ? minTime.getHours() : 0;
    const maxTime = normalizeISOTime(this.max, TIME_STYLE.SHORT).parsedValue;
    const maxHour = maxTime ? maxTime.getHours() + 1 : 24;
    const date = new Date();
    for (let hour = minHour; hour < maxHour; hour++) {
      for (let minutes = 0; minutes < 60; minutes += STEP) {
        date.setHours(hour, minutes);
        date.setSeconds(0, 0);
        if (this.isBeforeMinTime(date, minTime)) {
          continue; // eslint-disable-line no-continue
        }

        if (this.isAfterMaxTime(date, maxTime)) {
          break;
        }
        const isoTime = getISOTimeString(date);
        const normalizedTime = normalizeISOTime(isoTime, TIME_STYLE.SHORT);
        timeList.push({
          type: 'option-inline',
          text: normalizedTime.displayValue,
          value: isoTime
        });
      }
    }
    return timeList;
  }
  get timeList() {
    if (!this._timeList) {
      this._timeList = this.buildTimeList();
    }
    if (!this._value) {
      return this._timeList;
    }
    const timeToHighlight = getTimeToHighlight(this._value, STEP);
    const timeList = this._timeList.map(item => {
      const itemCopy = Object.assign({}, item);
      if (item.value === this._value) {
        itemCopy.iconName = 'utility:check';
        itemCopy.checked = true;
      } else {
        itemCopy.checked = false;
      }
      if (item.value === timeToHighlight) {
        itemCopy.highlight = true;
      }
      return itemCopy;
    });
    return timeList;
  }
  rebuildAndUpdateTimeList() {
    // forcing the time list to be rebuilt
    this._timeList = null;
    this._items = this.timeList;
  }
  getCombobox() {
    return this.template.querySelector('lightning-base-combobox');
  }
  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }
  handleInputChange(event) {
    event.preventDefault();
    event.stopPropagation();

    // keeping the display value in sync with the element's value
    this._displayValue = event.detail.text;
    const {
      value,
      style
    } = parseFormattedTime(this._displayValue);
    this._value = value;
    if (style) {
      this._timeStyle = style;
    }
    this._items = this.timeList;
    this.dispatchChangeEvent();
  }
  handleTextInput(event) {
    event.preventDefault();
    event.stopPropagation();

    // keeping the display value in sync with the element's value
    this._displayValue = event.detail.text;
  }
  handleTimeSelect(event) {
    event.stopPropagation();

    // for some reason this event is fired without detail from grouped-combobox
    if (!event.detail) {
      return;
    }
    this._value = event.detail.value;
    this._displayValue = normalizeISOTime(this._value, this.timeStyle).displayValue;
    this._items = this.timeList;
    this.dispatchChangeEvent();
  }
  handleDropdownOpenRequest() {
    this._items = this.timeList;
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail: {
        value: this._value
      }
    }));
  }
  isBeforeMinTime(date, minTime) {
    const minDate = minTime || normalizeISOTime(this.min, TIME_STYLE.SHORT);
    return minDate ? isBefore(date, minDate, 'minute') : false;
  }
  isAfterMaxTime(date, maxTime) {
    const maxDate = maxTime || normalizeISOTime(this.max, TIME_STYLE.SHORT);
    return maxDate ? isAfter(date, maxDate, 'minute') : false;
  }
  get hasExternalLabel() {
    return this.variant === VARIANT.LABEL_HIDDEN && this.ariaLabelledByElement && this.ariaLabelledByElement.length;
  }
  get computedAriaInvalid() {
    const isAriaInvalid = this.template.host.getAttribute('data-aria-invalid') || this._errorMessage;
    return computeAriaInvalid(isAriaInvalid, this.value);
  }
  get helptextAlternativeText() {
    return formatLabel(i18n.helpTextAlternativeText, this.label);
  }
  /*LWC compiler v2.17.0*/
}
LightningTimePicker.delegatesFocus = true;
_registerDecorators(LightningTimePicker, {
  publicProps: {
    autocomplete: {
      config: 0
    },
    ariaLabelledByElement: {
      config: 0
    },
    ariaControlsElement: {
      config: 0
    },
    ariaLabel: {
      config: 0
    },
    label: {
      config: 0
    },
    name: {
      config: 0
    },
    placeholder: {
      config: 0
    },
    messageWhenValueMissing: {
      config: 0
    },
    messageWhenBadInput: {
      config: 3
    },
    messageWhenRangeOverflow: {
      config: 3
    },
    messageWhenRangeUnderflow: {
      config: 3
    },
    ariaDescribedByElements: {
      config: 3
    },
    value: {
      config: 3
    },
    disabled: {
      config: 3
    },
    readOnly: {
      config: 3
    },
    required: {
      config: 3
    },
    fieldLevelHelp: {
      config: 3
    },
    variant: {
      config: 3
    },
    max: {
      config: 3
    },
    min: {
      config: 3
    },
    timeStyle: {
      config: 3
    }
  },
  publicMethods: ["hasBadInput", "showHelpMessage", "focus", "blur"],
  track: {
    _disabled: 1,
    _required: 1,
    _displayValue: 1,
    _value: 1,
    _min: 1,
    _max: 1,
    _items: 1,
    _fieldLevelHelp: 1,
    _variant: 1,
    _mainInputId: 1,
    _errorMessage: 1,
    _readonly: 1,
    _describedByElements: 1
  },
  fields: ["_ariaDescribedByElements"]
});
export default _registerComponent(LightningTimePicker, {
  tmpl: _tmpl
});