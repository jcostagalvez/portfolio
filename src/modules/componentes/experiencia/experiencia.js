import { LightningElement, track} from "lwc";
export default class experiencia extends LightningElement{
    @track proyectos = [];
    @track showNext = true;
    @track showBack = false;
    @track renderoptionlist = [];
    @track isMobile = '';
    @track inicioPixeles = '';
    @track finalPixeles = '';

    connectedCallback(){    
        this.isMobile = window.matchMedia("(max-width: 480px)").matches;
        console.log(this.isMobile);
        fetch('/api/experiencia/Jesús Costa Gálvez')
        .then(response  => response.json())
        .then(response  => {
            console.log(response)
            this.proyectos = response;
            this.proyectos.forEach((item, index) => {
                let fecha_Inicio = new Date(item.inicio_fecha);
                let fecha_final = new Date(item.final_fecha);
                item.inicio_fecha = `${fecha_Inicio.getMonth() < 10 ? '0'+ fecha_Inicio.getMonth() : fecha_Inicio.getMonth()} / ${fecha_Inicio.getFullYear()}`;
                item.final_fecha = `${fecha_final.getMonth() < 10 ? '0'+ fecha_final.getMonth() : fecha_final.getMonth()} / ${fecha_final.getFullYear()}`;
                if (index === 0){
                    item.isVisible = true;
                }else {
                    item.isVisible = false;
                }
            })
        })
        .catch((error) =>  console.log(error));
        
        /*  console.log('success');
            console.log(this.proyectos);
            
            
        */
    }

    handlerNext(){
        let nextIndex;
        this.proyectos.forEach((element, index) => {
            if(element.isVisible === true){
                element.isVisible = false;
                
                if(index + 1 >= this.proyectos.length - 1){
                    nextIndex = this.proyectos.length - 1;
                    this.showNext = false;
                    this.showBack = true;
                }else{
                    this.showBack = true;
                    nextIndex = index + 1;
                    console.log('index  ' + index);
                    console.log('nextIndex  ' + nextIndex);
                }

                return;
            }
        });
        
        this.proyectos[nextIndex].isVisible = true;
        console.log('arrayNextIndex    ' + this.proyectos[0].isVisible);

    }

    handlerBack(){
        let backIndex = 0;
        this.proyectos.forEach((element, index) => {
            console.log(`index ----->>> ${index}`);
            if(element.isVisible === true){
                console.log(`index del true ----->>> ${index}`);
                element.isVisible = false;  
                    if(index - 1 == 0){
                        backIndex = 0;
                        this.showBack = false;
                        this.showNext = true;
                    }else if(index - 1 < 0){
                        backIndex = index;
                    }else{
                        this.showNext = true;
                        backIndex = index - 1;
                    }
                return;
            }
        });
        console.log('this.backIndex  ' + backIndex);
        this.proyectos[backIndex].isVisible = true;
    }

    moveCarousel(e){
        this.finalPixeles = e.touches[0].clientX;
    }

    handlerTouchStart(e){
        this.inicioPixeles = e.touches[0].clientX;
    }

    handlerTouchEnd(e){

        if(this.inicioPixeles > this.finalPixeles){
            console.log(`atras`)
            this.finalPixeles = '';
            this.inicioPixeles = '';
            this.handlerNext();
        }else if(this.inicioPixeles < this.finalPixeles){
            console.log(`delante`)
            this.finalPixeles = '';
            this.inicioPixeles = '';
            this.handlerBack();
        }
    }
}