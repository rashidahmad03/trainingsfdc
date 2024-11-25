import { LightningElement ,api} from 'lwc';

export default class LdsContact extends LightningElement {
    @api recordId;
    @api objectApiName;
    constructor(){
        super();
        console.log('##############'+this.recordId);
        console.log(this.objectApiName);
    }
    connectedCallback(){
        console.log('##############'+this.recordId);
        console.log(this.objectApiName);
    }

    handlerecordId(){
        this.recordId=this.recordId
        console.log('##############'+this.recordId);
        console.log(this.objectApiName);   
    }
}