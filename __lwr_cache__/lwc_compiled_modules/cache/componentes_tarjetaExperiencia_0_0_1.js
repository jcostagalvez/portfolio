import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./tarjetaExperiencia.html";
class tarjetaExperiencia extends LightningElement {
  constructor(...args) {
    super(...args);
    this.info = void 0;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(tarjetaExperiencia, {
  publicProps: {
    info: {
      config: 0
    }
  }
});
export default _registerComponent(tarjetaExperiencia, {
  tmpl: _tmpl
});