import alert from './toast.vue';

let toast = {};

toast.install = function(vue){
    let $tpl = vue.extend(alert);
    var element = document.createElement('div');
    element.className = 'alertBox';
    element.id = 'alertBox';
    let $vm = new $tpl({el:element});
    let component = $vm.$mount().$el;
    document.body.appendChild(component);
    let stop='';
    vue.prototype.$toast = {
        show:function(obj){
            if(!obj){
                $vm.type='loading';
            }else{
                if(typeof obj=='string'){
                    $vm.text=obj;
                    $vm.type='';
                }
                if(typeof obj=='object'){
                    Object.assign($vm,obj);
                }
            }
            $vm.show = true;
            let time = (obj&&obj.time)?obj.time:2000;
            stop = setTimeout(function() {
                $vm.show = false;
                (obj&&obj.callback) && obj.callback();
            },time)
        },
        hide:function(){
            $vm.show = false;
        }
    }
};
export default toast;





