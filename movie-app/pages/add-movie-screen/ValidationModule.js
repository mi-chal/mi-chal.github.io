var ValidationModule = (function () {

  function showErrorMessage (field, message) {
    var parentElem = field.parentElement;
    var movieError = parentElem.querySelector('.movie__error');
    if (!movieError) {
      var messageElem = document.createElement('div');
      messageElem.classList.add('movie__error-message');
      field.classList.add('movie__error');
      messageElem.innerText = message;
      parentElem.appendChild(messageElem);
    }
  }

  function removeErrorMessage () {
    var movieInputsArray = document.querySelectorAll('.movie__input');
    movieInputsArray.forEach(function(input) {
      input.addEventListener('change', function(e) {
        e.target.classList.remove('movie__error');
        var parentElem = e.target.parentElement;
        var messageElem = document.querySelector('.movie__error-message');
        if(messageElem) {
          parentElem.removeChild(messageElem);
        }
      })
    })
  }

  function validateImgLinkField() {
    var imgLinkElem = document.querySelector('#image-src');
    var isImgLinkCorrect = ValidationRules.validateImageLinkInput(imgLinkElem.value);
    if (isImgLinkCorrect) {
      return true;
    } else {
      return showErrorMessage(imgLinkElem, 'Please enter the image URL link');
    }
  }

  function validateTitleField() {
    var titleElem = document.querySelector('#title');
    var isTitleCorrect = ValidationRules.validateTitleInput(titleElem.value);
    if (isTitleCorrect) {
      return true
    } else {
      return showErrorMessage(titleElem, 'Please enter the title of the movie');
    }
  }

  function validateGenreField() {
    var genreElem = document.querySelector('#genre');
    var isGenreCorrect = ValidationRules.validateGenreInput(genreElem.value);
    if (isGenreCorrect) {
      return true;
    } else {
      return showErrorMessage(genreElem, 'Please enter the genre of the movie');
    }
  }

  function validateYearField() {
    var yearElem = document.querySelector('#year');
    var isYearCorrect = ValidationRules.validateYearInput(yearElem.value);
    if (isYearCorrect) {
      return true;
    } else {
      return showErrorMessage(yearElem, 'Please enter the year between 1920 and 2019');
    }
  }

  function validateMarkField() {
    var markElem = document.querySelector('#mark');
    var isMarkCorrect = ValidationRules.validateMarkInput(markElem.value);
    if (isMarkCorrect) {
      return true;
    } else {
      return showErrorMessage(markElem, 'Please enter the number between 1 and 10');
    }
  }

  function validateDescriptionField() {
    var descrElem = document.querySelector('#description');
    var isDescrCorrect = ValidationRules.validateDescriptionField(descrElem.value);
    if (isDescrCorrect) {
      return true;
    } else {
      return showErrorMessage(descrElem, 'Please enter the short description of the movie you want to add')
    }
  }

  function validateAllFields () {
    return !!(validateImgLinkField() && validateTitleField() && validateGenreField()
      && validateYearField() && validateMarkField() && validateDescriptionField());

  }

  return {
    validateAllFields: validateAllFields,
    removeErrorMessage: removeErrorMessage
  }

})();