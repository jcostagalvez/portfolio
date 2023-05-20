import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./habilidades.html";
class habilidades extends LightningElement {
  constructor(...args) {
    super(...args);
    this.popUp = false;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(habilidades, {
  track: {
    popUp: 1
  }
});
export default _registerComponent(habilidades, {
  tmpl: _tmpl
});