import { LightningElement, track} from "lwc";

export default class formacion extends LightningElement{
        @track lstCurricular = [];
        @track lstNoCurricular = [];
        @track curricular = true;
    connectedCallback(){
        fetch('/api/Formacion/Jesús Costa Gálvez')
        .then(response => response.json())
        .then(response => {
            response.forEach(formacion => {
                let date = new Date(formacion.final_fecha);
                formacion.final_fecha = date.getUTCFullYear();
                if( formacion.tipo == 'Formación Curricular'){
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

    handleClickSi(){
        this.curricular = true;
    }

    handleClickNo(){
        this.curricular = false;
    }
}