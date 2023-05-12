import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveButton.css";

import _implicitScopedStylesheets from "./primitiveButton.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  return stc0;
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
  tmpl.stylesheetToken = "lightning-primitiveButton_primitiveButton"
}
freezeTemplate(tmpl);
