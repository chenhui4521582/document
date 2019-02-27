import Vue from "vue";
export default Vue.extend({
  data: () => ({
    show: false
  }),
  methods: {
    toggle() {
      this.show = !this.show;
    }
  },
  render: function(createElement) {
    let vif = () => {
      if (this.show) {
        return createElement("p", "show值为true");
      } else {
        return createElement("p", "show值为false");
      }
    };
    return createElement(
      "div",
      {
        attrs: {
          class: "items"
        }
      },
      [
        createElement("h1", "指令实现V-if"),
        createElement(
          "div",
          {
            attrs: {
              class: "list"
            }
          },
          [vif()]
        ),
        createElement(
          "button",
          {
            on: {
              click: this.toggle
            }
          },
          "切换状态"
        )
      ]
    );
  }
});
