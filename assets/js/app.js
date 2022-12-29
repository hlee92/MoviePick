

//Initial Values
const API_KEY = "89b3b7c5708d28b6ced951a4f58004eb"

//Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');






buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;
    console.log('Value: ', value);
}