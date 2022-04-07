$(document).ready(function(){


// Example starter JavaScript for disabling form submissions if there are invalid fields
// ValidationForm
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  




//ShowPassword
let InputPassword = document.querySelector('.password');
let EyeIcon = document.querySelector('.login-form .eye');

  EyeIcon.addEventListener('click' , function(){
      if(InputPassword.type === "password"){
          InputPassword.setAttribute('type' ,'text');
      }
      else{
          InputPassword.setAttribute('type' ,'password')
      }
  }); 






});