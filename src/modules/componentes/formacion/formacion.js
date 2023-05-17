import { LightningElement, track} from "lwc";

export default class formacion extends LightningElement{
        @track lstCurricular = [];
        @track lstNoCurricular = [];

    connectedCallback(){
        fetch('/api/Formacion/Jesús Costa Gálvez')
        .then(response => response.json())
        .then(response => {
            response.forEach(formacion => {
                console.log(typeof (formacion.final_fecha));
                //console.log(formacion.final_fecha.getUTCFullYear());
                if( formacion.tipo = 'Formación Curricular'){
                    this.lstCurricular.push(formacion);
                }else{
                    this.lstNoCurricular.push(formacion);
                }
            });

            console.log(this.lstCurricular);
            console.log(this.lstNoCurricular);
        })
        .catch(err => console.log(err));
    }
}