// Javascript
// document load event
document.addEventListener('DOMContentLoaded', function () {
  // Header
  var toggleButton = document.querySelector('header div.toggle-menu');
  var nav = document.querySelector('header nav');
  toggleButton.addEventListener('click', function () {
    var icon = this.firstElementChild;
    var span = this.lastElementChild;

    if (!nav.offsetHeight) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      span.innerText = 'Close';
    } else {
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
      span.innerText = 'Menu';
    }
    nav.style.height = !nav.offsetHeight ? 'calc(100vh - 80px)' : 0;
  });

  // Video Popup
  !(function () {
    var closeButton = document.querySelector('#video-popup-modal .btn-close');
    console.log(closeButton);
    if (!closeButton) return;
    closeButton.addEventListener('click', function () {
      document.querySelectorAll('video').forEach(function (vdo) {
        vdo.pause();
      });
    });
  })();

  // Order Form Validation
  !(function () {
    var inputs = document.querySelectorAll(
      '#order-popup-modal input:not(.blue-shadow-button)'
    );
    if (!inputs.length) return;
    var form = document.querySelector('#order-popup-modal form');

    form.addEventListener('submit', function () {
      for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
          const message = form.querySelector('p.error-message');
          message.classList.add('show-message');
          setTimeout(function () {
            message.classList.remove('show-message');
          }, 3000);
          event.preventDefault();
          return;
        }
      }
    });
  })();

    // Contact a Rep Form Validation
    !(function () {
      var inputs = document.querySelectorAll(
        '#contact-popup-modal input[type=text]'
      );
      if (!inputs.length) return;
      var form = document.querySelector('#contact-popup-modal form');
      form.addEventListener('submit', function () {
        inputs.forEach(function (input) {
          if (!input.value) {
            input.style.borderColor = 'red';
            input.style.background = '#FFEFE5';
          } else {
            input.style.borderColor = '#000';
            input.style.background = 'transparent';
          }
        });
        inputs.forEach(function (input) {
          input.addEventListener('keypress', function () {
            this.style.background = 'transparent';
            this.style.borderColor = '#000';
          });
        });
        for (let i = 0; i < inputs.length; i++) {
          if (!inputs[i].value) {
            const message = form.querySelector('p.error-message');
            message.classList.add('show-message');
            setTimeout(function () {
              message.classList.remove('show-message');
            }, 3000);
            event.preventDefault();
            return;
          }
        }
      });
  
    })();

});
