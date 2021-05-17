
var swiper_con = document.getElementsByClassName('swiper-container');
var hotpr = document.getElementsByClassName('hotpr');
var pr = document.getElementsByClassName('another');
var btn = document.getElementsByClassName('btn-1');
function popup(n){
    for (let index = 0; index < swiper_con.length; index++) {
        swiper_con[index].style.zIndex = '-10';
        swiper_con[index].style.opacity = '0';
        hotpr[index].style.display ='none';
        pr[index].style.display='none';
        btn[index].style.display='none';
        
    }
    swiper_con[n].style.zIndex='1';
    swiper_con[n].style.opacity = '1';
    hotpr[n].style.display ='block';
    document.getElementById("bg-image").style.display= 'none';
    pr[n].style.display ='flex';
    console.log(n);
    btn[n].style.display = 'block';
    return n;
}

