import { track, LightningElement, api } from "lwc";

export default class boton extends LightningElement{
    @api type;

    handleClick(){
        console.log('se clicka el boton')
        const buttonclick = new CustomEvent('buttonclick');
        this.dispatchEvent(buttonclick, {bubbles:true, composed: true, detail: 'click'});
    }
    
}