import {api, LightningElement, track} from "lwc";
import {navigationItems, navigationElements} from "./navigation";

export default class app extends LightningElement{
    navigationElements = navigationElements;
    @track navigationItems = navigationItems;
     pastTab = '';
    actualTab = '';
    @track introduction = false;
    @track portfolio = true;

    handleClick(event){
        this.introduction = false;
        console.log(this.introduction);
    }

    handleNavSelected(event){
        const tab = event.detail;
        if(this.actualTab == ''){
            this.actualTab = tab;
            this.navigationItems[this.actualTab].visible = true;
        }else{
            this.pastTab = this.actualTab;
            this.actualTab = tab;
            this.navigationItems[this.pastTab].visible = false;
            this.navigationItems[this.actualTab].visible = true;

        }

        
    }
}