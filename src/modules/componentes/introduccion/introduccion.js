import { track, LightningElement} from "lwc";

export default class introduccion extends LightningElement{
    handleClick(event){
        const buttonclick = new CustomEvent('buttonclick');
        this.dispatchEvent(buttonclick, {bubbles:true, composed: true, detail: 'click'});
    }
}