import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./navbar.css";

import _implicitScopedStylesheets from "./navbar.scoped.css?scoped=true";

import _lightningTab from "lightning/tab";
import _lightningTabset from "lightning/tabset";
import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
const stc1 = {
  props: {
    "label": "Experiencia"
  },
  key: 1
};
const stc2 = {
  props: {
    "label": "Formación"
  },
  key: 2
};
const stc3 = {
  props: {
    "label": "Habilidades"
  },
  key: 3
};
const stc4 = {
  props: {
    "label": "Contacto"
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element} = $api;
  return [api_custom_element("lightning-tabset", _lightningTabset, stc0, [api_custom_element("lightning-tab", _lightningTab, stc1), api_custom_element("lightning-tab", _lightningTab, stc2), api_custom_element("lightning-tab", _lightningTab, stc3), api_custom_element("lightning-tab", _lightningTab, stc4)])];
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
  tmpl.stylesheetToken = "componentes-navBar_navbar"
}
freezeTemplate(tmpl);
