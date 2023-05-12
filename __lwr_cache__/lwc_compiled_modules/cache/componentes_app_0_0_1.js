import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./app.html";
import { navigationItems, navigationElements } from "./navigation";
class app extends LightningElement {
  constructor(...args) {
    super(...args);
    this.navigationElements = navigationElements;
    this.navigationItems = navigationItems;
    this.pastTab = '';
    this.actualTab = '';
    this.introduction = true;
    this.portfolio = false;
  }
  connectedCallback() {
    fetch('/api/login').then(res => {
      console.log('conectado');
    });
  }
  handleClick(event) {
    this.introduction = false;
    this.portfolio = true;
    console.log(this.introduction);
  }
  handleNavSelected(event) {
    const tab = event.detail;
    if (this.actualTab == '') {
      this.actualTab = tab;
      this.navigationItems[this.actualTab].visible = true;
    } else {
      this.pastTab = this.actualTab;
      this.actualTab = tab;
      this.navigationItems[this.pastTab].visible = false;
      this.navigationItems[this.actualTab].visible = true;
    }
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(app, {
  track: {
    navigationItems: 1,
    introduction: 1,
    portfolio: 1
  },
  fields: ["navigationElements", "pastTab", "actualTab"]
});
export default _registerComponent(app, {
  tmpl: _tmpl
});