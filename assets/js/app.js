

//Initial Values
const API_KEY = "89b3b7c5708d28b6ced951a4f58004eb"

const url = https://api.themoviedb.org/3/search/movie?api_key=89b3b7c5708d28b6ced951a4f58004eb&query=furious

//Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');






buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;
    console.log('Value: ', value);

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log('Data', data);
        })
        .catch(() => {
            console.log('Error', error);
        });

}