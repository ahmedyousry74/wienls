$(document).ready(function(){

    
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


})