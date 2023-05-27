import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./experiencia.html";
class experiencia extends LightningElement {
  constructor(...args) {
    super(...args);
    this.proyectos = [];
    this.showNext = true;
    this.showBack = false;
    this.renderoptionlist = [];
    this.isMobile = '';
    this.inicioPixeles = '';
    this.finalPixeles = '';
    this.pageSelected = 1;
  }
  connectedCallback() {
    this.isMobile = window.matchMedia("(max-width: 480px)").matches;
    console.log(this.isMobile);
    fetch('/api/experiencia/Jesús Costa Gálvez').then(response => response.json()).then(response => {
      console.log(response);
      this.proyectos = response;
      this.proyectos.forEach((item, index) => {
        let fecha_Inicio = new Date(item.inicio_fecha);
        let fecha_final = new Date(item.final_fecha);
        item.inicio_fecha = `${fecha_Inicio.getMonth() < 10 ? '0' + fecha_Inicio.getMonth() : fecha_Inicio.getMonth()} / ${fecha_Inicio.getFullYear()}`;
        item.final_fecha = `${fecha_final.getMonth() < 10 ? '0' + fecha_final.getMonth() : fecha_final.getMonth()} / ${fecha_final.getFullYear()}`;
        this.dispatchEvent(new CustomEvent('load'));
        if (index === 0) {
          item.isVisible = true;
        } else {
          item.isVisible = false;
        }
      });
    }).catch(error => console.log(error));
  }
  handlerNext() {
    const elementVisible = this.proyectos.filter(proyecto => proyecto.isVisible == true);
    const index = this.proyectos.map(proyecto => proyecto.empresa).indexOf(elementVisible[0].empresa) + 1;
    const nextIndex = index + 1;
    console.log('next index ---->' + nextIndex);
    console.log('this.proyectos.length ---->' + this.proyectos.length);
    if (nextIndex < this.proyectos.length + 1) {
      console.log('PASA POR AQUI ---->');
      elementVisible[0].isVisible = false;
      this.changeVisibilityPagination(nextIndex);
      this.proyectos[nextIndex - 1].isVisible = true;
      this.pageSelected = nextIndex;
    }
  }
  handlerBack() {
    const elementVisible = this.proyectos.filter(proyecto => proyecto.isVisible == true);
    const index = this.proyectos.map(proyecto => proyecto.empresa).indexOf(elementVisible[0].empresa) + 1;
    const backIndex = index - 1;
    if (backIndex > 0) {
      elementVisible[0].isVisible = false;
      this.changeVisibilityPagination(backIndex);
      this.proyectos[backIndex - 1].isVisible = true;
      this.pageSelected = backIndex;
    }
  }
  moveCarousel(e) {
    this.finalPixeles = e.touches[0].clientX;
  }
  handlerTouchStart(e) {
    this.inicioPixeles = e.touches[0].clientX;
  }
  handlerTouchEnd(e) {
    if (this.inicioPixeles > this.finalPixeles) {
      console.log(`atras`);
      this.finalPixeles = '';
      this.inicioPixeles = '';
      this.handlerNext();
    } else if (this.inicioPixeles < this.finalPixeles) {
      console.log(`delante`);
      this.finalPixeles = '';
      this.inicioPixeles = '';
      this.handlerBack();
    }
  }
  changePage(event) {
    const index = parseInt(event.detail, 10);
    const elementVisible = this.proyectos.filter(proyecto => proyecto.isVisible == true);
    elementVisible[0].isVisible = false;
    this.changeVisibilityPagination(index);
    this.proyectos[event.detail - 1].isVisible = true;
  }
  changeVisibilityPagination(index) {
    console.log('index -----------> ' + index);
    console.log('this.proyectos.length - 1 -----------> ' + this.proyectos.length - 1);
    if (index > this.proyectos.length - 1) {
      this.showNext = false;
      this.showBack = true;
    } else if (index - 1 == 0) {
      this.showBack = false;
      this.showNext = true;
    } else {
      this.showBack = true;
      this.showNext = true;
    }
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(experiencia, {
  track: {
    proyectos: 1,
    showNext: 1,
    showBack: 1,
    renderoptionlist: 1,
    isMobile: 1,
    inicioPixeles: 1,
    finalPixeles: 1,
    pageSelected: 1
  }
});
export default _registerComponent(experiencia, {
  tmpl: _tmpl
});