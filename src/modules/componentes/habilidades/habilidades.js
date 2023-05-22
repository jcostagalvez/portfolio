import {LightningElement, track } from "lwc";

export default class habilidades extends LightningElement{
    @track popUp = false;
    @track habilidades = [ {
        nombre: 'CSS' ,
        experiencia:89,
    },
    {
        nombre: 'JS' ,
        experiencia:89,
    },
    {
        nombre: 'NodeJs' ,
        experiencia:89,
    },
    {
        nombre: 'JAVA' ,
        experiencia:89,
    },
    {
        nombre: 'APEX' ,
        experiencia:89,
    },
    {
        nombre: 'LWC' ,
        experiencia:89,
    }]


}