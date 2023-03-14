import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./flechaPaginacion.css";

import _implicitScopedStylesheets from "./flechaPaginacion.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="arrow-container${0}"${2}><div class="arrow${0}"${2}></div><div class="arrow${0}"${2}></div></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1(), 1)];
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
  tmpl.stylesheetToken = "componentes-flechaPaginacion_flechaPaginacion"
}
freezeTemplate(tmpl);
