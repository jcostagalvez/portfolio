import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./habilidadesCircle.css";

import _implicitScopedStylesheets from "./habilidadesCircle.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  "circle-container": true
};
const stc1 = {
  classMap: {
    "circle-title": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "circle-svg": true
  },
  attrs: {
    "version": "1.1",
    "baseProfile": "full",
    "xmlns": "http://www.w3.org/2000/svg"
  },
  key: 2,
  svg: true
};
const stc3 = {
  "circle-background": true
};
const stc4 = {
  "circle-front": true
};
const stc5 = {
  classMap: {
    "circle-percentage": true
  },
  key: 5
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", {
    classMap: stc0,
    attrs: {
      "id": api_scoped_id("circle")
    },
    key: 0
  }, [api_element("h1", stc1, [api_text(" " + api_dynamic_text($cmp.habilidad.nombre) + " ")]), api_element("svg", stc2, [api_element("circle", {
    classMap: stc3,
    attrs: {
      "cx": "50%",
      "r": $cmp.radius,
      "stroke-dasharray": $cmp.dasHarray,
      "fill": "transparent"
    },
    key: 3,
    svg: true
  }), api_element("circle", {
    classMap: stc4,
    attrs: {
      "cx": "50%",
      "r": $cmp.radius,
      "fill": "transparent",
      "stroke-dasharray": $cmp.dasHarray,
      "stroke-dashoffset": $cmp.fillPercentage
    },
    key: 4,
    svg: true
  })]), api_element("h2", stc5, [api_text(" " + api_dynamic_text($cmp.habilidad.experiencia) + " %")])])];
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
