import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./formacion.css";

import _implicitScopedStylesheets from "./formacion.scoped.css?scoped=true";

import _lightningCard from "lightning/card";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "container_accordion": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "section_container": true
  },
  key: 1
};
const stc2 = {
  "accordition_title": true
};
const stc3 = {
  "card_accordion": true
};
const stc4 = {
  classMap: {
    "slds-p-horizontal_small": true
  },
  key: 4
};
const stc5 = [];
const stc6 = {
  classMap: {
    "section_container": true
  },
  key: 5
};
const stc7 = {
  classMap: {
    "slds-p-horizontal_small": true
  },
  key: 8
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, t: api_text, h: api_element, k: api_key, d: api_dynamic_text, c: api_custom_element, i: api_iterator, f: api_flatten} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, api_flatten([api_element("button", {
    classMap: stc2,
    key: 2,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClickSi))
    }
  }, [api_text(" Formacion Curricular ")]), $cmp.curricular ? api_iterator($cmp.lstCurricular, function (info) {
    return api_custom_element("lightning-card", _lightningCard, {
      classMap: stc3,
      props: {
        "title": info.titulo
      },
      key: api_key(3, info.id)
    }, [api_element("p", stc4, [api_text(api_dynamic_text(info.universidad) + " " + api_dynamic_text(info.final_fecha))])]);
  }) : stc5])), api_element("div", stc6, api_flatten([api_element("button", {
    classMap: stc2,
    key: 6,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleClickNo))
    }
  }, [api_text(" Formacion Extracurricular ")]), !$cmp.curricular ? api_iterator($cmp.lstNoCurricular, function (info) {
    return api_custom_element("lightning-card", _lightningCard, {
      classMap: stc3,
      props: {
        "title": info.titulo
      },
      key: api_key(7, info.id)
    }, [api_element("p", stc7, [api_text(api_dynamic_text(info.universidad) + " " + api_dynamic_text(info.final_fecha))])]);
  }) : stc5]))])];
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
  tmpl.stylesheetToken = "componentes-formacion_formacion"
}
freezeTemplate(tmpl);
