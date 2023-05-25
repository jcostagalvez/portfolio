import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./paginacion.html";
class paginacion extends LightningElement {
  constructor(...args) {
    super(...args);
    this.pagesselected = void 0;
    this.pages = [];
    this.change = false;
    this.size = void 0;
  }
  get page() {
    return this.pagesselected;
  }
  set page(value) {
    if (this.pages.length != 0) {
      this.pagesselected = value;
      console.log(this.pagesselected);
      this.setUnSelected();
      this.setSelected(value);
    }
  }
  connectedCallback() {
    console.log('Esto se esta llamando ---> ' + this.size);
    this.pages = this.setpages(this.size);
    this.setSelected(1);
    this.change = true;
  }
  clikHandler(event) {
    const pagina = event.currentTarget.dataset.id;
    this.setUnSelected();
    this.dispatchEvent(new CustomEvent('select', {
      detail: pagina
    }));
    this.setSelected(pagina);
  }
  setpages() {
    let list = [];
    for (let i = 0; i < this.size; i++) {
      let object = {
        page: i + 1,
        id: i + 1,
        class: 'unselected'
      };
      list.push(object);
    }
    return list;
  }
  setSelected(pagina) {
    const lstObjectSelected = this.pages.filter(page => page.id == pagina);
    console.log(this.pages);
    lstObjectSelected[0].class = 'selected';
  }
  setUnSelected() {
    const lstObjectSelected = this.pages.filter(page => page.class == 'selected');
    lstObjectSelected[0].class = 'unselected';
  }
  changePage(event) {
    console.log('Estamos reciviendo esto -----> ' + event.detail);
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(paginacion, {
  publicProps: {
    size: {
      config: 0
    },
    page: {
      config: 3
    }
  },
  track: {
    pages: 1,
    change: 1
  },
  fields: ["pagesselected"]
});
export default _registerComponent(paginacion, {
  tmpl: _tmpl
});