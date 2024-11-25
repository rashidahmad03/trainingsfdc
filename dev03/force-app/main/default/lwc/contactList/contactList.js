import { LightningElement,wire } from 'lwc';
// import FirstName from '@salesforce/schema/Contact.FirstName';
// import LastName from '@salesforce/schema/Contact.LastName';
// import Email from '@salesforce/schema/Contact.Email';
import { reduceErrors } from 'c/ldsUtils';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'First Name', fieldName: 'FirstName', type: 'text' },
    { label: 'Last Name', fieldName: 'LastName', type: 'text' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;

    @wire(getContacts)
    contact;


    get getcontact(){
        return JSON.stringify(this.contact);
    }
    
}