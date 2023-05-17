import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./formacion.css";

import _implicitScopedStylesheets from "./formacion.scoped.css?scoped=true";

import _lightningCard from "lightning/card";
import _lightningAccordionSection from "lightning/accordionSection";
import _lightningAccordion from "lightning/accordion";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "container_accordion": true
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  classMap: {
    "section_container": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "section": true
  },
  props: {
    "name": "Formacion_curricular",
    "label": "Formación Curricular"
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-p-horizontal_small": true
  },
  key: 5
};
const stc5 = {
  classMap: {
    "section_container": true
  },
  key: 6
};
const stc6 = {
  props: {
    "name": "Formacion_uncurricular",
    "label": "Formacion Extracurricular"
  },
  key: 7
};
const stc7 = {
  classMap: {
    "slds-p-horizontal_small": true
  },
  key: 9
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element, i: api_iterator} = $api;
  return [api_element("div", stc0, [api_custom_element("lightning-accordion", _lightningAccordion, stc1, [api_element("div", stc2, [api_custom_element("lightning-accordion-section", _lightningAccordionSection, stc3, api_iterator($cmp.lstCurricular, function (info) {
    return api_custom_element("lightning-card", _lightningCard, {
      props: {
        "title": info.titulo
      },
      key: api_key(4, info.id)
    }, [api_element("p", stc4, [api_text(api_dynamic_text(info.universidad) + " " + api_dynamic_text(info.final_fecha))])]);
  }))]), api_element("div", stc5, [api_custom_element("lightning-accordion-section", _lightningAccordionSection, stc6, api_iterator($cmp.lstNoCurricular, function (info) {
    return api_custom_element("lightning-card", _lightningCard, {
      props: {
        "title": info.titulo
      },
      key: api_key(8, info.id)
    }, [api_element("p", stc7, [api_text(api_dynamic_text(info.universidad) + " " + api_dynamic_text(info.final_fecha))])]);
  }))])])])];
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
