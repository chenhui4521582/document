class Util {
  constructor() {}
  cookie() {
    return {
      get: function(name) {
        var arr;
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if ((arr = document.cookie.match(reg))) {
          return arr[2];
        } else {
          return false;
        }
      },
      set: function(name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie =
          name +
          "=" +
          escape(value) +
          (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
      },
      remove: function(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.cookie().getCookie(name);
        if (cval != null) {
          document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
      }
    };
  }
  localStorage() {
    var storage = window.localStorage;
    return {
      get: function(key) {
        var data = storage.getItem(key);
        if (!data) {
          return false;
        }
        return JSON.parse(data);
      },
      set: function(key, value) {
        if (typeof value === "string") {
          storage.setItem(key, value);
        }
        var stringData = JSON.stringify(value);
        storage.setItem(key, stringData);
      },
      remove: function(key) {
        storage.removeItem(key);
      }
    };
  }
  formatTime(date, type) {
    date = new Date(date);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    m = m < 10 ? `0${m}` : m;
    d = d < 10 ? `0${d}` : d;
    h = h < 10 ? `0${h}` : h;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;
    if (type === "y-m-d h:m:s") {
      return `${y}-${m}-${d} ${h}:${minute}:${second}`;
    } else if (type === "y-m-d") {
      return `${y}-${m}-${d}`;
    } else {
      return `${y}-${m}-${d} ${h}:${minute}:${second}`;
    }
  }
  queryUrl() {
    var req = window.location.hash.split(/[&?]/);
    var theRequest = {};
    for (var i = 0; i < req.length; i++) {
      var temp = req[i].split("=");
      theRequest[temp[0]] = decodeURIComponent(temp[1]);
    }
    return theRequest;
  }
  isEmptyObject(value) {
    if (value.toString() === "[Object Object]") {
      if (value.keys.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  isEmptyArray(value) {
    if (value instanceof Array) {
      if (value.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

let commonUtil = new Util();

let Cookie = commonUtil.cookie();

let LocalStorage = commonUtil.localStorage();

let formatTime = commonUtil.formatTime;

let QueryUrl = commonUtil.queryUrl;

let isEmptyObject = commonUtil.isEmptyObject;

let isEmptyArray = commonUtil.isEmptyArray;

export {
  Cookie,
  LocalStorage,
  formatTime,
  QueryUrl,
  isEmptyObject,
  isEmptyArray
};
