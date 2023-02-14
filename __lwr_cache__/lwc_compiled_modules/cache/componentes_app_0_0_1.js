import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./app.html";
class app extends LightningElement {
  constructor(...args) {
    super(...args);
    this.introduction = true;
    this.portfolio = true;
  }
  handleClick(event) {
    this.introduction = false;
    console.log(this.introduction);
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(app, {
  track: {
    introduction: 1,
    portfolio: 1
  }
});
export default _registerComponent(app, {
  tmpl: _tmpl
});