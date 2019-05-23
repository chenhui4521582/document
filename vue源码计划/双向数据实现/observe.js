/** 属性监听器 **/
function ObServe (data) {
  this.data = data
  this.walk(this.data)
}

ObServe.prototype = {
  walk: function (data) {
	Object.keys(data).forEach( key => {
	  this.difineReactive(data, key, data[key])
	})
  },
  difineReactive: function (data, key, value) {
	observer(value)
	/** 实例化Dep订阅器 **/
	let dep = new Dep();
	Object.defineProperty(data, key, {
	  configurable: true,
	  enumerable: true,
	  get: function () {
		/** 添加订阅器 **/
		if (Dep.target) {
		  dep.addDep(Dep.target);
		}
		return value
	  },
	  set: function (newValue) {
		value = newValue
		/** 如果数据变化，通知所有订阅者 **/
		dep.notify();``
	  }
	})
  }
}

function observer (data) {
  if( !data || typeof data != "object"){
	return false
  }
  return new ObServe(data)
}


/** 消息订阅器 **/
function Dep () {
  this.Deps = []
}

Dep.prototype = {
  /** 添加订阅器 **/
  addDep: function (dep) {
	this.Deps.push(dep);
  },
  /** 如果数据变化，通知所有订阅者 **/
  notify: function () {
	this.Deps.forEach( function (watcher) {
	  watcher.update()
	})
  }
}



