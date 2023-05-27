import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./spinner.css";

import _implicitScopedStylesheets from "./spinner.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="spinner_container${0}"${2}><div style="--n:1;" class="spinner circle_1${0}"${2}></div><div style="--n:2;" class="spinner circle_2${0}"${2}></div><div style="--n:3;" class="spinner circle_3${0}"${2}></div><div style="--n:4;" class="spinner circle_4${0}"${2}></div><div style="--n:5;" class="spinner circle_5${0}"${2}></div><div style="--n:6;" class="spinner circle_6${0}"${2}></div></div>`;
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
  tmpl.stylesheetToken = "componentes-spinner_spinner"
}
freezeTemplate(tmpl);
