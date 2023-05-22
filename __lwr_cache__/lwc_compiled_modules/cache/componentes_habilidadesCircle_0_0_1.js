import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./habilidadesCircle.html";
import * as d3 from 'd3';
class habilidades_circle extends LightningElement {
  constructor(...args) {
    super(...args);
    this.habilidad = void 0;
    this.fillPercentage = void 0;
    this.radius = void 0;
    this.heigth = void 0;
  }
  connectedCallback() {
    const width = window.innerWidth * 50 / 100;
    const diameter = width * 10 / 100;
    this.radius = diameter / 2;
    const fill = (100 - this.habilidad.experiencia) / 100;
    this.fillPercentage = Math.PI * diameter * fill;
    this.dasHarray = Math.PI * diameter;
  }
  handleClick() {
    const circle = document.getElementById('circle');
    console.log('circle is --> ' + circle);
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(habilidades_circle, {
  publicProps: {
    habilidad: {
      config: 0
    }
  },
  track: {
    fillPercentage: 1,
    radius: 1,
    heigth: 1
  }
});
export default _registerComponent(habilidades_circle, {
  tmpl: _tmpl
});