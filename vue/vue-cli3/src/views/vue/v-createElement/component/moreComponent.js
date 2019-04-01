import Vue from "vue";

let children = Vue.extend({
  render: function(createElement) {
    return createElement("p", "11111");
  }
});

export default Vue.extend({
  render: function(createElement) {
    return createElement(
      "div",
      {
        attrs: {
          class: "items"
        }
      },
      [
        createElement("h1", "多个重复的组件"),
        createElement(
          "div",
          {
            attrs: {
              class: "list"
            }
          },
          [
            Array.apply(null, { length: 5 }).map(function() {
              return createElement(children);
            })
          ]
        )
      ]
    );
  }
});
