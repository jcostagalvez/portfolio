import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tabset.css";

import _implicitScopedStylesheets from "./tabset.scoped.css?scoped=true";

import _lightningTabBar from "lightning/tabBar";
import {registerTemplate} from "lwc";
const stc0 = {
  key: 2
};
const stc1 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, s: api_slot, h: api_element} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("div", {
    className: $cmp.computedClass,
    attrs: {
      "title": $cmp.title
    },
    key: 0,
    on: {
      "privatetabregister": _m0 || ($ctx._m0 = api_bind($cmp.handleTabRegister)),
      "privatetabdatachange": _m1 || ($ctx._m1 = api_bind($cmp.handleTabDataChange))
    }
  }, [api_custom_element("lightning-tab-bar", _lightningTabBar, {
    props: {
      "variant": $cmp.variant
    },
    key: 1,
    on: {
      "select": _m2 || ($ctx._m2 = api_bind($cmp.handleTabSelected))
    }
  }), api_slot("", stc0, stc1, $slotset)])];
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
  tmpl.stylesheetToken = "lightning-tabset_tabset"
}
freezeTemplate(tmpl);
