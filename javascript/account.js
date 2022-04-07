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


//Account
let accountItem = document.querySelectorAll(".account button");
for (var i = 0; i < accountItem.length; I++) {
    accountItem.addEventListener("click" , function(){
        accountItem[i].classList.add('active');
    });
}




$("input[type='radio']").click(function(){
    var sim = $("input[type='radio']:checked").val();
    //alert(sim);
    if (sim<3) { $('.myratings').css('color','red'); $(".myratings").text(sim); }else{ $('.myratings').css('color','green'); $(".myratings").text(sim); } });

    

 });

