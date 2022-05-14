// Call movie list
let elMoviesList = $(".js-movies-list");
let elTemlateMovies = $("#movie-template").content;

// Splice kinolar ayyay first 100 elements
let movies = kinolar.splice(0, 100);

// Dispaly movie card function
function displayMovieCard(movie){
  let newListItem = elTemlateMovies.cloneNode(true);

  $(".movie-name", newListItem).textContent = movie.title.toString();
  $(".movie-year", newListItem).textContent = movie.year;
  $(".movie-genres", newListItem).textContent = movie.genres.join(", ");
  $(".movie-cast", newListItem).textContent = movie.cast.join(", ");
  
  return newListItem
}

// Render movie list function
let renderMovies = function() {

  let elMoviesWrapperFragment = document.createDocumentFragment();
  movies.forEach(function(movie) {
    elMoviesWrapperFragment.append(displayMovieCard(movie))
  })
  
  elMoviesList.append(elMoviesWrapperFragment)
}
renderMovies()




