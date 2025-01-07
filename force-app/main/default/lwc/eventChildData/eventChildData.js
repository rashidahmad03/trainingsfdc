import { LightningElement ,api } from 'lwc';

export default class EventChildData extends LightningElement {
    name;
    handleNameChange(event) {
        this.name = event.target.value;
    }
    handleSubmit(event) {
        console.log(' calling submit from child');
        var mycustom = new CustomEvent('abcd', {
            detail: this.name
        })

        this.dispatchEvent(mycustom);

    }
    @api
    getName() {
console.log('calling getName from child');
        return this.name;
    }
}