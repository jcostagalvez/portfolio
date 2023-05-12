import { LightningElement, api} from 'lwc';

export default class habilidadesPopUp extends LightningElement {
    @api habilidad;
    handleClose(){
        console.log('se ha clickado');
        this.dispatchEvent(new CustomEvent('close'));
    }


}