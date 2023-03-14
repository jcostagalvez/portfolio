import { LightningElement, api, track } from "lwc";

export default class carousel extends LightningElement{
    @api tarjetasInfo;
    renderedCallback(){
        console.log(`Que nos esta llegando ${this.tarjetasInfo[0]}`)
    }
}