import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./helptext.css";

import _implicitScopedStylesheets from "./helptext.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-form-element__icon": true
  },
  key: 0
};
const stc1 = {
  "type": "button"
};
const stc2 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 3
};
const stc3 = {
  "slds-assistive-text": true,
  "desc": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element, gid: api_scoped_id} = $api;
  return [api_element("div", stc0, [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: stc1,
    key: 1
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "svgClass": "slds-button__icon",
      "iconName": $cmp.iconName,
      "variant": "bare"
    },
    key: 2
  }), api_element("span", stc2, [api_text(api_dynamic_text($cmp.alternativeText))]), api_element("span", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id($cmp.describedByID),
      "aria-hidden": "true"
    },
    key: 4
  }, [api_text(api_dynamic_text($cmp.content))])])])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "lightning-helptext_helptext"
}
freezeTemplate(tmpl);
