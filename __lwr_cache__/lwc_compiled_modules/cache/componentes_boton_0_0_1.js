import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./boton.html";
class boton extends LightningElement {
  constructor(...args) {
    super(...args);
    this.type = void 0;
  }
  handleClick() {
    console.log('se clicka el boton');
    const buttonclick = new CustomEvent('buttonclick');
    this.dispatchEvent(buttonclick, {
      bubbles: true,
      composed: true,
      detail: 'click'
    });
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(boton, {
  publicProps: {
    type: {
      config: 0
    }
  }
});
export default _registerComponent(boton, {
  tmpl: _tmpl
});