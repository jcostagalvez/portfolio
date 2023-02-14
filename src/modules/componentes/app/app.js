import {api, LightningElement, track} from "lwc";

export default class app extends LightningElement{
    @track introduction = true;
    @track portfolio = true;
    handleClick(event){
        this.introduction = false;
        console.log(this.introduction);
    }
}