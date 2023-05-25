import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./habilidades.css";

import _implicitScopedStylesheets from "./habilidades.scoped.css?scoped=true";

import _componentesFlechaPaginacion from "componentes/flechaPaginacion";
import _componentesHabilidadesCircle from "componentes/habilidadesCircle";
import _componentesPaginacion from "componentes/paginacion";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}> %  EXPERIENCIA EN HABILIDADES</h1>`;
const stc0 = {
  classMap: {
    "habilidades-container": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "habilidad-container": true
  },
  key: 3
};
const stc2 = {
  classMap: {
    "card-pagination-back": true
  },
  key: 4
};
const stc3 = {
  classMap: {
    "habilidades_corousel": true
  },
  key: 6
};
const stc4 = {
  "habilidad-cards": true
};
const stc5 = {
  "habilidad-flex": true
};
const stc6 = {
  "habilidad-function": true
};
const stc7 = {
  "cards-paginacion": true
};
const stc8 = {
  classMap: {
    "card-pagination-front": true
  },
  key: 11
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, b: api_bind, c: api_custom_element, h: api_element, k: api_key, i: api_iterator} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5} = $ctx;
  return [api_element("div", stc0, [api_static_fragment($fragment1(), 2), api_element("div", stc1, [!$cmp.isMobile ? api_element("div", stc2, [$cmp.showBack ? api_custom_element("componentes-flecha-paginacion", _componentesFlechaPaginacion, {
    key: 5,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handlerBack))
    }
  }) : null]) : null, api_element("div", stc3, [api_element("div", {
    classMap: stc4,
    key: 7,
    on: {
      "touchend": _m1 || ($ctx._m1 = api_bind($cmp.handlerTouchEnd)),
      "touchstart": _m2 || ($ctx._m2 = api_bind($cmp.handlerTouchStart)),
      "touchmove": _m3 || ($ctx._m3 = api_bind($cmp.moveCarousel))
    }
  }, api_iterator($cmp.habilidadesShow, function (habilidad) {
    return api_element("div", {
      classMap: stc5,
      key: api_key(8, habilidad.name)
    }, [api_custom_element("componentes-habilidades-circle", _componentesHabilidadesCircle, {
      classMap: stc6,
      props: {
        "habilidad": habilidad
      },
      key: 9
    })]);
  })), $cmp.habilidadesShow.length ? api_custom_element("componentes-paginacion", _componentesPaginacion, {
    classMap: stc7,
    props: {
      "page": $cmp.actualPage,
      "size": $cmp.pages
    },
    key: 10,
    on: {
      "select": _m4 || ($ctx._m4 = api_bind($cmp.changePage))
    }
  }) : null]), !$cmp.isMobile ? api_element("div", stc8, [$cmp.showNext ? api_custom_element("componentes-flecha-paginacion", _componentesFlechaPaginacion, {
    key: 12,
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.handlerNext))
    }
  }) : null]) : null])])];
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
