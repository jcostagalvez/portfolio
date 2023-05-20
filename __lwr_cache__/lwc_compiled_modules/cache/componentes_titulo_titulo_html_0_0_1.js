import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./titulo.css";

import _implicitScopedStylesheets from "./titulo.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="title_container${0}"${2}><h1 class="slds-text-title_caps${0}"${2}> JESUS COSTA </h1><h2 clas="slds-text-title_caps"${3}>DESARROLLADOR EN SALESFORCE</h2></div>`;
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
  tmpl.stylesheetToken = "componentes-titulo_titulo"
}
freezeTemplate(tmpl);
