import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./experiencia.css";

import _implicitScopedStylesheets from "./experiencia.scoped.css?scoped=true";

import _componentesFlechaPaginacion from "componentes/flechaPaginacion";
import _componentesCarousel from "componentes/carousel";
import _componentesPaginacion from "componentes/paginacion";
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
  "card-carousel": true
};
const stc4 = {
  "cards-paginacion": true
};
const stc5 = {
  classMap: {
    "card-pagination-front": true
  },
  key: 6
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5} = $ctx;
  return [api_element("div", stc0, [!$cmp.isMobile ? api_element("div", stc1, [$cmp.showBack ? api_custom_element("componentes-flecha-paginacion", _componentesFlechaPaginacion, {
    key: 2,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handlerBack))
    }
  }) : null]) : null, api_element("div", stc2, [api_custom_element("componentes-carousel", _componentesCarousel, {
    classMap: stc3,
    props: {
      "tarjetasInfo": $cmp.proyectos
    },
    key: 4,
    on: {
      "touchend": _m1 || ($ctx._m1 = api_bind($cmp.handlerTouchEnd)),
      "touchstart": _m2 || ($ctx._m2 = api_bind($cmp.handlerTouchStart)),
      "touchmove": _m3 || ($ctx._m3 = api_bind($cmp.moveCarousel))
    }
  }), $cmp.proyectos.length ? api_custom_element("componentes-paginacion", _componentesPaginacion, {
    classMap: stc4,
    props: {
      "page": $cmp.pageSelected,
      "size": $cmp.proyectos.length
    },
    key: 5,
    on: {
      "select": _m4 || ($ctx._m4 = api_bind($cmp.changePage))
    }
  }) : null]), !$cmp.isMobile ? api_element("div", stc5, [$cmp.showNext ? api_custom_element("componentes-flecha-paginacion", _componentesFlechaPaginacion, {
    key: 7,
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.handlerNext))
    }
  }) : null]) : null])];
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
