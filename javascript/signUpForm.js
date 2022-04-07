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
    let EyeIcon = document.querySelector('.signup-form .eye');
    
      EyeIcon.addEventListener('click' , function(){
          if(InputPassword.type === "password"){
              InputPassword.setAttribute('type' ,'text');
          }
          else{
              InputPassword.setAttribute('type' ,'password')
          }
      }); 


      //ShowConfirmPassword
    let InputCheckPassword = document.querySelector('.checkPassword');
    let CheckEyeIcon = document.querySelector('.signup-form .eye2');
    
    CheckEyeIcon.addEventListener('click' , function(){
          if(InputCheckPassword.type === "password"){
            InputCheckPassword.setAttribute('type' ,'text');
          }
          else{
            InputCheckPassword.setAttribute('type' ,'password')
          }
      }); 
    
    
    
  
    
    });