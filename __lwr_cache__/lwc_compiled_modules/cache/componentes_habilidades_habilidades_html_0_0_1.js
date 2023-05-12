import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./habilidades.css";

import _implicitScopedStylesheets from "./habilidades.scoped.css?scoped=true";

import _componentesHabilidadesPopUp from "componentes/habilidadesPopUp";
import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
const stc1 = {
  "componentePopUp": true
};
const stc2 = {
  key: 2
};
const stc3 = {
  classMap: {
    "habilidades_Container": true
  },
  key: 3
};
const stc4 = {
  "habilidad_img": true
};
const stc5 = {
  "src": "../../../assets/utils/bbdd.png",
  "alt": ""
};
const stc6 = {
  "src": "../../../assets/utils/css.png",
  "alt": ""
};
const stc7 = {
  "src": "../../../assets/utils/JavaScript.png",
  "alt": ""
};
const stc8 = {
  classMap: {
    "habilidades_Container": true
  },
  key: 7
};
const stc9 = {
  "src": "../../../assets/utils/nodejs.png",
  "alt": ""
};
const stc10 = {
  "src": "../../../assets/utils/salesforce.png",
  "alt": ""
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5} = $ctx;
  return [$cmp.popUp ? api_element("tempalte", stc0, [api_custom_element("componentes-habilidades-pop-up", _componentesHabilidadesPopUp, {
    classMap: stc1,
    props: {
      "habilidad": $cmp.habilidades
    },
    key: 1,
    on: {
      "close": _m0 || ($ctx._m0 = api_bind($cmp.handleCloseModalWindow))
    }
  })]) : null, !$cmp.popUp ? api_element("tempalte", stc2, [api_element("div", stc3, [api_element("img", {
    classMap: stc4,
    attrs: stc5,
    key: 4,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleModal))
    }
  }), api_element("img", {
    classMap: stc4,
    attrs: stc6,
    key: 5,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.handleModal))
    }
  }), api_element("img", {
    classMap: stc4,
    attrs: stc7,
    key: 6,
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleModal))
    }
  })]), api_element("div", stc8, [api_element("img", {
    classMap: stc4,
    attrs: stc9,
    key: 8,
    on: {
      "click": _m4 || ($ctx._m4 = api_bind($cmp.handleModal))
    }
  }), api_element("img", {
    classMap: stc4,
    attrs: stc10,
    key: 9,
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.handleModal))
    }
  })])]) : null];
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
