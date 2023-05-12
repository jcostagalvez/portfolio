import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./habilidadesPopUp.css";

import _implicitScopedStylesheets from "./habilidadesPopUp.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "modal_container": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "modal_button": true
  },
  key: 1
};
const stc2 = {
  "close_button": true
};
const stc3 = {
  "src": "../../../assets/utils/cruz.svg",
  "alt": ""
};
const stc4 = {
  classMap: {
    "modal_header": true
  },
  key: 3
};
const stc5 = {
  classMap: {
    "title": true
  },
  key: 4
};
const stc6 = {
  classMap: {
    "modal_body": true
  },
  key: 5
};
const stc7 = {
  classMap: {
    "body": true
  },
  key: 6
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, h: api_element, d: api_dynamic_text, t: api_text} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("img", {
    classMap: stc2,
    attrs: stc3,
    key: 2,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClose))
    }
  })]), api_element("div", stc4, [api_element("p", stc5, [api_text(" " + api_dynamic_text($cmp.habilidad.title) + " ")])]), api_element("div", stc6, [api_element("p", stc7, [api_text(api_dynamic_text($cmp.habilidad.body))])])])];
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
  tmpl.stylesheetToken = "componentes-habilidadesPopUp_habilidadesPopUp"
}
freezeTemplate(tmpl);
