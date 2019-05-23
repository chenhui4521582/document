function Compile (el, vm) {
  this.el = document.querySelector(el)
  this.vm = vm
  this.fragment = null;
  this.init()
}

Compile.prototype = {
  init: function () {
	if(this.el){
	  this.fragment = this.nodeToFragment(this.el)
	  this.compileElement(this.fragment)
	  this.compileDirective(this.fragment)
	  this.el.appendChild(this.fragment)
	}else{
	  console.log('Dom 不存在')
	}
  },
  nodeToFragment: function (el) {
    var fragment = document.createDocumentFragment()
	var child = el.firstChild
	while (child) {
	  // 将Dom元素移入fragment中
	  fragment.appendChild(child);
	  child = el.firstChild
	}
	return fragment;
  },
  compileElement: function (fragment) {
	var childNodes = fragment.childNodes,
		_this = this;
	[].slice.call(childNodes).forEach( function (node) {
	  let reg = /\{\{(.*)\}\}/,
		  text = node.textContent;
	  if(_this.isElementNode(node)){
		_this.compileDirective(node)
	  }else if(_this.isTextNode(node) && reg.test(text) ){
		_this.compileText(node, reg.exec(text)[1]);
	  }
	  if (node.childNodes && node.childNodes.length) {
		_this.compileElement(node);  // 继续递归遍历子节点
	  }
	})
  },
  compileText: function (node, exp) {
	var self = this;
	var initText = this.vm[exp];
	this.updateText(node, initText);  // 将初始化的数据初始化到视图中
	new Watcher(this.vm, exp, function (value) { // 生成订阅器并绑定更新函数
	  self.updateText(node, value);
	});
  },
  compileDirective: function (node) {
	var nodeAttributes = node.attributes;
	var _this = this;
	console.log(nodeAttributes)
	if(nodeAttributes.length) return false
	Array.prototype.forEach.call(nodeAttributes, function(attr) {
	  var attrName = attr.name;
	  if(_this.isDirective(attrName)){
	  	var exp = attr.name
		var dir = attrName.substring(2);
		if (_this.isEventDirective(dir)) {  // 事件指令
		  _this.compileEvent(node, _this.vm, exp, dir);
		} else {  // v-model 指令
		  _this.compileModel(node, _this.vm, exp, dir);
		}
		node.removeAttribute(attrName);
	  }
	});
  },
  compileEvent: function (node, vm, exp, dir) {
	var eventType = dir.split(':')[1];
	var cb = vm.methods && vm.methods[exp];

	if (eventType && cb) {
	  node.addEventListener(eventType, cb.bind(vm), false);
	}
  },
  compileModel: function (node, vm, exp, dir) {
	var self = this;
	var val = this.vm[exp];
	this.modelUpdater(node, val);
	new Watcher(this.vm, exp, function (value) {
	  self.modelUpdater(node, value);
	});

	node.addEventListener('input', function(e) {
	  var newValue = e.target.value;
	  if (val === newValue) {
		return;
	  }
	  self.vm[exp] = newValue;
	  val = newValue;
	});
  },
  isTextNode: function(node) {
	return node.nodeType == 3;
  },
  isElementNode: function(node) {
	return node.nodeType == 1;
  },
  isDirective: function (name) {
    return name.indexOf('v-') > -1 || name.indexOf('on:') > -1 || name.indexOf(':') > -1 || name.indexOf('@') > -1
  },
  isEventDirective: function(dir) {
	return dir.indexOf('on:') === 0;
  },
  updateText: function (node, value) {
	node.textContent = typeof value == 'undefined' ? '' : value;
  },
  modelUpdater: function(node, value, oldValue) {
	node.value = typeof value == 'undefined' ? '' : value;
  },
}