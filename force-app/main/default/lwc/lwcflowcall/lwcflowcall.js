import { LightningElement,api    } from 'lwc';

export default class Lwcflowcall extends LightningElement {
    @api name
    connectedCallback() {
        this.name = this.name+'  s';
    }
    
}