import { LightningElement ,api,track} from 'lwc';
import getAllCases from '@salesforce/apex/CaseController.getAllCases';

export default class ApexImperativeMethod extends LightningElement {
    
 subject;
     records;
 error;

    handleChange(event){
        const sVal = event.target.value;
        this.subject = sVal;
        console.log(this.subject);
    }

    handleLoad(){
        getAllCases({
            subject : this.subject
        })
        .then(result => {
            console.log(' Case Records Information => ', result);
            this.records = result;
        })
        .catch(error =>{
            console.log(' Error Information =>', error);
            this.error = error;
        })
    }
}