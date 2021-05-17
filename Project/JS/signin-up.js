function Sidebar(){
    var si = document.getElementById("signin").style;
    var btn = document.getElementById("btn-side");
    var bg = document.getElementById("si-bg").style;

    if( bg.width != '100%')
    {
        bg.width = '100%';
        si.display = 'flex';
        btn.style.right = '690px';
        btn.innerText = 'Sign Up';
    }
    else{
        bg.width ='0%';
        si.display = 'none';
        btn.style.right = '-165px';
        btn.innerText = 'Log In';
    }
}