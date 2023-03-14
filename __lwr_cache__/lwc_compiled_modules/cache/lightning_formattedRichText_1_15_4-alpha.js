import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./formattedRichText.html";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import sanitizeHTML from 'lightning/purifyLib';
import { linkify } from './linkify';
import { richTextConfig } from './richTextConfig';
import { updateRawLinkInfo } from 'lightning/routingService';
import { normalizeBoolean, hasOnlyAllowedVideoIframes } from 'lightning/utilsPrivate';

/**
 * Displays rich text that's formatted with allowed tags and attributes.
 * Other tags and attributes are removed and only their text content is displayed.
 */
class LightningFormattedRichText extends LightningElement {
  constructor(...args) {
    super(...args);
    this.initialRender = true;
    this._value = '';
    this._disableLinkify = false;
    this.connected = false;
    this.clean = false;
  }
  /**
   * If present, the component does not create links in the rich text.
   * @type {boolean}
   * @default false
   */
  get disableLinkify() {
    return this._disableLinkify;
  }
  set disableLinkify(val) {
    this._disableLinkify = normalizeBoolean(val);
    this.renderRichText();
  }

  /**
   * Sets the rich text to display.
   * @type {string}
   *
   */
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val === undefined || val === null ? '' : String(val);
    this.renderRichText();
  }
  renderedCallback() {
    if (this.initialRender) {
      this.renderRichText();
      this.initialRender = false;
    }
  }
  connectedCallback() {
    this.classList.add('slds-rich-text-editor__output');
    this.connected = true;
  }
  disconnectedCallback() {
    this.removeLinkClickListeners();
    this.connected = false;
  }
  handleClick(event) {
    const anchor = event.currentTarget;
    if (anchor == null) {
      return;
    }
    const target = anchor.target;
    const url = anchor.href;
    // Grab the link info onclick and dispatch
    updateRawLinkInfo(this, {
      url,
      target
    }).then(linkInfo => {
      anchor.href = linkInfo.url;
      linkInfo.dispatcher(event);
    });
  }
  sanitize(value) {
    if (!value) {
      this.clean = true;
      return value;
    }
    this.clean = false;
    let displayValue;
    let computedRichTextConfig = richTextConfig;
    if (hasOnlyAllowedVideoIframes(value)) {
      // richTextConfig is shared across all formatted-rich-text components;
      // so create and modify copy of richTextConfig to allow iframes for each component
      computedRichTextConfig = _objectSpread(_objectSpread({}, richTextConfig), {}, {
        ALLOWED_TAGS: richTextConfig.ALLOWED_TAGS.concat(['iframe']),
        ALLOWED_ATTR: richTextConfig.ALLOWED_ATTR.concat(['allowfullscreen'])
      });
    }
    try {
      displayValue = sanitizeHTML(value, computedRichTextConfig);
      this.clean = true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(`<lightning-formatted-rich-text> Exception caught when attempting to sanitize: `, e);
      displayValue = value;
      this.clean = false;
    }
    return displayValue;
  }
  renderRichText() {
    if (this.connected) {
      const richText = this.sanitize(this.disableLinkify ? this.value : linkify(this.value));
      const container = this.container;
      if (this.clean) {
        // eslint-disable-next-line @lwc/lwc/no-inner-html
        container.innerHTML = richText;
      } else {
        const textNode = document.createTextNode(richText);
        while (container.hasChildNodes()) {
          container.removeChild(container.lastChild);
        }
        container.appendChild(textNode);
      }
      this.addLinkClickListeners();
    }
  }
  addLinkClickListeners() {
    this.links.forEach(link => {
      link.addEventListener('click', this.handleClick.bind(this));
    });
  }
  removeLinkClickListeners() {
    this.links.forEach(link => {
      link.removeEventListener('click', this.handleClick.bind(this));
    });
  }
  get links() {
    return this.container ? [...this.container.querySelectorAll('a')] : [];
  }
  get container() {
    return this.template.querySelector('span');
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(LightningFormattedRichText, {
  publicProps: {
    disableLinkify: {
      config: 3
    },
    value: {
      config: 3
    }
  },
  fields: ["initialRender", "_value", "_disableLinkify", "connected", "clean"]
});
export default _registerComponent(LightningFormattedRichText, {
  tmpl: _tmpl
});