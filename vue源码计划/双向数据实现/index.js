/** vue 源码解读 双向数据绑定 **/

/**
 *  需要使用4 个模块
 *  observer 属性监听
 *  dep      消息订阅器Dep
 *  watcher  观察者,派发事件
 *  compile  渲染页面
 **/


function Vue (options) {
  var _this = this
  this.vm = this
  this.el = options.el
  this.data = options.data

  this.proxyKeys()
  /** 监控数据 **/
  observer(this.data)
  /** 解析模板 **/
  new Compile(this.el, this.vm);
  return this
}

Vue.prototype = {
  proxyKeys: function () {
    let _this = this
	Object.keys(this.data).forEach(function (key) {
	  Object.defineProperty(this, key, {
		configurable: true,
		enumerable: false,
		get: function () {
		  return _this.data[key]
		},
		set: function (newValue) {
		  _this.data[key] = newValue
		}
	  })
	})
  }
}

