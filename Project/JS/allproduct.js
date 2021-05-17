var arrow = document.getElementsByClassName("lst-arrow");
var ql = document.getElementsByClassName("lst-quicklook");
var nav = document.getElementsByClassName("product__nav");
var space = document.getElementById("space");

function More(n){
    if(arrow[n].style.transform != "rotate(90deg)")
    {
        arrow[n].style.transform = "rotate(90deg)";
         ql[n].style.display = "block";
         ql[n].style.visibility= "visible";
         ql[n].style.opacity ="1";
    }
    else{
        arrow[n].style.transform = "rotate(0deg)";
        ql[n].style.display = "none";
    }
}

function Change(){
    console.log(nav[0]);
    if(space.style.height == "90px"){
        nav[0].style.padding = "0px 100px 0px 0px  ";
    }
}