import {LightningElement, track} from "lwc";

export default class experiencia extends LightningElement{

    handleClick(event){
        const mainContainer = this.template.querySelector('.introduccion');
        console.log(mainContainer)
    }
}