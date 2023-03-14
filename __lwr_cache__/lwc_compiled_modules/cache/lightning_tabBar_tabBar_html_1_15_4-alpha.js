import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tabBar.css";

import _implicitScopedStylesheets from "./tabBar.scoped.css?scoped=true";

import _lightningIcon from "lightning/icon";
import _lightningMenuItem from "lightning/menuItem";
import _lightningButtonMenu from "lightning/buttonMenu";
import {registerTemplate} from "lwc";
const stc0 = {
  "data-overflow": ""
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, k: api_key, ti: api_tab_index, c: api_custom_element, h: api_element, d: api_dynamic_text, t: api_text, i: api_iterator, f: api_flatten} = $api;
  const {_m0, _m1, _m2, _m3, _m4} = $ctx;
  return [api_element("ul", {
    className: $cmp.computedListClass,
    attrs: {
      "role": "tablist",
      "aria-orientation": $cmp.computedAriaOrientation
    },
    key: 0,
    on: {
      "keydown": _m0 || ($ctx._m0 = api_bind($cmp.handleKeyDown))
    }
  }, api_flatten([api_iterator($cmp._allTabs, function (tab) {
    return tab.visible ? api_element("li", {
      className: tab.class,
      attrs: {
        "data-tab": "",
        "title": tab.title,
        "role": "presentation",
        "data-label": tab.label,
        "data-tab-value": tab.value,
        "data-target-selection-name": tab.targetSelectionName
      },
      key: api_key(1, tab.value),
      on: {
        "click": _m1 || ($ctx._m1 = api_bind($cmp.handleTabClick))
      }
    }, [api_element("a", {
      className: tab.linkClass,
      attrs: {
        "data-tab-value": tab.value,
        "data-label": tab.label,
        "role": "tab",
        "href": "javascript:void(0)",
        "tabindex": api_tab_index(tab.tabIndex),
        "aria-selected": tab.ariaSelected
      },
      key: 2,
      on: {
        "blur": _m2 || ($ctx._m2 = api_bind($cmp.handleBlur)),
        "focus": _m3 || ($ctx._m3 = api_bind($cmp.handleFocus))
      }
    }, [tab.iconName ? api_element("span", {
      className: $cmp.computedLeftIconClass,
      key: 3
    }, [api_custom_element("lightning-icon", _lightningIcon, {
      attrs: {
        "data-tab-value": tab.value
      },
      props: {
        "iconName": tab.iconName,
        "size": "small",
        "alternativeText": tab.iconAlternativeText
      },
      key: 4
    })]) : null, api_text(api_dynamic_text(tab.label)), tab.endIconName ? api_element("span", {
      className: $cmp.computedRightIconClass,
      key: 5
    }, [api_custom_element("lightning-icon", _lightningIcon, {
      attrs: {
        "data-tab-value": tab.value
      },
      props: {
        "iconName": tab.endIconName,
        "size": "small",
        "alternativeText": tab.endIconAlternativeText
      },
      key: 6
    })]) : null, tab.showErrorIndicator ? api_element("span", {
      className: $cmp.computedRightIconClass,
      key: 7
    }, [api_custom_element("lightning-icon", _lightningIcon, {
      attrs: {
        "data-tab-value": tab.value
      },
      props: {
        "iconName": "utility:error",
        "variant": "error",
        "size": "small",
        "alternativeText": $cmp.i18n.errorStateAlternativeText
      },
      key: 8
    })]) : null])]) : null;
  }), $cmp.overflowSupported ? api_element("li", {
    className: $cmp.computedOverflowClass,
    style: $cmp.computedOverflowVisibility,
    attrs: stc0,
    key: 9
  }, [api_custom_element("lightning-button-menu", _lightningButtonMenu, {
    attrs: {
      "data-target-reveals": $cmp.targetReveals
    },
    props: {
      "variant": "bare",
      "alternativeText": $cmp.i18n.moreAlternativeText,
      "title": $cmp.i18n.moreTitle,
      "iconName": "utility:chevrondown",
      "label": $cmp.i18n.more,
      "menuAlignment": "right"
    },
    key: 10,
    on: {
      "select": _m4 || ($ctx._m4 = api_bind($cmp.handleOverflowSelect))
    }
  }, api_iterator($cmp._allTabs, function (tab) {
    return !tab.visible ? api_custom_element("lightning-menu-item", _lightningMenuItem, {
      attrs: {
        "data-target-selection-name": tab.targetSelectionName
      },
      props: {
        "label": tab.label,
        "value": tab.value
      },
      key: api_key(11, tab.value)
    }) : null;
  }))]) : null]))];
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
  tmpl.stylesheetToken = "lightning-tabBar_tabBar"
}
freezeTemplate(tmpl);
