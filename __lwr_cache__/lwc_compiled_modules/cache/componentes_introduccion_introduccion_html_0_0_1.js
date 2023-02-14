import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./introduccion.css";

import _implicitScopedStylesheets from "./introduccion.scoped.css?scoped=true";

import _componentesImagenDisplayer from "componentes/imagenDisplayer";
import _componentesTitulo from "componentes/titulo";
import _componentesBoton from "componentes/boton";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "introduccion_container": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "imagen_container": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "imagen": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "info_container": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "info_titulo": true
  },
  key: 4
};
const stc5 = {
  classMap: {
    "button-Container": true
  },
  key: 5
};
const stc6 = {
  "boton_titulo": true
};
const stc7 = {
  "type": "standard"
};
const stc8 = {
  attrs: {
    "href": "../../../assets/utils/CV.pdf",
    "download": "Jesús Costa CV.pdf"
  },
  key: 7
};
const stc9 = {
  "type": "negative border"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, b: api_bind, t: api_text} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_custom_element("componentes-imagen-displayer", _componentesImagenDisplayer, stc2)]), api_element("div", stc3, [api_custom_element("componentes-titulo", _componentesTitulo, stc4), api_element("div", stc5, [api_custom_element("componentes-boton", _componentesBoton, {
    classMap: stc6,
    props: stc7,
    key: 6,
    on: {
      "buttonclick": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
    }
  }, [api_text(" Ver CV online ")]), api_element("a", stc8, [api_custom_element("componentes-boton", _componentesBoton, {
    classMap: stc6,
    props: stc9,
    key: 8,
    on: {
      "buttonclick": _m1 || ($ctx._m1 = api_bind($cmp.handleClick))
    }
  }, [api_text(" Descargar CV en pdf ")])])])])])];
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
  tmpl.stylesheetToken = "componentes-introduccion_introduccion"
}
freezeTemplate(tmpl);
