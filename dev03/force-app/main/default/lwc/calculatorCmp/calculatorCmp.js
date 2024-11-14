import { LightningElement } from 'lwc';

export default class CalculatorCmp extends LightningElement {
    number1
    number2
    result

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