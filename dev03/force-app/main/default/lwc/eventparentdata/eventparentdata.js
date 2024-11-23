import { LightningElement ,api } from 'lwc';

export default class Eventparentdata extends LightningElement {
    @api message;
    handlechild(event) {
console.log('calling parent from child')
        this.message = event.detail;
        console.log(this.message);
    }
    handlechilddata(){
this.message=this.template.querySelector('c-event-child-data').getName();

    }

}