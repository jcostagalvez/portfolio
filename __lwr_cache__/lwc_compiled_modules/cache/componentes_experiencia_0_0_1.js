import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./experiencia.html";
import gsap from "gsap";
class experiencia extends LightningElement {
  constructor(...args) {
    super(...args);
    this.proyectos = [{
      "empresa": "Nubecento",
      "img": "../../../assets/utils/nubecento.jpg",
      "titulo": "Desarollador full Stack",
      "año_inicio": "2020",
      "año_final": "2021",
      "id": 12,
      "habilidades": [{
        "Name": 'Apex',
        "id": 1
      }, {
        "Name": 'SOQL',
        "id": 2
      }, {
        "Name": 'LWC',
        "id": 3
      }, {
        "Name": 'SOAP',
        "id": 4
      }, {
        "Name": 'REST API',
        "id": 5
      }]
    }, {
      "empresa": "Autonomo",
      "img": "../../../assets/utils/nubecento.jpg",
      "año_inicio": "2021",
      "año_final": "2022",
      "id": 13,
      "habilidades": [{
        "Name": 'R',
        "id": 1
      }, {
        "Name": 'SPSS',
        "id": 2
      }, {
        "Name": 'Analisis de datos',
        "id": 3
      }]
    }, {
      "empresa": "GFI",
      "img": "../../../assets/utils/nubecento.jpg",
      "año_inicio": "2023",
      "año_final": "2024",
      "titulo": "consultor Salesforce",
      "id": 14,
      "habilidades": [{
        "Name": 'Apex',
        "id": 1
      }, {
        "Name": 'SOQL',
        "id": 2
      }, {
        "Name": 'LWC',
        "id": 3
      }, {
        "Name": 'SOAP',
        "id": 4
      }, {
        "Name": 'REST API',
        "id": 5
      }]
    }];
    this.showNext = true;
    this.showBack = false;
    this.renderoptionlist = [];
  }
  connectedCallback() {
    this.proyectos.forEach((item, index) => {
      console.log(index);
      if (index === 0) {
        item.isVisible = true;
      } else {
        item.isVisible = false;
      }
    });
  }
  handlerNext() {
    let nextIndex;
    this.proyectos.forEach((element, index) => {
      if (element.isVisible === true) {
        element.isVisible = false;
        if (index + 1 >= this.proyectos.length - 1) {
          nextIndex = this.proyectos.length - 1;
          this.showNext = false;
          this.showBack = true;
        } else {
          this.showBack = true;
          nextIndex = index + 1;
          console.log('index  ' + index);
          console.log('nextIndex  ' + nextIndex);
        }
        return;
      }
    });
    this.proyectos[nextIndex].isVisible = true;
    console.log('arrayNextIndex    ' + this.proyectos[0].isVisible);
  }
  handlerBack() {
    let backIndex = 0;
    this.proyectos.forEach((element, index) => {
      if (element.isVisible === true) {
        element.isVisible = false;
        if (index - 1 == 0) {
          backIndex = 0;
          this.showBack = false;
          this.showNext = true;
        } else {
          this.showNext = true;
          backIndex = index - 1;
        }
        return;
      }
    });
    console.log('this.backIndex  ' + backIndex);
    this.proyectos[backIndex].isVisible = true;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(experiencia, {
  track: {
    proyectos: 1,
    showNext: 1,
    showBack: 1,
    renderoptionlist: 1
  }
});
export default _registerComponent(experiencia, {
  tmpl: _tmpl
});