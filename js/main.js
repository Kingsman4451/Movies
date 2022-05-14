// Call movie list
let elMoviesList = $(".js-movies-list");
let elTemlateMovies = $("#movie-template").content;

// Splice kinolar ayyay first 100 elements
let movies = kinolar.splice(0, 100);

// Dispaly movie card function
function displayMovieCard(kino){
  let newListItem = elTemlateMovies.cloneNode(true);

  $(".movie-name", newListItem).textContent = kino.title.toString();
  $(".movie-year", newListItem).textContent = kino.year;
  $(".movie-genres", newListItem).textContent = kino.genres.join(", ");
  $(".movie-cast", newListItem).textContent = kino.cast.join(", ");
  
  return newListItem
}

// Render movie list function
let renderMovies = function() {

  let elMoviesWrapperFragment = document.createDocumentFragment();
  movies.forEach(function(kino) {
    elMoviesWrapperFragment.append(displayMovieCard(kino))
  })
  
  elMoviesList.append(elMoviesWrapperFragment)
}
renderMovies()




