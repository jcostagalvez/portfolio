import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./navigationBar.css";

import _implicitScopedStylesheets from "./navigationBar.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "tab-container": true
  },
  key: 0
};
const stc1 = {
  "tab_container": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, k: api_key, b: api_bind, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, api_iterator($cmp.tabs, function (tab) {
    return api_element("div", {
      classMap: stc1,
      attrs: {
        "id": api_scoped_id(tab),
        "tabindex": "0"
      },
      key: api_key(1, tab),
      on: {
        "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
      }
    }, [api_text(api_dynamic_text(tab))]);
  }))];
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
  tmpl.stylesheetToken = "componentes-navigationBar_navigationBar"
}
freezeTemplate(tmpl);
