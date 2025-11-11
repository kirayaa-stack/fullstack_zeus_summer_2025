const outputDiv = document.querySelector<HTMLDivElement>("#output");

const myButton = document.querySelector<HTMLButtonElement>("#my-button")

if (myButton && outputDiv) {
    myButton.addEventListener('click', (Event: MouseEvent) => {
        console.log('Button clicked', Event);
        outputDiv.textContent = 'Button clicked';
    });
} else {
    console.log('Error during button click.');
}


//Example 02
const myInput = document.querySelector<HTMLInputElement>('#my-input');

if (myInput && outputDiv) {
    myInput.addEventListener('input', (Event: Event) => {
        const target = Event.target as HTMLInputElement;

        outputDiv.textContent = `You wrote : ${target.value}`;
    });
}

//Example 03
const myForm = document.querySelector<HTMLFormElement>("#my-form");
if(myForm && myInput && outputDiv){
    myForm.addEventListener('submit', (Event: SubmitEvent) =>{
        event?.preventDefault();
        console.log('Form sent');

        outputDiv.textContent = `Form sent: ${myInput.value}`;
        myInput.value = '';

    });
}