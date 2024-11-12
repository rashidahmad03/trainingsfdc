import { LightningElement } from 'lwc';

export default class Htmlevents extends LightningElement {
    message='super';
    finaldata='';
    handleinput(event){
        this.message=event.target.value;
    }
    handleclick(){
        this.finaldata=this.message;
    }

    isTom = false;

handleJerry(){
this.isTom=false;

}
handleTom(){
    this.isTom = true;

}
}