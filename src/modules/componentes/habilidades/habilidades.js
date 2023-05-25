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
    @track pages = 0;

    connectedCallback(){
        this.isMobile = window.matchMedia("(max-width: 480px)").matches;
        this.elementPerpage = this.isMobile == true? 2 : 6;
        fetch('/api/habilidad/Jesús Costa Gálvez')
        .then(response => response.json())
        .then(response => {
            this.habilidades = response;
            this.pages = response.length / this.elementPerpage;
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
        const pageSelected = this.actualPage + 1;
        this.pagination(pageSelected);
        this.actualPage = pageSelected;

    }

    handlerBack(){
        const pageSelected = this.actualPage - 1;
        this.pagination(pageSelected);
        this.actualPage = pageSelected;
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

    changePage(event){
        const index = parseInt(event.detail, 10);
        //const elementVisible = this.proyectos.filter(proyecto => proyecto.isVisible == true);
        //elementVisible[0].isVisible = false;
        this.pagination(index);
        //this.proyectos[event.detail - 1].isVisible = true;
    }

    pagination(pageSelected){
        console.log('pageSelected -----------> ' + pageSelected);
        console.log('this.habilidades.length - 1 -----------> ' + this.habilidades.length);

        if((pageSelected - 1) <= 0){
            this.showNext = false;
            this.showBack = true;
            this.habilidadesShow = this.habilidades.slice(0, pageSelected * this.elementPerpage);
        }else if(pageSelected * this.elementPerpage >= this.habilidades.length){
            this.habilidadesShow = this.habilidades.slice((pageSelected - 1) * this.elementPerpage, pageSelected * this.elementPerpage);
            this.showBack = false;
            this.showNext = true;
        }else{
            this.showBack = true;
            this.showNext = true;
            if(pageSelected > this.actualPage){
                this.habilidadesShow = this.habilidades.slice((pageSelected - 1) * this.elementPerpage, pageSelected * this.elementPerpage);
            }else if(pageSelected < this.actualPage){
                this.habilidadesShow = this.habilidades.slice((pageSelected * this.elementPerpage) - this.elementPerpage, pageSelected * this.elementPerpage);
            }

        }
    }

}