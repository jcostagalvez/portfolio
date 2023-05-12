import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./accordionSection.css";

import _implicitScopedStylesheets from "./accordionSection.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-accordion__summary": true
  },
  key: 1
};
const stc1 = {
  "slds-accordion__summary-heading": true
};
const stc2 = {
  "section-control": true,
  "slds-button": true,
  "slds-button_reset": true,
  "slds-accordion__summary-action": true
};
const stc3 = {
  props: {
    "iconName": "utility:switch",
    "svgClass": "slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left",
    "size": "x-small"
  },
  key: 4
};
const stc4 = {
  "slds-accordion__summary-content": true
};
const stc5 = {
  attrs: {
    "name": "actions"
  },
  key: 6
};
const stc6 = [];
const stc7 = {
  "slds-accordion__content": true
};
const stc8 = {
  key: 8
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, gid: api_scoped_id, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element, s: api_slot} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("section", {
    className: $cmp.computedSectionClasses,
    key: 0
  }, [api_element("div", stc0, [api_element("h3", {
    classMap: stc1,
    key: 2,
    on: {
      "keydown": _m0 || ($ctx._m0 = api_bind($cmp.handleKeyDown))
    }
  }, [api_element("button", {
    classMap: stc2,
    attrs: {
      "type": "button",
      "aria-expanded": $cmp.computedAriaExpanded,
      "aria-controls": api_scoped_id("lgt-accordion-section")
    },
    key: 3,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleSelectSection))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc3), api_element("span", {
    classMap: stc4,
    attrs: {
      "title": $cmp.label
    },
    key: 5
  }, [api_text(api_dynamic_text($cmp.label))])])]), api_slot("actions", stc5, stc6, $slotset)]), api_element("div", {
    classMap: stc7,
    attrs: {
      "id": api_scoped_id("lgt-accordion-section"),
      "hidden": $cmp.computedHidden ? "" : null,
      "aria-hidden": $cmp.computedAriaHidden
    },
    key: 7
  }, [api_slot("", stc8, stc6, $slotset)])])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = ["", "actions"];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "lightning-accordionSection_accordionSection"
}
freezeTemplate(tmpl);
