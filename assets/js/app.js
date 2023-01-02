//Selecting elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movies-searchable');


function movieSection(movies) {
    return movies.map((movie) => {
        if (movie.poster_path) {
            return `<img 
            src=${IMAGE_URL + movie.poster_path} 
            data-movie-id=${movie.id}
            />`;
        }
    })
}

function createMovieContainer(movies) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const movieTemplate = `
    <section class="section">
        ${movieSection(movies)}
        </section>
        <div class="content content-display">
            <p id="content-close">X</p>
        </div>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement;

}

function renderSearchMovies(data) {
    //data.results []
    movieSearchable.innerHTML = '';
    const movies = data.results;
    const movieBlock = createMovieContainer(movies);
    movieSearchable.appendChild(movieBlock);
    console.log('Data: ', data);
}

function handleError() {
    console.log('Error', error)
}

buttonElement.onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;
    searchMovie(value); //every time you search, you call the value 

    //Resets search value, clears old text
    inputElement.value = '';

    console.log('Value: ', value);

}

function createIframe(video) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.key}`;
    iframe.width = 360;
    iframe.height = 315;
    iframe.allowFullScreen = true;

    return iframe;

}

function createVideoTemplate(data, content) {
    //TO DO
    //Display movie videos
    content.innerHTML = '<p id="content-close">X</p>';
    console.log('Videos:', data);
    const videos = data.results; //when you get video from result 
    const length = videos.length > 4 ? 4 : videos.length; //you display no more than 4
    const iframeContainer = document.createElement('div'); //built iframe


    for (let i = 0; i < length; i++) {
        const video = videos[i]; //represeting every video
        const iframe = createIframe(video);
        iframeContainer.appendChild(iframe);
        content.appendChild(iframeContainer);

    }
}

//Event Delegation
document.onclick = function (event) {

    const target = event.target;

    //When you click on any image, you are getting the movie id*
    if (target.tagName.toLowerCase() === 'img') {
        const movieId = target.dataset.movieId; //movie id*
        console.log('Movie ID:', movieId);
        const section = event.target.parentElement; //section in html
        const content = section.nextElementSibling; //targetting content since it is under section in html
        content.classList.add('content-display');

        //Fetch movie videos
        const path = `/movie/${movieId}/videos`; //generating the path where you want the url to go
        const url = generateUrl(path); //end up having the url of where we want to make the request 

        fetch(url)
            .then((res) => res.json())  //then we call the API which we get the movie back 
            .then((data) => createVideoTemplate(data, content))
            .catch((error) => {
                console.log('Error: ', error);
            });

    }

    if (target.id === 'content-close') {
        const content = target.parentElement;
        content.classList.remove('content-display');
    }
}
