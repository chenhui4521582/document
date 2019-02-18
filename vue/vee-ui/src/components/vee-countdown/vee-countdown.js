export default {
  name:'TimeCountdown',
  method: function (el, bind, vnode) {
    console.log(bind);
    // 存放 requestAnimationFrame 实例
    let timer = ''
    if(timer) return false
    // 结束时间
    let end_time = bind.value - new Date().getTime();
    // 开始时间
    let start_time = new Date().getTime();
    // 时间
    let hour,minute,second,ms;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame( function fn () {
      let now_time = new Date().getTime();
      let residueTime = end_time - Math.floor( now_time - start_time );

      hour = Math.floor( residueTime / 1000 / 60 / 60 % 24)
      minute = Math.floor( residueTime / 1000 / 60 % 60)
      second = Math.floor( residueTime / 1000 % 60)
      ms = Math.floor( residueTime / 10 % 100)

      hour = hour < 10 ? `0${hour}` : hour
      minute = minute < 10 ? `0${minute}` : minute
      second = second < 10 ? `0${second}` : second
      ms = ms < 10 ? `0${ms}` : ms

      timer = requestAnimationFrame( fn );

      if( residueTime <=0 ){

        cancelAnimationFrame(timer)
        hour= second = minute = ms = '00';
      }
      el.innerHTML = `${hour}:${minute}:${second}:${ms}`;
    })
  }
}
