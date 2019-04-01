export default [
  {
    name: "formatTime",
    method: (date, type) => {
      if (data && date instanceof Date) {
        date = data.getTime();
      } else {
        date = new Date(date);
      }
      let y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        h = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();
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
  }
];
