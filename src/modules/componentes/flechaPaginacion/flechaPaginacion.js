import {LightningElement } from "lwc";

export default class flechaPaginacion extends LightningElement{
    
    handleclick(){
        const nextPage = new CustomEvent ('click');
        this.dispatchEvent(selectedEvent);
    }
}