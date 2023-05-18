import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./formacion.html";
class formacion extends LightningElement {
  constructor(...args) {
    super(...args);
    this.lstCurricular = [];
    this.lstNoCurricular = [];
    this.curricular = true;
  }
  connectedCallback() {
    fetch('/api/Formacion/Jesús Costa Gálvez').then(response => response.json()).then(response => {
      response.forEach(formacion => {
        let date = new Date(formacion.final_fecha);
        formacion.final_fecha = date.getUTCFullYear();
        if (formacion.tipo = 'Formación Curricular') {
          this.lstCurricular.push(formacion);
        } else {
          this.lstNoCurricular.push(formacion);
        }
      });
      console.log(this.lstCurricular);
      console.log(this.lstNoCurricular);
    }).catch(err => console.log(err));
  }
  handleClickSi() {
    this.curricular = true;
  }
  handleClickNo() {
    this.curricular = false;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(formacion, {
  track: {
    lstCurricular: 1,
    lstNoCurricular: 1,
    curricular: 1
  }
});
export default _registerComponent(formacion, {
  tmpl: _tmpl
});