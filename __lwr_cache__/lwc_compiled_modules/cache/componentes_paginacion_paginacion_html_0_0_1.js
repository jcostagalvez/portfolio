import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./paginacion.css";

import _implicitScopedStylesheets from "./paginacion.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "circles_container": true
  },
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, b: api_bind, h: api_element, i: api_iterator} = $api;
  const {_m0} = $ctx;
  return [$cmp.change ? api_element("div", stc0, api_iterator($cmp.pages, function (page) {
    return api_element("div", {
      className: page.class,
      attrs: {
        "data-id": page.id
      },
      key: api_key(1, page.id),
      on: {
        "click": _m0 || ($ctx._m0 = api_bind($cmp.clikHandler))
      }
    });
  })) : null];
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
  tmpl.stylesheetToken = "componentes-paginacion_paginacion"
}
freezeTemplate(tmpl);
