// Call movie list
let elMoviesList = $(".js-movies-list");

// Splice kinolar ayyay first 100 elements
let movies = kinolar.splice(0, 100);

// Dispaly movie card function
function displayMovieCard(kino){
  let newListItem = createElement("li", "card p-4");
  for (let i = 0; i < 4; i++) {
    let newLineSpan = createElement("span", "line");
    newListItem.append(newLineSpan);
  }

  let newCardContent = createElement("div", "card-content");
  newListItem.append(newCardContent)


  let newCardTitle = createElement("h3", "text-white h5", kino.title);
  let newContentInfo = createElement("div", "card-info p-3 overflow-auto");
  newCardContent.append(newCardTitle, newContentInfo)


  let newInfoText = createElement("p");
  let newInfoTextYear = createElement("span", "text-white", "Year: ");
  let newInfoYearRes = createElement("span", "card-text text-secondary", kino.year);
  newInfoText.append(newInfoTextYear, newInfoYearRes)


  let newInfoTextGenres = createElement("p", "text-white m-0", "Genres: ")
  let newInfoGenresRes = createElement("p", "card-text text-secondary", kino.genres.join(", "));
  let newInfoTextCast = createElement("p", "text-white m-0", "Cast: ")
  let newInfoCastRes = createElement("p", "card-text text-secondary", kino.cast.join(", "))
  newContentInfo.append(newInfoText, newInfoTextGenres, newInfoGenresRes, newInfoTextCast, newInfoCastRes);

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




