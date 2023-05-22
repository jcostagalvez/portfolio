import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./habilidades.html";
class habilidades extends LightningElement {
  constructor(...args) {
    super(...args);
    this.popUp = false;
    this.habilidades = [{
      nombre: 'CSS',
      experiencia: 89
    }, {
      nombre: 'JS',
      experiencia: 89
    }, {
      nombre: 'NodeJs',
      experiencia: 89
    }, {
      nombre: 'JAVA',
      experiencia: 89
    }, {
      nombre: 'APEX',
      experiencia: 89
    }, {
      nombre: 'LWC',
      experiencia: 89
    }];
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