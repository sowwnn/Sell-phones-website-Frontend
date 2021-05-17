var hotpr = document.getElementsByClassName("hotpr");
var shopnow = document.getElementsByClassName("btn-shop");
var q = document.getElementsByClassName("quit");
function Shopnow(n) {
    if (hotpr[n].style.height != '100px')
    {
        hotpr[n].style.height = '100px';
        hotpr [n].style.top = '450px';
        hotpr [n].style.left = '430px';
        shopnow[n].style.opacity = '1';
        shopnow[n].style.top ='450px';

        shopnow[n].style.zIndex = '20';
        q[0].style.display = 'block';
        console.log(q[0].style.display);
    }
    else{
        hotpr[n].style.height = '180px';
        shopnow[n].style.opacity = '0';
        hotpr [n].style.left = '10px';
        hotpr [n].style.top = '380px';
        shopnow[n].style.top = '384px';
        q[0].style.display = 'none';
        shopnow[n].style.zIndex = '-1';
    }
   
}
   

function Quitshop(){
    for (let index = 0; index < hotpr.length; index++) {
        hotpr[index].style.height = '180px';
        shopnow[index].style.opacity = '0';
        hotpr [index].style.top = '380px';
        hotpr [index].style.left = '10px';
        shopnow[index].style.top = '384px';
        q[0].style.display = 'none';
        shopnow[index].style.zIndex = '-1';
    }
}