import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./badge.html";
import { classSet } from 'lightning/utils';
import { normalizeString } from 'lightning/utilsPrivate';
const DEFAULT_POSITION = 'start';

/**
 * Represents a label which holds a small amount of information, such as the
 * number of unread notifications.
 */
class LightningBadge extends LightningElement {
  constructor(...args) {
    super(...args);
    this._iconPosition = DEFAULT_POSITION;
    this.label = void 0;
    this.iconName = void 0;
    this.iconAlternativeText = void 0;
  }
  /**
   * The position for the icon.
   * Possible values: 'start' (displayed before the text) and 'end' (displayed after the text)
   * @default start
   * @type {string}
   */
  get iconPosition() {
    return this._iconPosition;
  }
  set iconPosition(value) {
    this._iconPosition = normalizeString(value, {
      fallbackValue: DEFAULT_POSITION,
      validValues: ['start', 'end']
    });
  }
  connectedCallback() {
    this.classList.add('slds-badge');
  }

  /**
   * Computes the icon container class based on the icon positioning
   */
  get computedClass() {
    let iconClass = classSet('slds-badge__icon');
    iconClass.add(this.isIconBeforeLabel ? 'slds-badge__icon_left' : 'slds-badge__icon_right');
    return iconClass.toString();
  }

  /**
   * Whether the icon comes before the label
   */
  get isIconBeforeLabel() {
    return this._iconPosition !== 'end';
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(LightningBadge, {
  publicProps: {
    label: {
      config: 0
    },
    iconName: {
      config: 0
    },
    iconAlternativeText: {
      config: 0
    },
    iconPosition: {
      config: 3
    }
  },
  fields: ["_iconPosition"]
});
export default _registerComponent(LightningBadge, {
  tmpl: _tmpl
});