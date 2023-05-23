import { LightningElement, api, track} from 'lwc';
import * as d3 from 'd3';

export default class habilidades_circle extends LightningElement {
    @api habilidad;
    @track fillPercentage;
    @track radius;
    @track heigth;

    connectedCallback(){
      const width = (window.innerWidth * 50)/100;
      const diameter = (width * 10 )/ 100;
      this.radius = diameter/2;
      const fill = (100 - this.habilidad.percentage) / 100; 
      this.fillPercentage = (Math.PI * diameter) * fill;
      this.dasHarray =  Math.PI*diameter;  
    }

    handleClick(){
        
        const circle = document.getElementById('circle');
        console.log('circle is --> ' + circle);
    }

}