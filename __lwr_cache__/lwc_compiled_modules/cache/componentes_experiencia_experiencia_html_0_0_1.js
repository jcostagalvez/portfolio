import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./experiencia.css";

import _implicitScopedStylesheets from "./experiencia.scoped.css?scoped=true";

import _componentesFlechaPaginacion from "componentes/flechaPaginacion";
import _componentesCarousel from "componentes/carousel";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "experiencia-container": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "card-pagination-back": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "cards-container": true
  },
  key: 3
};
const stc3 = {
  classMap: {
    "card-pagination-front": true
  },
  key: 5
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [$cmp.showBack ? api_custom_element("componentes-flecha-paginacion", _componentesFlechaPaginacion, {
    key: 2,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handlerBack))
    }
  }) : null]), api_element("div", stc2, [api_custom_element("componentes-carousel", _componentesCarousel, {
    props: {
      "tarjetasInfo": $cmp.proyectos
    },
    key: 4
  })]), api_element("div", stc3, [$cmp.showNext ? api_custom_element("componentes-flecha-paginacion", _componentesFlechaPaginacion, {
    key: 6,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handlerNext))
    }
  }) : null])])];
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
  tmpl.stylesheetToken = "componentes-experiencia_experiencia"
}
freezeTemplate(tmpl);
