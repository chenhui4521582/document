export default {
    reload(_this,path){
        window.onbeforeunload = function() {
            var n = window.event.screenX - window.screenLeft;
            var b = n > document.documentElement.scrollWidth-20;
            if(b && window.event.clientY < 0 || window.event.altKey){
                console.log('222')
            }else{
                console.log('1111')
                _this.$router.push({'path':path})
            }
        }
    }
}
