  var validateForm = (function() {
    var form = document.querySelector('movie-inputs');
    form.setAttribute('novalidate', true);

    var hasError = function (field) {
      if (field.type === 'submit' || field.type === 'button') return;
      var validity = field.validity;
      if (validity.valueMissing) return 'Please fill out this field.';
      if (validity.badInput) return 'Please enter a number.';
    };

    var showError = function (field, error) {
      field.classList.add('error');
      var id = field.id;
      if (!id) return;

      var message = field.form.querySelector('.error-message#error-for-' + id);
      if (!message) {
        message = document.createElement('div');
        message.className = 'error-message';
        message.id = 'error-for' + id;
        field.parentNode.insertBefore(message, field.nextSibling);
      };
      field.setAttribute('aria-describedby', 'error-for' + id);
      message.innerHTML = error;
      message.style.display = 'block';
      message.style.visibility = 'visible';
    };

    document.addEventListener('blur', function(event) {
      if (!event.target.form.classList.contains('validate')) return;
      var error = hasError(event.target);
      if (error) {
        showError(event.target, error);
      }
    }, true);

    return {
      validateForm: validateForm
    };

  })();