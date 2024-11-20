import { LightningElement } from 'lwc';
import rohan from './child2.html'
export default class Lifechild extends LightningElement {
    constructor(){
        super()
        console.log('child constructor')
    }
    connectedCallback(){
        console.log('child connectedCallback')
    }
    render(){
return rohan;
    }
}