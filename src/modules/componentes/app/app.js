import {api, LightningElement, track} from "lwc";

export default class app extends LightningElement{
    @track introduction = true;
    @track portfolio = false;
    handleClick(event){
        this.introduction = false;
        console.log(this.introduction);
    }
}