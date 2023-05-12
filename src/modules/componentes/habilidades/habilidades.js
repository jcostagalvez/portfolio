import {LightningElement, track } from "lwc";
export default class habilidades extends LightningElement{
    @track popUp = false;
    @track habilidades = {
        img: 'lo que sea',
        title: 'BBDD relacionales y no relacionales', 
        body: 'Experiencia en Bases de Datos relacionales y no relacionales.'
    }
    handleModal(){
        this.popUp = true;
    }

    handleCloseModalWindow(){
        this.popUp = false;
    }
}