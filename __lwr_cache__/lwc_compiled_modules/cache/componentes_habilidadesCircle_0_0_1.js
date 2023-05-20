import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./habilidadesCircle.html";
import * as d3 from 'd3';
class habilidades_circle extends LightningElement {
  constructor(...args) {
    super(...args);
    this.habilidad = void 0;
    this.fillPercentage = void 0;
    this.habilidades = [{
      name: 'CSS',
      años: 5
    }, {
      name: 'JS',
      años: 4
    }, {
      name: 'NodeJs',
      años: 1
    }, {
      name: 'JAVA',
      años: 1
    }, {
      name: 'APEX',
      años: 5
    }, {
      name: 'LWC',
      años: 4
    }];
  }
  connectedCallback() {
    //const r = this.template.querySelector('.circle-background');
    //console.log(r.getBoundingClientRect().width);
    this.fillPercentage = Math.PI * (90 * 2) * 0.1;
    this.dasHarray = Math.PI * (90 * 2);
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
    habilidades: 1
  }
});
export default _registerComponent(habilidades_circle, {
  tmpl: _tmpl
});