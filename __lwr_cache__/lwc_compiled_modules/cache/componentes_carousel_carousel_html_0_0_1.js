import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./carousel.css";

import _implicitScopedStylesheets from "./carousel.scoped.css?scoped=true";

import _componentesTarjetaExperiencia from "componentes/tarjetaExperiencia";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "scene": true
  },
  key: 0
};
const stc1 = {
  "carousel__cell": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, c: api_custom_element, i: api_iterator, h: api_element} = $api;
  return [api_element("div", stc0, api_iterator($cmp.tarjetasInfo, function (info) {
    return info.isVisible ? api_custom_element("componentes-tarjeta-experiencia", _componentesTarjetaExperiencia, {
      classMap: stc1,
      props: {
        "info": info
      },
      key: api_key(1, info.id)
    }) : null;
  }))];
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
  tmpl.stylesheetToken = "componentes-carousel_carousel"
}
freezeTemplate(tmpl);
