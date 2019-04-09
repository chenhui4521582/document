window.onload = function () {
    window.addEventListener("resize",function(e){
        var el = document.getElementsByTagName('body')[0];
        var wid = el.clientWidth > 640 ? 640 : el.clientWidth;
        var size = wid/640*100;
        document.getElementsByTagName('html')[0].style.fontSize=size+'px'
    });

    var el = document.getElementsByTagName('body')[0];
    var wid = el.clientWidth > 640 ? 640 : el.clientWidth;
    var size = wid/640*100;
    document.getElementsByTagName('html')[0].style.fontSize=size+'px';
};

