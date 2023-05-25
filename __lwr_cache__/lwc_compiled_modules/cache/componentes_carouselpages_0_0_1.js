import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./carouselpages.html";
class carouselPages extends LightningElement {
  constructor(...args) {
    super(...args);
    this.pages = [{
      page: 1,
      id: 1,
      selected: true
    }, {
      page: 2,
      id: 2,
      selected: false
    }, {
      page: 3,
      id: 3,
      selected: false
    }, {
      page: 4,
      id: 4,
      selected: false
    }, {
      page: 4,
      id: 4,
      selected: false
    }];
    this.pagesSelection = void 0;
  }
  renderedCallback() {
    console.log('Esta es la lista ----->> ' + this.pagesSelected.length);
  }
  clikHandler(event) {
    console.log(event);
    //this.dispatchEvent(new CustomEvent('page', {detail: this.}));
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(carouselPages, {
  publicProps: {
    pages: {
      config: 0
    },
    pagesSelection: {
      config: 0
    }
  }
});
export default _registerComponent(carouselPages, {
  tmpl: _tmpl
});