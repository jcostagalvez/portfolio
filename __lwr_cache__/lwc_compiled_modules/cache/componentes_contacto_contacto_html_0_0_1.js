import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contacto.css";

import _implicitScopedStylesheets from "./contacto.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}> Formulario de contacto </h1>`;
const $fragment2 = parseFragment`<input type="hidden" name="oid" value="00D0900000DZiSW"${3}>`;
const $fragment3 = parseFragment`<input type="hidden" name="retURL" value="https://salesforce-portfolio.onrender.com"${3}>`;
const $fragment4 = parseFragment`<br${3}>`;
const $fragment5 = parseFragment`<br${3}>`;
const $fragment6 = parseFragment`<br${3}>`;
const $fragment7 = parseFragment`<br${3}>`;
const $fragment8 = parseFragment`<textarea name="description"${3}></textarea>`;
const $fragment9 = parseFragment`<br${3}>`;
const $fragment10 = parseFragment`<span class="form-block center${0}"${2}><input class="form-button${0}" type="submit" name="submit"${2}></span>`;
const stc0 = {
  classMap: {
    "form": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "form-container": true
  },
  attrs: {
    "action": "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
    "method": "POST"
  },
  key: 3
};
const stc2 = {
  key: 8
};
const stc3 = {
  "form-label": true
};
const stc4 = {
  "form-field": true
};
const stc5 = {
  key: 13
};
const stc6 = {
  key: 18
};
const stc7 = {
  key: 23
};
const stc8 = {
  classMap: {
    "form-block": true
  },
  key: 28
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, gid: api_scoped_id, t: api_text, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1(), 2), api_element("form", stc1, [api_static_fragment($fragment2(), 5), api_static_fragment($fragment3(), 7), api_element("span", stc2, [api_element("label", {
    classMap: stc3,
    attrs: {
      "for": api_scoped_id("first_name")
    },
    key: 9
  }, [api_text("Nombre")]), api_element("input", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("first_name"),
      "maxlength": "40",
      "name": "first_name",
      "type": "text"
    },
    key: 10
  }), api_static_fragment($fragment4(), 12)]), api_element("span", stc5, [api_element("label", {
    classMap: stc3,
    attrs: {
      "for": api_scoped_id("last_name")
    },
    key: 14
  }, [api_text("Apellidos")]), api_element("input", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("last_name"),
      "maxlength": "80",
      "name": "last_name",
      "type": "text"
    },
    key: 15
  }), api_static_fragment($fragment5(), 17)]), api_element("span", stc6, [api_element("label", {
    classMap: stc3,
    attrs: {
      "for": api_scoped_id("phone")
    },
    key: 19
  }, [api_text("Telefono")]), api_element("input", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("phone"),
      "maxlength": "40",
      "name": "phone",
      "type": "text"
    },
    key: 20
  }), api_static_fragment($fragment6(), 22)]), api_element("span", stc7, [api_element("label", {
    classMap: stc3,
    attrs: {
      "for": api_scoped_id("email")
    },
    key: 24
  }, [api_text("Email")]), api_element("input", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("email"),
      "maxlength": "80",
      "name": "email",
      "type": "text"
    },
    key: 25
  }), api_static_fragment($fragment7(), 27)]), api_element("span", stc8, [api_element("label", {
    classMap: stc3,
    attrs: {
      "for": api_scoped_id("description")
    },
    key: 29
  }, [api_text("Comentario")]), api_static_fragment($fragment8(), 31), api_static_fragment($fragment9(), 33)]), api_static_fragment($fragment10(), 35)])])];
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
  tmpl.stylesheetToken = "componentes-contacto_contacto"
}
freezeTemplate(tmpl);
