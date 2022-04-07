$(document).ready(function(){

    let Form1 = document.querySelector("#form1");
    let Form2 = document.querySelector("#form2");

    let Next = document.querySelector(".next");
    let Back = document.querySelector(".back");

    let SpanOne = document.querySelector(".paretner-form span.progress1");
    let SpanTwo = document.querySelector(".paretner-form span.progress2");

    Next.addEventListener("click" , function(){
        Form1.style.left="400px";
        Form2.style.left="42px";
        SpanTwo.classList.add("active");
        SpanOne.classList.remove("active");
    });

    Back.addEventListener("click" , function(){
        Form1.style.left="42px";
        Form2.style.left="650px";
        SpanOne.classList.add("active");
        SpanTwo.classList.remove("active");
    })
});



// Example starter JavaScript for disabling form submissions if there are invalid fields
    // ValidationForm
    // (function() {
    //     'use strict';
    //     window.addEventListener('load', function() {
    //       // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //       var forms = document.getElementsByClassName('needs-validation');
    //       // Loop over them and prevent submission
    //       var validation = Array.prototype.filter.call(forms, function(form) {
    //         form.addEventListener('submit', function(event) {
    //           if (form.checkValidity() === false) {
    //             event.preventDefault();
    //             event.stopPropagation();
    //           }
    //           form.classList.add('was-validated');
    //         }, false);
    //       });
    //     }, false);
    //   })();