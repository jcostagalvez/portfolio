import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./formacion.css";

import _implicitScopedStylesheets from "./formacion.scoped.css?scoped=true";

import _lightningCard from "lightning/card";
import _lightningAccordionSection from "lightning/accordionSection";
import _lightningAccordion from "lightning/accordion";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p class="slds-p-horizontal_small${0}"${2}>Universidad de Oviedo (2010 - 2015)</p>`;
const $fragment2 = parseFragment`<p class="slds-p-horizontal_small${0}"${2}>Universidad Catolica de San Antonio  (2017 - 2019)</p>`;
const $fragment3 = parseFragment`<p class="slds-p-horizontal_small${0}"${2}>Universidad Autonoma de Madrid (2022 - 2023)</p>`;
const $fragment4 = parseFragment`<p class="slds-p-horizontal_small${0}"${2}>ASIME 4.0 (2017 - 2018)</p>`;
const $fragment5 = parseFragment`<p class="slds-p-horizontal_small${0}"${2}>Hazrtea (2023)</p>`;
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
  props: {
    "title": "Grado en psicologia"
  },
  key: 4
};
const stc5 = {
  props: {
    "title": "Master en psicologia general sanitaria"
  },
  key: 7
};
const stc6 = {
  props: {
    "title": "Especialista en terapia infantil y juvenil"
  },
  key: 10
};
const stc7 = {
  props: {
    "name": "Formacion_uncurricular",
    "label": "Formacion Extracurricular"
  },
  key: 13
};
const stc8 = {
  props: {
    "title": "Administrador de Salesforce"
  },
  key: 14
};
const stc9 = {
  props: {
    "title": "Introducción al Big data y Bussines Analitycs"
  },
  key: 17
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  return [api_element("div", stc0, [api_custom_element("lightning-accordion", _lightningAccordion, stc1, [api_element("div", stc2, [api_custom_element("lightning-accordion-section", _lightningAccordionSection, stc3, [api_custom_element("lightning-card", _lightningCard, stc4, [api_static_fragment($fragment1(), 6)]), api_custom_element("lightning-card", _lightningCard, stc5, [api_static_fragment($fragment2(), 9)]), api_custom_element("lightning-card", _lightningCard, stc6, [api_static_fragment($fragment3(), 12)])])]), api_custom_element("lightning-accordion-section", _lightningAccordionSection, stc7, [api_custom_element("lightning-card", _lightningCard, stc8, [api_static_fragment($fragment4(), 16)]), api_custom_element("lightning-card", _lightningCard, stc9, [api_static_fragment($fragment5(), 19)])])])])];
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
