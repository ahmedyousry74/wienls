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



    

});