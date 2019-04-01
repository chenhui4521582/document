export default [
  {
    name: "timeCountdown",
    method: function(el, bind, vnode) {
      //requestAnimationFrame 实例
      let timer = "";
      if (timer) return false;
      //开始时间
      let startTime = new Date().getTime(),
        //结束时间
        endTime = bind.value - new Date().getTime(),
        //时分秒
        hours = 0,
        second,
        minute,
        ms;
      //关闭上一个requestAnimationFrame 实例
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        //当前的时间
        let nowTime = new Date().getTime();
        //计算剩余时间
        let residueTime = endTime - Math.floor(nowTime - startTime);
        //时间换算
        hours = Math.floor((residueTime / 1000 / 60 / 60) % 24);
        second = Math.floor((residueTime / 1000 / 60) % 60);
        minute = Math.floor((residueTime / 1000) % 60);
        ms = Math.floor((residueTime / 10) % 100);

        hours = hours < 10 ? `0${hours}` : hours;

        minute = minute < 10 ? `0${minute}` : minute;

        second = second < 10 ? `0${second}` : second;

        timer = requestAnimationFrame(fn);
        if (residueTime <= 0) {
          cancelAnimationFrame(timer);
          hours = second = minute = ms = "00";
        }

        el.innerHTML = `${hours}:${second}:${minute}:${ms}`;
      });
    }
  }
];
