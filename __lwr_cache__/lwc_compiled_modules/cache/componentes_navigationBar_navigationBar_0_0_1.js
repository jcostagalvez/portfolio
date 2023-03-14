import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./navigationBar.html";
import { navigationItems, navigationElements } from "./navigationBar";
class navBar extends LightningElement {
  constructor(...args) {
    super(...args);
    this.tabs = void 0;
  }
  handleClick(event) {
    const elementSelected = this.template.querySelector(`#${event.target.id}`);
    const navSelected = new CustomEvent('navselected', {
      detail: elementSelected.innerHTML
    });
    this.dispatchEvent(navSelected);
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(navBar, {
  publicProps: {
    tabs: {
      config: 0
    }
  }
});
export default _registerComponent(navBar, {
  tmpl: _tmpl
});