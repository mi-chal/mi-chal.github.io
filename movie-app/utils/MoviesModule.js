var MoviesModule = (function () {

//functions for add-movie page

  function getMoviesFromLocalStorage () {
    var movies = localStorage.getItem('movies');
    var moviesParsed = JSON.parse(movies);
    return moviesParsed;
  };
  
  function createMoviesArray() {
    var movies = getMoviesFromLocalStorage();
    var movieId = (new Date()).getTime();
    var movieObject = {
      id : movieId,
      imageSrc : document.querySelector('#image-src').value,
      title : document.querySelector('#title').value,
      genre : document.querySelector('#genre').value,
      year : document.querySelector('#year').value,
      mark : document.querySelector('#mark').value,
      description : document.querySelector('#description').value
      };
    if (!movies) movies = [];
    movies.push(movieObject);
    localStorage.setItem('movies', JSON.stringify(movies));
  };

  function deleteMovie (id) {
    var currentMovies = getMoviesFromLocalStorage();
    var newMovies = currentMovies.filter(function(elem) {
      if (elem.id !== id) {
        return elem;                                                                                                              

      };
    });
    var moviesToJSON = JSON.stringify(newMovies);
    localStorage.setItem('movies', moviesToJSON);
  };

  function addMovieAndMoveToMainPage () {
    var movieForm = document.querySelector('#movie-inputs');
    movieForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (ValidationModule.validateAllFields()) {
        createMoviesArray();
      } else {
        return;
      };

      window.location.replace('../movies-list/movies-list.html')
    });
  };

  function goBackToMoviesListPage () {
    var backButton = document.querySelector('#go-back');
    backButton.addEventListener('click', function (){
      window.location.replace('../movies-list/movies-list.html');
    });
  };

//functions for movies-list page

  function goToAddNewMoviePage () {
    var addNewMovieButton = document.querySelector('#add-button');
    addNewMovieButton.addEventListener('click', function () {
      window.location.replace('../add-movie-screen/add-movie.html');
    });
  };

  function displayTable () {
    var table = document.querySelector('#tbody');
    var movies = getMoviesFromLocalStorage();
    table.innerHTML = '';
    for (var i = 0; i < movies.length; i++) {
      var movieRow = createMovieRow(movies[i]);
      table.appendChild(movieRow);
    };
  };

  function createMovieRow (movie) {
    var row = document.createElement('tr');
    
    var imgCell = document.createElement('td');
    var img = document.createElement('img');
    var titleCell = document.createElement('td');
    var genreCell = document.createElement('td'); 
    var yearCell = document.createElement('td');
    var markCell = document.createElement('td');
    var deleteCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    var detailsCell = document.createElement('td');
    var detailsButton = document.createElement('button');

    img.src = movie.imageSrc;
    img.classList.add('list__picture');
    titleCell.innerText = movie.title;
    genreCell.innerText = movie.genre;
    yearCell.innerText = movie.year;
    markCell.innerText = movie.mark;
    deleteButton.innerText = 'delete';
    deleteButton.classList.add('list__button', 'list__button--delete');
    deleteButton.addEventListener('click', function () {
      deleteMovie(movie.id);
      displayTable();
    });
    detailsButton.innerText = 'details';
    detailsButton.classList.add('list__button', 'list__button--details');
    var movieDetails = {
      imgSrc : movie.imageSrc,
      title : movie.title,
      genre : movie.genre,
      year : movie.year,
      mark : movie.mark
    };
    detailsButton.addEventListener('click', function (e) {
      window.location.replace('../movie-details/movie-details.html');
      localStorage.setItem('details', JSON.stringify(movieDetails));
    });

    imgCell.appendChild(img);
    deleteCell.appendChild(deleteButton);
    detailsCell.appendChild(detailsButton);
    row.appendChild(imgCell);
    row.appendChild(titleCell);
    row.appendChild(genreCell);
    row.appendChild(yearCell);
    row.appendChild(markCell);
    row.appendChild(deleteCell);
    row.appendChild(detailsCell);
    return row;
  };

//functions for movie-detils

  function getMovieDetailsFromLocalStorage () {
    var details = localStorage.getItem('details');
    var detailsParsed = JSON.parse(details);
    return detailsParsed;
  };

  function createMovieDetailsTable () {
    var movieDetails = getMovieDetailsFromLocalStorage();
    var table = document.querySelector('#details');
    table.innerHTML = '';

    var image = document.createElement('img');
    var firstRow = document.createElement('tr');
    var titleCell = document.createElement('td');
    var yearCell = document.createElement('td');
    var markCell = document.createElement('td');
    var secondRow = document.createElement('tr');
    var thirdRow = document.createElement('tr');

    image.src = movieDetails.imageSrc;
    image.setAttribute('class', 'list__image');
    titleCell.innerText = movieDetails.title;
    yearCell.innerText = movieDetails.year;
    markCell.innerText = movieDetails.mark;
    secondRow.innerText = movieDetails.genre;
    thirdRow.innerText = movieDetails.description;

    firstRow.appendChild(titleCell);
    firstRow.appendChild(yearCell);
    firstRow.appendChild(markCell);

    table.appendChild(image);
    table.appendChild(firstRow);
    table.appendChild(secondRow);
    table.appendChild(thirdRow);

  };

  return {
    addMovieAndMoveToMainPage: addMovieAndMoveToMainPage,
    displayTable: displayTable,
    goToAddNewMoviePage: goToAddNewMoviePage,
    createMovieDetailsTable: createMovieDetailsTable,
    goBackToMoviesListPage: goBackToMoviesListPage
  };
})();
