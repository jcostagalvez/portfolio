import _tmpl from "./navbar.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
class navBar extends LightningElement {
  handleClick(event) {
    const mainContainer = this.template.querySelector('.introduccion');
    console.log('hola');
  }
  /*LWC compiler v2.17.0*/
}
export default _registerComponent(navBar, {
  tmpl: _tmpl
});