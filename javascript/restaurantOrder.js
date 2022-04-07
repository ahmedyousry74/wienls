$(document).ready(function(){

// toggleSideBars
const barToggle = document.querySelector('.bars');
const sideBar = document.querySelector('.sidebar');
const closeSide = document.querySelector('.close');


barToggle.addEventListener('click' , function(){
    sideBar.classList.toggle("show-sidebar");
    document.getElementsByClassName('header').style.marginLeft = "300px";
});

closeSide.addEventListener('click' , function(){
    sideBar.classList.remove('show-sidebar');
});


   //Increasing and Decreasing counter
//    let Quantity = 0;
//    let btnAdd = document.querySelector('.add');
//    let btnSubtract = document.querySelector('.subtract');
//    document.querySelector('.quantity').innerText = Quantity ;

//    btnAdd.addEventListener('click' , function(){
//     Quantity = Quantity + 1;
//     document.querySelector('.quantity').innerText = Quantity ;
//    });

//    btnSubtract.addEventListener('click' , function(){
//     Quantity = Quantity - 1;
//     document.querySelector('.quantity').innerText = Quantity ;
//    });


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


   //Shuffle
   var mixer = mixitup('.restaurant-menu-meals');
//    var mixer = mixitup(containerEl);
   var mixer = mixitup(restaurant-menu-meals, {
      selectors: {
          target: '.blog-item'
      },
      animation: {
          duration: 1000
      },
      controls: {
        live: true
    }
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





});
