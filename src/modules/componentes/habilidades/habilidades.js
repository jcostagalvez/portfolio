import {LightningElement, track } from "lwc";
export default class habilidades extends LightningElement{
    @track popUp = false;
    @track habilidades = {
        name: 'CSS' ,
        Puntuaje: 75
    }
}