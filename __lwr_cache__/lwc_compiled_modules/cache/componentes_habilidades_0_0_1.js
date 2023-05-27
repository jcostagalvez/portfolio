import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./habilidades.html";
class habilidades extends LightningElement {
  constructor(...args) {
    super(...args);
    this.popUp = false;
    this.habilidades = [];
    this.habilidadesShow = [];
    this.showBack = false;
    this.showNext = false;
    this.elementPerpage = 0;
    this.actualPage = 1;
    this.finalPixeles = 0;
    this.inicioPixeles = 0;
    this.pages = 0;
  }
  connectedCallback() {
    this.isMobile = window.matchMedia("(max-width: 480px)").matches;
    this.elementPerpage = this.isMobile == true ? 2 : 6;
    fetch('/api/habilidad/Jesús Costa Gálvez').then(response => response.json()).then(response => {
      this.dispatchEvent(new CustomEvent('load'));
      this.habilidades = response;
      this.pages = response.length / this.elementPerpage;
      if (this.isMobile) {
        if (this.habilidades.length > 2) this.showNext = true;
        this.habilidadesShow = this.habilidades.slice(0, this.elementPerpage);
      } else if (!this.isMobile) {
        console.log(this.habilidades.length);
        if (this.habilidades.length > 5) this.showNext = true;
        this.habilidadesShow = this.habilidades.slice(0, this.elementPerpage);
      }
    }).catch(err => console.log(err));
  }
  handlerNext() {
    const pageSelected = this.actualPage + 1;
    this.pagination(pageSelected);
    this.actualPage = pageSelected;
  }
  handlerBack() {
    const pageSelected = this.actualPage - 1;
    this.pagination(pageSelected);
    this.actualPage = pageSelected;
  }
  moveCarousel(e) {
    this.finalPixeles = e.touches[0].clientX;
  }
  handlerTouchStart(e) {
    this.inicioPixeles = e.touches[0].clientX;
  }
  handlerTouchEnd(e) {
    if (this.inicioPixeles > this.finalPixeles) {
      this.finalPixeles = '';
      this.inicioPixeles = '';
      if (!(this.actualPage * this.elementPerpage >= this.habilidades.length)) {
        this.handlerNext();
      }
    } else if (this.inicioPixeles < this.finalPixeles) {
      this.finalPixeles = '';
      this.inicioPixeles = '';
      if (!(this.actualPage <= 1)) {
        this.handlerBack();
      }
    }
  }
  changePage(event) {
    const index = parseInt(event.detail, 10);
    //const elementVisible = this.proyectos.filter(proyecto => proyecto.isVisible == true);
    //elementVisible[0].isVisible = false;
    this.pagination(index);
    //this.proyectos[event.detail - 1].isVisible = true;
  }

  pagination(pageSelected) {
    console.log('pageSelected -----------> ' + pageSelected);
    console.log('this.habilidades.length - 1 -----------> ' + this.habilidades.length);
    if (pageSelected - 1 <= 0) {
      this.showNext = false;
      this.showBack = true;
      this.habilidadesShow = this.habilidades.slice(0, pageSelected * this.elementPerpage);
    } else if (pageSelected * this.elementPerpage >= this.habilidades.length) {
      this.habilidadesShow = this.habilidades.slice((pageSelected - 1) * this.elementPerpage, pageSelected * this.elementPerpage);
      this.showBack = false;
      this.showNext = true;
    } else {
      this.showBack = true;
      this.showNext = true;
      if (pageSelected > this.actualPage) {
        this.habilidadesShow = this.habilidades.slice((pageSelected - 1) * this.elementPerpage, pageSelected * this.elementPerpage);
      } else if (pageSelected < this.actualPage) {
        this.habilidadesShow = this.habilidades.slice(pageSelected * this.elementPerpage - this.elementPerpage, pageSelected * this.elementPerpage);
      }
    }
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(habilidades, {
  track: {
    popUp: 1,
    habilidades: 1,
    habilidadesShow: 1,
    showBack: 1,
    showNext: 1,
    elementPerpage: 1,
    actualPage: 1,
    finalPixeles: 1,
    inicioPixeles: 1,
    pages: 1
  }
});
export default _registerComponent(habilidades, {
  tmpl: _tmpl
});