import { LightningElement, api, track } from "lwc";

export default class paginacion extends LightningElement{
    pagesselected;
    @track pages = [];
    @track change = false;
    @api size;
    @api
    get page(){
       return this.pagesselected;
    }
    set page(value){
        if(this.pages.length != 0){
            this.pagesselected = value;
            console.log(this.pagesselected);
            this.setUnSelected();
            this.setSelected(value);
        }
    }

    connectedCallback(){
        console.log('Esto se esta llamando ---> ' + this.size);
        this.pages = this.setpages(this.size);
        this.setSelected(1);
        this.change = true;    
    }

    clikHandler(event){
        const pagina = event.currentTarget.dataset.id;
        this.setUnSelected();
        this.dispatchEvent(new CustomEvent('select', {detail: pagina}));
        this.setSelected(pagina);
    }

    setpages(){
        let list = [];
        for(let i = 0; i < this.size; i++){

            let object = {
                page: i + 1,
                id: i + 1,
                class: 'unselected'
            }

            list.push(object);
        }

        return list;
    }

    setSelected(pagina){
        const lstObjectSelected = this.pages.filter(page => page.id == pagina);
        console.log( this.pages);
        lstObjectSelected[0].class = 'selected';
    }

    setUnSelected(){
        const lstObjectSelected = this.pages.filter(page => page.class == 'selected');
        lstObjectSelected[0].class = 'unselected'
    }

    changePage(event){
        console.log('Estamos reciviendo esto -----> ' + event.detail);
    }
}