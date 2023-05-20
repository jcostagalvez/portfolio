import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./habilidadesCircle.css";

import _implicitScopedStylesheets from "./habilidadesCircle.scoped.css?scoped=true";

import {parseFragment, parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<text class="circle-lenguaje${0}"${2}> CSS </text>`;
const $fragment2 = parseFragment`<h1${3}> CSS </h1>`;
const stc0 = {
  classMap: {
    "circle-container": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "circle-svg": true
  },
  attrs: {
    "version": "1.1",
    "baseProfile": "full",
    "xmlns": "http://www.w3.org/2000/svg"
  },
  key: 1,
  svg: true
};
const stc2 = {
  "circle-background": true
};
const stc3 = {
  "circle-front": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, st: api_static_fragment} = $api;
  return [api_element("div", stc0, [api_element("svg", stc1, [api_element("circle", {
    classMap: stc2,
    attrs: {
      "r": "90px",
      "stroke-dasharray": $cmp.dasHarray,
      "fill": "transparent"
    },
    key: 2,
    svg: true
  }), api_static_fragment($fragment1(), 4), api_element("circle", {
    classMap: stc3,
    attrs: {
      "r": "90px",
      "fill": "transparent",
      "stroke-dasharray": $cmp.dasHarray,
      "stroke-dashoffset": $cmp.fillPercentage
    },
    key: 5,
    svg: true
  })]), api_static_fragment($fragment2(), 7)])];
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
  tmpl.stylesheetToken = "componentes-habilidadesCircle_habilidadesCircle"
}
freezeTemplate(tmpl);
