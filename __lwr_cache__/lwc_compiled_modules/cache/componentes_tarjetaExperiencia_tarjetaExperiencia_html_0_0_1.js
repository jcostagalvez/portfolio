import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tarjetaExperiencia.css";

import _implicitScopedStylesheets from "./tarjetaExperiencia.scoped.css?scoped=true";

import _lightningBadge from "lightning/badge";
import _lightningCard from "lightning/card";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "scene": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "container-card": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "title_container": true
  },
  key: 2
};
const stc3 = {
  "title-logo": true
};
const stc4 = {
  classMap: {
    "title_text": true
  },
  key: 4
};
const stc5 = {
  key: 5
};
const stc6 = {
  classMap: {
    "body-container": true
  },
  key: 6
};
const stc7 = {
  classMap: {
    "body-proyectos-container": true
  },
  key: 7
};
const stc8 = {
  classMap: {
    "body-proyectos": true
  },
  key: 8
};
const stc9 = {
  classMap: {
    "footer-container": true
  },
  key: 9
};
const stc10 = {
  "footer-badges": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, d: api_dynamic_text, t: api_text, k: api_key, c: api_custom_element, i: api_iterator} = $api;
  return [api_custom_element("lightning-card", _lightningCard, stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("img", {
    classMap: stc3,
    attrs: {
      "src": $cmp.info.logo,
      "alt": ""
    },
    key: 3
  }), api_element("p", stc4, [api_text(" " + api_dynamic_text($cmp.info.name) + "  "), api_element("span", stc5, [api_text(" (" + api_dynamic_text($cmp.info.inicio_fecha) + " - " + api_dynamic_text($cmp.info.final_fecha) + ") ")])])]), api_element("div", stc6, [api_element("div", stc7, [api_element("span", stc8, [api_text(" " + api_dynamic_text($cmp.info.titulo) + " ")])])]), api_element("div", stc9, api_iterator($cmp.info.lenguajes, function (habilidad) {
    return api_custom_element("lightning-badge", _lightningBadge, {
      classMap: stc10,
      props: {
        "label": habilidad
      },
      key: api_key(10, habilidad)
    });
  }))])])];
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
  tmpl.stylesheetToken = "componentes-tarjetaExperiencia_tarjetaExperiencia"
}
freezeTemplate(tmpl);
