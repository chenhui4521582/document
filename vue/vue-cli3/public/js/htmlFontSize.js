(function (d,w) {
  var documentEvent = d.documentElement,
    resize = 'orientationchange' in w ? 'orientationchange' : 'resize',
    resizeFn = function () {
      var clientWidth = documentEvent.clientWidth;
      if(!clientWidth) return
      if(clientWidth&&clientWidth>=750){
        documentEvent.style.fontSize = '100px';
      }else{
        documentEvent.style.fontSize = 100 * (clientWidth/750) + 'px'
      }
    }
  if (!d.addEventListener) return;
  resizeFn();
  w.addEventListener(resize, resizeFn, false);
})(document,window)
