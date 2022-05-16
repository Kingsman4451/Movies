// Call form
let elSearchForm = $(".js-form");
let elSearchInput = $(".js-input", elSearchForm);

// Call movie list
let elMoviesList = $(".js-movies-list");
let elTemlateMovies = $("#movie-template").content;

// Splice kinolar ayyay first 100 elements
let movies = kinolar.splice(0, 500);

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

  return elMoviesList
}
renderMovies()


// Search function
elSearchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  elMoviesList.innerHTML = "";
  let searchRegex = new RegExp(elSearchInput.value.trim(), "gi");

  movies.forEach(function(movie) {
    if (movie.title.match(searchRegex)){
      elMoviesList.append(displayMovieCard(movie))
    } 
  })
})

