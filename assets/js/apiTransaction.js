//Initial Values
const API_KEY = '89b3b7c5708d28b6ced951a4f58004eb';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=89b3b7c5708d28b6ced951a4f58004eb';

//makes generating the url based on the path, making it much more dynamic 
function generateUrl(path) {
    const url = `https://api.themoviedb.org/3${path}?api_key=89b3b7c5708d28b6ced951a4f58004eb`;
    return url;
}

function requestMovies(url, onComplete, onError) { //function is used to request new movies
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError)

}

//function that is responsible for searchnig movies
function searchMovie(value) { //function with value that searches for any movie 
    const path = '/search/movie';
    const url = generateUrl(path) + '&query=' + value;;

    requestMovies(url, renderSearchMovies, handleError);

}

function getUpcomingMovies() { //function with value that searches for any movie 
    const path = '/movie/upcoming';
    const url = generateUrl(path);
    requestMovies(url, renderSearchMovies, handleError);
}



/movie/upcoming