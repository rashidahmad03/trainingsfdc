import { LightningElement,wire ,api} from 'lwc';
// import FirstName from '@salesforce/schema/Contact.FirstName';
// import LastName from '@salesforce/schema/Contact.LastName';
// import Email from '@salesforce/schema/Contact.Email';
import { reduceErrors } from 'c/ldsUtils';
import {refreshApex} from '@salesforce/apex';
import getContacts from '@salesforce/apex/MyContactListController.getContacts';
const COLUMNS = [
    { label: 'First Name', fieldName: 'FirstName', type: 'text' },
    { label: 'Last Name', fieldName: 'LastName', type: 'text' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    contact=[];
    @api recordId;
    @wire(getContacts ,{'recordId':'$recordId'})
    wiredContacts({data, error}){
    
    if(data){
        this.contact=data;
   // refreshApex(this.contact);
    }
    else{

        if(error){
            console.log(error);
            console.log(JSON.stringify(reduceErrors(error)));
        }
    }
    }


    get getcontact(){
        return JSON.stringify(this.contact);
    }
    
}