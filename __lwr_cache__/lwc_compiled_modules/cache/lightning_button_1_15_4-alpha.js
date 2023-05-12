import { registerDecorators as _registerDecorators, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./button.html";
import { classSet } from 'lightning/utils';
import { normalizeString as normalize, normalizeBoolean } from 'lightning/utilsPrivate';
import LightningPrimitiveButton from 'lightning/primitiveButton';
import template from './button.html';

/**
 * A clickable element used to perform an action.
 */
class LightningButton extends LightningPrimitiveButton {
  constructor(...args) {
    super(...args);
    this._stretch = false;
    this.name = void 0;
    this.value = void 0;
    this.label = void 0;
    this.variant = 'neutral';
    this.iconName = void 0;
    this.iconPosition = 'left';
    this.type = 'button';
    this.disableAnimation = void 0;
    this.title = null;
  }
  /**
   * Setting it to true allows the button to take up the entire available width.
   * This value defaults to false.
   *
   * @type {boolean}
   * @default false
   */
  get stretch() {
    return this._stretch;
  }
  set stretch(value) {
    this._stretch = normalizeBoolean(value);
  }

  /**
   * Specifies the type of button.
   * Valid values are button, reset, and submit.
   * This value defaults to button.
   *
   * @type {string}
   * @default button
   */

  render() {
    return template;
  }
  get computedButtonClass() {
    const classes = classSet(super.computedButtonClass);
    return classes.add({
      'slds-button_neutral': this.normalizedVariant === 'neutral',
      'slds-button_brand': this.normalizedVariant === 'brand',
      'slds-button_outline-brand': this.normalizedVariant === 'brand-outline',
      'slds-button_destructive': this.normalizedVariant === 'destructive',
      'slds-button_text-destructive': this.normalizedVariant === 'destructive-text',
      'slds-button_inverse': this.normalizedVariant === 'inverse',
      'slds-button_success': this.normalizedVariant === 'success',
      'slds-button_stretch': this.stretch
    }).toString();
  }
  get computedTitle() {
    return this.title;
  }
  get normalizedVariant() {
    return normalize(this.variant, {
      fallbackValue: 'neutral',
      validValues: ['base', 'neutral', 'brand', 'brand-outline', 'destructive', 'destructive-text', 'inverse', 'success']
    });
  }
  get normalizedType() {
    return normalize(this.type, {
      fallbackValue: 'button',
      validValues: ['button', 'reset', 'submit']
    });
  }
  get normalizedIconPosition() {
    return normalize(this.iconPosition, {
      fallbackValue: 'left',
      validValues: ['left', 'right']
    });
  }
  get showIconLeft() {
    return this.iconName && this.normalizedIconPosition === 'left';
  }
  get showIconRight() {
    return this.iconName && this.normalizedIconPosition === 'right';
  }
  get computedIconClass() {
    return classSet('slds-button__icon').add({
      'slds-button__icon_left': this.normalizedIconPosition === 'left',
      'slds-button__icon_right': this.normalizedIconPosition === 'right'
    }).toString();
  }
  handleButtonFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleButtonBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }

  /**
   * Sets focus on the button.
   */
  focus() {
    if (this._connected) {
      this.button.focus();
    }
  }

  /**
   * Simulates a mouse click on the button.
   */
  click() {
    if (this._connected) {
      this.button.click();
    }
  }

  /**
   * Once we are connected, we fire a register event so the button-group (or other) component can register
   * the buttons.
   */
  connectedCallback() {
    this._connected = true;
  }
  get button() {
    return this.template.querySelector('button');
  }
  renderedCallback() {
    // initialize aria attributes in primitiveButton
    super.renderedCallback();
    // button is inherit from primitiveButton, button.css not working in this case.
    // change host style to disable pointer event.
    this.template.host.style.pointerEvents = this.disabled ? 'none' : '';
  }
  disconnectedCallback() {
    this._connected = false;
  }
  /*LWC compiler v2.17.0*/
}
LightningButton.delegatesFocus = true;
_registerDecorators(LightningButton, {
  publicProps: {
    name: {
      config: 0
    },
    value: {
      config: 0
    },
    label: {
      config: 0
    },
    variant: {
      config: 0
    },
    iconName: {
      config: 0
    },
    iconPosition: {
      config: 0
    },
    stretch: {
      config: 3
    },
    type: {
      config: 0
    },
    disableAnimation: {
      config: 0
    }
  },
  publicMethods: ["focus", "click"],
  track: {
    title: 1
  },
  fields: ["_stretch"]
});
export default _registerComponent(LightningButton, {
  tmpl: _tmpl
});
LightningButton.interopMap = {
  exposeNativeEvent: {
    click: true,
    focus: true,
    blur: true
  }
};