// INTERACTING WITH DOM

// LOGGER INPUT FORM

const form = document.querySelector(".new-item-form") as HTMLFormElement;

console.log(form.children);

// GETTING THE LABEL INPUTS

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// ADD EVENTLISTENER TO GET THE INPUTS OF THE FORM

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})

// CLASSES FOR THE DATA TO BE RECIEVED

class invoice {
    clientName : string;
    details: string;
    amount: number;

    constructor(c:string, d:string, a:number){
        this.clientName = c;
        this.details = d;
        this.amount = a;
    }
}