import { LightningElement ,api} from 'lwc';

export default class CalculatorCmp extends LightningElement {
    @api number1
    @api number2
    result
constructor(){
    super()
}
connectedCallback(){
    
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
    doSum(){
            this.result = parseInt(this.number1) + parseInt(this.number2)
    }
    doSub(){
        this.result = parseInt(this.number1) - parseInt(this.number2)
}

doMulti(){
    this.result = parseInt(this.number1) * parseInt(this.number2)
}
}