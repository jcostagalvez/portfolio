import {api, LightningElement, track} from "lwc";
import {navigationItems, navigationElements} from "./navigation";

export default class app extends LightningElement{
    navigationElements = navigationElements;
    isLoad = false;
    @track navigationItems = navigationItems;
    pastTab = '';
    actualTab = '';
    @track introduction = true;
    @track portfolio = false;
    setStatusLoad(){
        this.isLoad = true;
    }
    connectedCallback(){
        fetch('/api/login')
        .then((res) => {
            this.isLoad = true;
            console.log('conectado');
        })
    }
    handleClick(event){
        this.introduction = false;
        this.portfolio = true;
        this.actualTab= "Experiencia";
        this.navigationItems["Experiencia"].visible = true;
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