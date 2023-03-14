import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./badge.css";

import _implicitScopedStylesheets from "./badge.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-icon_container": true,
  "slds-current-color": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, c: api_custom_element, h: api_element} = $api;
  return [!$cmp.isIconBeforeLabel ? api_text(api_dynamic_text($cmp.label)) : null, $cmp.iconName ? api_element("span", {
    className: $cmp.computedClass,
    key: 0
  }, [api_element("span", {
    classMap: stc0,
    attrs: {
      "title": $cmp.iconAlternativeText
    },
    key: 1
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.iconName,
      "size": "xx-small"
    },
    key: 2
  })])]) : null, $cmp.isIconBeforeLabel ? api_text(api_dynamic_text($cmp.label)) : null];
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
  tmpl.stylesheetToken = "lightning-badge_badge"
}
freezeTemplate(tmpl);
