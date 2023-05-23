import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./habilidades.css";

import _implicitScopedStylesheets from "./habilidades.scoped.css?scoped=true";

import _componentesHabilidadesCircle from "componentes/habilidadesCircle";
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
    "habilidad-cards": true
  },
  key: 4
};
const stc3 = {
  "habilidad-flex": true
};
const stc4 = {
  "habilidad-function": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, c: api_custom_element, h: api_element, i: api_iterator} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1(), 2), api_element("div", stc1, [api_element("div", stc2, api_iterator($cmp.habilidades, function (habilidad) {
    return api_element("div", {
      classMap: stc3,
      key: api_key(5, habilidad.name)
    }, [api_custom_element("componentes-habilidades-circle", _componentesHabilidadesCircle, {
      classMap: stc4,
      props: {
        "habilidad": habilidad
      },
      key: 6
    })]);
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
  tmpl.stylesheetToken = "componentes-habilidades_habilidades"
}
freezeTemplate(tmpl);
