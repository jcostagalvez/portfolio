import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./habilidades.html";
class habilidades extends LightningElement {
  constructor(...args) {
    super(...args);
    this.popUp = false;
    this.habilidades = {
      img: 'lo que sea',
      title: 'BBDD relacionales y no relacionales',
      body: 'Experiencia en Bases de Datos relacionales y no relacionales.'
    };
  }
  handleModal() {
    this.popUp = true;
  }
  handleCloseModalWindow() {
    this.popUp = false;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(habilidades, {
  track: {
    popUp: 1,
    habilidades: 1
  }
});
export default _registerComponent(habilidades, {
  tmpl: _tmpl
});