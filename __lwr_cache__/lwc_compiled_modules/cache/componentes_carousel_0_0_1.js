import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./carousel.html";
class carousel extends LightningElement {
  constructor(...args) {
    super(...args);
    this.tarjetasInfo = void 0;
  }
  renderedCallback() {
    console.log(`Que nos esta llegando ${this.tarjetasInfo[0]}`);
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(carousel, {
  publicProps: {
    tarjetasInfo: {
      config: 0
    }
  }
});
export default _registerComponent(carousel, {
  tmpl: _tmpl
});