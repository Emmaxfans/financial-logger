"use strict";
// INTERACTING WITH DOM
// LOGGER INPUT FORM
const form = document.querySelector(".new-item-form");
console.log(form.children);
// GETTING THE LABEL INPUTS
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// ADD EVENTLISTENER TO GET THE INPUTS OF THE FORM
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// CLASSES FOR THE DATA TO BE RECIEVED
class invoice {
    constructor(c, d, a) {
        this.clientName = c;
        this.details = d;
        this.amount = a;
    }
}
