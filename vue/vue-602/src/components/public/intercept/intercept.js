import interceptComponent from './intercept.vue';
let intercept = {};
intercept.install = (vue)=>{
    //创建dom节点
    let element = document.createElement('div');
    element.className = 'interceptBox';
    //使用vue 合并引入的 组件；
    let $tpl = vue.extend(interceptComponent);
    //实例化组件，并且指定节点;
    let new_component = new $tpl({el:element});
    //挂载组件;
    let component = new_component.$mount().$el;
    //在body插入组件;
    document.body.appendChild(component);
    //编写唤起 方法;
    vue.prototype.$intercept = {
        show:function(){
            new_component.show=true;
        },
        hide:function(){
            new_component.show=false;
        }
    }
};
export default intercept;
