import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _componentesIntroduccion from "componentes/introduccion";
import _componentesNavigationBar from "componentes/navigationBar";
import _componentesExperiencia from "componentes/experiencia";
import _componentesFormacion from "componentes/formacion";
import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  key: 3
};
const stc3 = {
  key: 5
};
const stc4 = {
  key: 6
};
const stc5 = {
  key: 7
};
const stc6 = {
  key: 8
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("main", stc0, [$cmp.introduction ? api_element("tempalte", stc1, [api_custom_element("componentes-introduccion", _componentesIntroduccion, {
    key: 2,
    on: {
      "buttonclick": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
    }
  })]) : null, $cmp.portfolio ? api_element("tempalte", stc2, [api_custom_element("componentes-navigation-bar", _componentesNavigationBar, {
    props: {
      "tabs": $cmp.navigationElements
    },
    key: 4,
    on: {
      "navselected": _m1 || ($ctx._m1 = api_bind($cmp.handleNavSelected))
    }
  }), $cmp.navigationItems.Experiencia.visible ? api_element("tempalte", stc3, [api_custom_element("componentes-experiencia", _componentesExperiencia, stc4)]) : null, $cmp.navigationItems.Formación.visible ? api_element("tempalte", stc5, [api_custom_element("componentes-formacion", _componentesFormacion, stc6)]) : null]) : null])];
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
  tmpl.stylesheetToken = "componentes-app_app"
}
freezeTemplate(tmpl);
