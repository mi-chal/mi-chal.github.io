var ValidationRules = (function () {

  function validateImageLinkInput (input) {
    return input !== "";
  }

  function validateTitleInput (input) {
    return input !== "";
  }

  function validateGenreInput (input) {
    return input !== "";
  }

  function validateYearInput (input) {
    return input > 1920 && input < 2019;
    }

  function validateMarkInput (input) {
    return input > 0 && input < 10;
  }

  function validateDescriptionField (input) {
    return input!=="" && input.length < 300;
  }

  return {
    validateImageLinkInput: validateImageLinkInput,
    validateTitleInput: validateTitleInput,
    validateYearInput: validateYearInput,
    validateGenreInput: validateGenreInput,
    validateMarkInput: validateMarkInput,
    validateDescriptionField: validateDescriptionField
    }
})();