import { LightningElement, api, track} from 'lwc';
import * as d3 from 'd3';

export default class habilidades_circle extends LightningElement {
    @api habilidad;
    @track fillPercentage;
    @track habilidades = [ {
        name: 'CSS' ,
        años: 5,
    },
    {
        name: 'JS' ,
        años: 4,
    },
    {
        name: 'NodeJs' ,
        años: 1,
    },
    {
        name: 'JAVA' ,
        años: 1,
    },
    {
        name: 'APEX' ,
        años: 5,
    },
    {
        name: 'LWC' ,
        años: 4,
    }]

    connectedCallback(){
      //const r = this.template.querySelector('.circle-background');
      //console.log(r.getBoundingClientRect().width);
      this.fillPercentage = (Math.PI * (90*2)) * 0.1;
      this.dasHarray =  Math.PI*(90*2);  
    }

}