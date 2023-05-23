import {LightningElement, track } from "lwc";

export default class habilidades extends LightningElement{
    @track popUp = false;
    @track habilidades = [];

    connectedCallback(){
        fetch('/api/habilidad/Jesús Costa Gálvez')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.habilidades = response;
        })
        .catch(err => console.log(err));
    }

}