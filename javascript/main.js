$(document).ready(function(){


//ScrollNavbar
let navbar = document.querySelector('.Navbar');
window.addEventListener('scroll' , function(){
  navbar.classList.toggle("sticky" , window.scrollY > 10)
})

//ActiveNavbar
let navItem = document.querySelector('.navbar .navbar-nav li');
  navItem.addEventListener('click' , function(){
  navItem.classList.toggle('active');
});


//ActiveSideBar
let navItemSidebar = document.querySelector('.sidebar li');
  navItemSidebar.addEventListener('click' , function(){
  navItemSidebar.classList.toggle('active')
});


// toggleBars
const barToggle = document.querySelector('.bars');
const sideBar = document.querySelector('.sidebar');
const closeSide = document.querySelector('.close');


barToggle.addEventListener('click' , function(){
    sideBar.classList.toggle("show-sidebar");
});

closeSide.addEventListener('click' , function(){
    sideBar.classList.remove('show-sidebar');
});



 // wooooooooow
 var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
// woooooooooooow



// lightbox
// lightbox.option({
//     'resizeDuration': 200,
//     'wrapAround': true
//   })






  //  start scrollTop
  $(function(){


    var scrollbutton = $("#scroll");

    $(window).scroll(function(){

        if ( $(this).scrollTop()>=300)
        {
            scrollbutton.show();
        }
        else
        {
            scrollbutton.hide();
        }
    });

    scrollbutton.click(function(){
        $("html,body").animate({ scrollTop : 0 } , 1000);
    });
    

  }); 




  // loading overlay
  $(window).on('load', function(){ 
    {
      $(".loading-overlay,.loading-overlay .sk-cube-grid").fadeOut(1000);
    };
  });



  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  
  

//Increment & Decrement counter

var btnAdd = document.getElementsByClassName('add');
var btnSubtract = document.getElementsByClassName('subtract');

  //Increment
for(var i = 0 ; i < btnAdd.length ; i++) {
  var Increment = btnAdd[i];
  Increment.addEventListener('click' , function(e){
      var ButtonClicked = e.target;
      var input = ButtonClicked.parentElement.children[1];
      var inputValue = input.value;
      var newValue = parseInt(inputValue) + 1;
      input.value = newValue;
  });
}

//Decrement
for(var i = 0 ; i < btnSubtract.length ; i++) {
      var Decrement = btnSubtract[i];
      Decrement.addEventListener('click' , function(e){
      var ButtonClicked = e.target;
      var input = ButtonClicked.parentElement.children[1];
      var inputValue = input.value;
      var newValue = parseInt(inputValue) - 1;
      if(newValue >= 1){
          input.value = newValue;
      }
      else{
          input.value = 1;
      }
      
  });
}

});