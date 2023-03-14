import _tmpl from "./flechaPaginacion.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
class flechaPaginacion extends LightningElement {
  handleclick() {
    const nextPage = new CustomEvent('click');
    this.dispatchEvent(selectedEvent);
  }
  /*LWC compiler v2.17.0*/
}
export default _registerComponent(flechaPaginacion, {
  tmpl: _tmpl
});