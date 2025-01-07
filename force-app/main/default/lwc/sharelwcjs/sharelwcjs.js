import { LightningElement } from 'lwc';
import  {sum} from './utilityshare.js';
export default class Sharelwcjs extends LightningElement {
 
    number1
    number2
    result
    constructor(){
        super();
    }
    doSum(){
        console.log('calling doSum from sharelwcjs');
 
        this.result=sum(this.number1,this.number2);
    }

    handleChangeEvent(event) {
        const val = event.target.value;
        const name = event.target.name;
        if (name == "number1") {
            this.number1 = val
        }
        else if (name == "number2") {
            this.number2 = val

        }
    }

}