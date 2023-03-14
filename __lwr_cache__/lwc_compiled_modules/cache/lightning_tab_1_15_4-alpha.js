import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./tab.html";
import { normalizeBoolean } from 'lightning/utilsPrivate';

/**
 * A single tab in a tabset component.
 * @slot default Placeholder for your content in lightning-tab.
 */
class LightningTab extends LightningElement {
  constructor(...args) {
    super(...args);
    this._loadContent = false;
  }
  connectedCallback() {
    this._connected = true;
    this.dispatchEvent(new CustomEvent('privatetabregister', {
      cancelable: true,
      bubbles: true,
      composed: true,
      detail: {
        setDeRegistrationCallback: deRegistrationCallback => {
          this._deRegistrationCallback = deRegistrationCallback;
        }
      }
    }));
  }

  /**
   * Reserved for internal use.
   */
  loadContent() {
    this._loadContent = true;
    this.dispatchEvent(new CustomEvent('active'));
  }
  disconnectedCallback() {
    this._connected = false;
    if (this._deRegistrationCallback) {
      this._deRegistrationCallback();
    }
  }

  /**
   * The optional string to identify which tab was clicked during the tab's active event.
   * This string is also used by active-tab-value in tabset to open a tab.
   * @type {string}
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    this._value = String(newValue);
    this._dispatchDataChangeEventIfConnected();
  }

  /**
   * The text displayed in the tab header.
   * @type {string}
   */
  get label() {
    return this._label;
  }
  set label(value) {
    this._label = value;
    this._dispatchDataChangeEventIfConnected();
  }

  /**
   * Specifies text that displays in a tooltip over the tab content.
   * @type {string}
   */
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
    this._dispatchDataChangeEventIfConnected();
  }

  /**
   * The Lightning Design System name of an icon to display at the beginning of the tab label.
   * Specify the name in the format 'utility:down' where 'utility' is the category, and
   * 'down' is the icon to be displayed. Only utility icons can be used.
   * @type {string}
   */
  get iconName() {
    return this._iconName;
  }
  set iconName(value) {
    this._iconName = value;
    this._dispatchDataChangeEventIfConnected();
  }

  /**
   * The alternative text for the icon specified by icon-name.
   * @type {string}
   */
  get iconAssistiveText() {
    return this._iconAlernativeText;
  }
  set iconAssistiveText(value) {
    this._iconAlernativeText = value;
    this._dispatchDataChangeEventIfConnected();
  }

  /**
   * The Lightning Design System name of an icon to display at the end of the tab label.
   * Specify the name in the format 'utility:check' where 'utility' is the category, and
   * 'check' is the icon to be displayed.
   * @type {string}
   */
  get endIconName() {
    return this._endIconName;
  }
  set endIconName(value) {
    this._endIconName = value;
    this._dispatchDataChangeEventIfConnected();
  }

  /**
   * The alternative text for the icon specified by end-icon-name.
   * @type {string}
   */
  get endIconAlternativeText() {
    return this._endIconAlternativeText;
  }
  set endIconAlternativeText(value) {
    this._endIconAlternativeText = value;
    this._dispatchDataChangeEventIfConnected();
  }

  /**
   * Specifies whether there's an error in the tab content.
   * An error icon is displayed to the right of the tab label.
   * @type {boolean}
   */
  get showErrorIndicator() {
    return this._showErrorIndicator;
  }
  set showErrorIndicator(value) {
    this._showErrorIndicator = normalizeBoolean(value);
    this._dispatchDataChangeEventIfConnected();
  }
  _dispatchDataChangeEventIfConnected() {
    if (this._connected) {
      this.dispatchEvent(new CustomEvent('privatetabdatachange', {
        cancelable: true,
        bubbles: true,
        composed: true
      }));
    }
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(LightningTab, {
  publicProps: {
    value: {
      config: 3
    },
    label: {
      config: 3
    },
    title: {
      config: 3
    },
    iconName: {
      config: 3
    },
    iconAssistiveText: {
      config: 3
    },
    endIconName: {
      config: 3
    },
    endIconAlternativeText: {
      config: 3
    },
    showErrorIndicator: {
      config: 3
    }
  },
  publicMethods: ["loadContent"],
  track: {
    _loadContent: 1
  }
});
export default _registerComponent(LightningTab, {
  tmpl: _tmpl
});