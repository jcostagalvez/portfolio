import { LightningElement, track} from "lwc";
import gsap from "gsap";
export default class experiencia extends LightningElement{
    @track proyectos = [];
    @track showNext = true;
    @track showBack = false;
    @track renderoptionlist = [];
    
    connectedCallback(){    
        console.log('¿A que esta blando el pan?');
    
        fetch('/api/experiencia/Jesús Costa Gálvez')
        .then(response  => response.json())
        .then(response  => {
            console.log(response)
            this.proyectos = response;
            this.proyectos.forEach((item, index) => {
                console.log(index);
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
            if(element.isVisible === true){
                element.isVisible = false;  
                    if(index - 1 == 0){
                        backIndex = 0;
                        this.showBack = false;
                        this.showNext = true;
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
}