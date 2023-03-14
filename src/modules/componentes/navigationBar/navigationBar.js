import {api, LightningElement, track} from "lwc";
export default class navBar extends LightningElement{
    @api tabs;
    renderedCallback(){
        console.log('tabs -->> ' + this.tabs);
    }
    handleClick(event){
        const elementSelected = this.template.querySelector(`#${event.target.id}`)
        const navSelected = new CustomEvent('navselected', {detail: elementSelected.innerHTML});
        this.dispatchEvent(navSelected);
    }
}