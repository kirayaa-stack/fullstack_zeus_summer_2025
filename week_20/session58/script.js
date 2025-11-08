var outputDiv = document.querySelector("#output");
var myButton = document.querySelector("#my-button");
if (myButton && outputDiv) {
    myButton.addEventListener('click', function (Event) {
        console.log('Button clicked', event);
        outputDiv.textContent = 'Button clicked';
    });
}
else {
    console.log('Error during button click.');
}
//Example 02
var myInput = document.querySelector('#my-input');
if (myInput && outputDiv) {
    myInput.addEventListener('input', function (Event) {
        var target = Event.target;
        outputDiv.textContent = "You wrote : ".concat(target.value);
    });
}
//Example 03
var myForm = document.querySelector("#my-form");
if (myForm && myInput && outputDiv) {
    myForm.addEventListener('submit', function (Event) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        console.log('Form sent');
        outputDiv.textContent = "Form sent: ".concat(myInput.value);
        myInput.value = '';
    });
}
