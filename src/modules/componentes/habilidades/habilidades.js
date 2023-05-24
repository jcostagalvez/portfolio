import {LightningElement, track } from "lwc";

export default class habilidades extends LightningElement{

    @track popUp = false;
    @track habilidades = [];
    @track habilidadesShow = [];
    @track showBack = false;
    @track showNext = false;
    @track elementPerpage = 0;
    @track actualPage = 1;
    @track finalPixeles = 0;
    @track inicioPixeles= 0;


    connectedCallback(){
        this.isMobile = window.matchMedia("(max-width: 480px)").matches;
        this.elementPerpage = this.isMobile == true? 2 : 6;
        fetch('/api/habilidad/Jesús Costa Gálvez')
        .then(response => response.json())
        .then(response => {
            this.habilidades = response;
            if(this.isMobile){
                if (this.habilidades.length > 2) this.showNext = true;
                this.habilidadesShow = this.habilidades.slice(0, this.elementPerpage);
            }else if(!this.isMobile){
                console.log(this.habilidades.length);
                if (this.habilidades.length > 5) this.showNext = true;
                this.habilidadesShow = this.habilidades.slice(0,  this.elementPerpage);
            }
        })
        .catch(err => console.log(err));
    }

    handlerNext(){
        this.actualPage += 1;
        console.log('actual page --->  ' + this.actualPage);
        console.log('this.actualPage * this.elementPerpage >= this.habilidades.length --->  ' + this.actualPage * this.elementPerpage >= this.habilidades.length);

        if(this.actualPage * this.elementPerpage >= this.habilidades.length){      
                this.habilidadesShow = this.habilidades.slice((this.actualPage - 1) * this.elementPerpage, this.actualPage * this.elementPerpage);
                this.showNext = false;
                this.showBack = true;
        }else{
            this.habilidadesShow = this.habilidades.slice((this.actualPage - 1) * this.elementPerpage, this.actualPage * this.elementPerpage);
            this.showBack = true;
        }
    }

    handlerBack(){
        this.actualPage -= 1;
        console.log('actual page --->  ' + this.actualPage);
        if((this.actualPage - 1) <= 0){
            this.showNext = true;
            this.showBack = false;
                this.habilidadesShow = this.habilidades.slice(0, this.actualPage * this.elementPerpage);
        }else{
            this.showBack = true;
            this.habilidadesShow = this.habilidades.slice((this.actualPage * this.elementPerpage) - this.elementPerpage, this.actualPage * this.elementPerpage);
        }
    }

    moveCarousel(e){
        this.finalPixeles = e.touches[0].clientX;
    }

    handlerTouchStart(e){
        this.inicioPixeles = e.touches[0].clientX;
    }

    handlerTouchEnd(e){

        if(this.inicioPixeles > this.finalPixeles){
            this.finalPixeles = '';
            this.inicioPixeles = '';
            if( !(this.actualPage * this.elementPerpage >= this.habilidades.length)){
                this.handlerNext();
            }
        }else if(this.inicioPixeles < this.finalPixeles){
            this.finalPixeles = '';
            this.inicioPixeles = '';
            if(!(this.actualPage <= 1)){
                this.handlerBack();
            }
        }
    }

}