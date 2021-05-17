

function Sidebar() {
    var spin = document.getElementById("menu").style;
    var nav = document.getElementById("nav-container").style;
    var nav_line = document.getElementById("nav-line").style;
    var sbar = document.getElementById('sidebar').style;
    var space = document.getElementById('space').style;
    var close = document.getElementById('close');
   
    if (sbar.visibility != "visible") {
        spin.transform = 'rotate(90deg)';
        nav_line.width = '1150px';
        nav.background = 'white';
        nav.height = '190px';
        sbar.visibility = 'visible';
        sbar.height = '90px';
        space.height = '90px';
        close.style.display = 'block';
    }
    else {
        spin.transform = 'rotate(0deg)';
        nav_line.width = '0px';
        nav.background = '#dbdbdb98';
        nav.height = '100px';
        sbar.visibility = 'hidden';
        sbar.height = '0px';
        space.height = '0px';
        close.style.display = 'none';
    }
}

function lst_brand() {
    var lst_brand = document.getElementById('lst-brand');
    lst_brand.style.display = 'flex';
}
function out_brand(){
    var lst_brand = document.getElementById('lst-brand');
    lst_brand.style.display = 'none';
}


