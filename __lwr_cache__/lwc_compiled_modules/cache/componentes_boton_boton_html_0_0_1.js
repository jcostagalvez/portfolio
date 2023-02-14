import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./boton.css";

import _implicitScopedStylesheets from "./boton.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1
};
const stc1 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, s: api_slot, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("button", {
    className: $cmp.type,
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
    }
  }, [api_slot("", stc0, stc1, $slotset)])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "componentes-boton_boton"
}
freezeTemplate(tmpl);
