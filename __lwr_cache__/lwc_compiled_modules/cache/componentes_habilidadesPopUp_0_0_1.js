import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./habilidadesPopUp.html";
class habilidadesPopUp extends LightningElement {
  constructor(...args) {
    super(...args);
    this.habilidad = void 0;
  }
  handleClose() {
    console.log('se ha clickado');
    this.dispatchEvent(new CustomEvent('close'));
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(habilidadesPopUp, {
  publicProps: {
    habilidad: {
      config: 0
    }
  }
});
export default _registerComponent(habilidadesPopUp, {
  tmpl: _tmpl
});