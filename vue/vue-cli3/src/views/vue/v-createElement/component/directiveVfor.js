import Vue from "vue";
export default Vue.extend({
  data: () => ({
    list: ["vue.js 实战", "javascript 高级程序设计", "javascript 语言精髓"]
  }),
  methods: {
    toggle() {
      this.show = !this.show;
    }
  },
  render: function(createElement) {
    let _this = this;
    function vFor() {
      return _this.list.map((item, index) =>
        createElement(
          "li",
          {
            key: index
          },
          item
        )
      );
    }
    return createElement(
      "div",
      {
        attrs: {
          class: "items"
        }
      },
      [
        createElement("h1", "指令实现V-for"),
        createElement(
          "div",
          {
            attrs: {
              class: "list"
            }
          },
          [vFor()]
        )
      ]
    );
  }
});
