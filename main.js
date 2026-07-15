// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Formspree AJAX submit — keeps people on the page with a friendly message
  document.querySelectorAll('form[data-formspree]').forEach(function (form) {
    var success = form.querySelector('.form-success');
    var error = form.querySelector('.form-error');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (success) success.style.display = 'none';
      if (error) error.style.display = 'none';

      var data = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            if (success) success.style.display = 'block';
          } else {
            if (error) error.style.display = 'block';
          }
        })
        .catch(function () {
          if (error) error.style.display = 'block';
        });
    });
  });
});
