
/**
 * 利用requestAnimationFrame接口重新定义setInterval定时器接口
 */
export class M {
  constructor () {
    this.arr = []
  }
  setInterval (fn) { // 模拟函数名 --- 循环
    const len = this.arr.length
    this.arr[len] = { // 建立动画对象
      'for' () {},
      'animate': 0
    }

    this.arr[len].for = () => {
      fn()
      if (!this.arr[len]) { // 如果该对象被删除了，则退出递归
        return
      }
      this.arr[len].animate = requestAnimationFrame(this.arr[len].for) // 递归调用
    }

    this.arr[len].animate = requestAnimationFrame(this.arr[len].for)

    return {
      index: len, // 返回arr数组内动画对象的下标
      obj: this.arr[len], // 返回当前动画对象
      arr: this.arr // 返回所有生成过的对象，便于外部控制与手动释放
    }
  }
  clearInterval (obj) { // 清空
    if (!obj || !obj.arr) {
      return
    }
    cancelAnimationFrame(obj.obj.animate) // 默认清除当前传进来的对象
    obj.obj.animate = obj.obj.for = null // 断开依赖关系，释放内存
    delete this.arr[obj.index] // 删除对象
  }
}

/**
 * 利用M类重定义的setInterval方法计算浏览器的fps（刷新频率）
 */
export class Fps extends M {
  constructor (setterCb) {
    super()
    this.setterCb = setterCb
    this.fps = 0
    this.diff = 0
    this.then = Date.now()
    this.computedFps()
  }
  computedFps () {
    this.stop = this.setInterval(() => {
      this.diff = Date.now() - this.then
      this.fps += 1
      if (this.diff >= 1000) {
        this.setterCb && this.setterCb(this.fps)
        this.then += this.diff
        this.fps = 0
      }
    })
  }
}

class Util {
  cookie () {
    return {
      get: function (name) {
        var arr; var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        if (arr = document.cookie.match(reg)) {
          return (arr[2])
        } else { return null }
      },
      set: function (name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
      },
      remove: function (name) {
        var exp = new Date()
        exp.setTime(exp.getTime() - 1)
        var cval = this.cookie().getCookie(name)
        if (cval != null) {
          document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
        }
      }
    }
  }
  localStorage () {
    var storage = window.localStorage
    return {
      get: function (key) {
        var data = storage.getItem(key)
        if (!data) { return false }
        return JSON.parse(data)
      },
      set: function (key, value) {
        if (typeof value === 'string') {
          storage.setItem(key, value)
        }
        var stringData = JSON.stringify(value)
        storage.setItem(key, stringData)
      },
      remove: function (key) {
        storage.removeItem(key)
      }
    }
  }
  formatTime (date, type) {
    date = new Date(date)
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    var d = date.getDate()
    var h = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    m = m < 10 ? `0${m}` : m
    d = d < 10 ? `0${d}` : d
    h = h < 10 ? `0${h}` : h
    minute = minute < 10 ? `0${minute}` : minute
    second = second < 10 ? `0${second}` : second
    if (type === 'y-m-d h:m:s') {
      return `${y}-${m}-${d} ${h}:${minute}:${second}`
    }else if (type === 'y-m-d') {
      return `${y}-${m}-${d}`
    }else {
      return `${y}-${m}-${d} ${h}:${minute}:${second}`
    }
  }
  queryUrl () {
    var req = window.location.hash.split(/[\&\?]/)
    var theRequest = {}
    for (var i = 0; i < req.length; i++) {
      var temp = req[i].split('=')
      theRequest[temp[0]] = decodeURIComponent(temp[1])
    }
    return theRequest
  }
  isEmptyObject (value) {
    if (value.toString() === '[Object Object]') {
      if (value.keys.length === 0) {
        return true
      } else {
        return false
      }

    } else {
        return false
    }
  }
  isEmptyArray (value) {
    if (value instanceof Array) {
      if (value.length > 0) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
}
let commonUtil = new Util(),

    Cookie = commonUtil.cookie(),

    LocalStorage = commonUtil.localStorage(),

    formatTime = commonUtil.formatTime,

    QueryUrl = commonUtil.queryUrl,

    isEmptyObject = commonUtil.isEmptyObject,

    isEmptyArray = commonUtil.isEmptyArray;

export default { Cookie, LocalStorage, formatTime, QueryUrl, isEmptyObject, isEmptyArray }
