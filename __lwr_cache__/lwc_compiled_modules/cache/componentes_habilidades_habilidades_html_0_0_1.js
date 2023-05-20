import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./habilidades.css";

import _implicitScopedStylesheets from "./habilidades.scoped.css?scoped=true";

import _componentesHabilidadesCircle from "componentes/habilidadesCircle";
import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element} = $api;
  return [api_custom_element("componentes-habilidades-circle", _componentesHabilidadesCircle, stc0)];
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
  tmpl.stylesheetToken = "componentes-habilidades_habilidades"
}
freezeTemplate(tmpl);
