import Vue from "vue";

export default Vue.extend({
  data: () => ({
    value: ""
  }),
  methods: {
    handleChange(e) {
      this.value = e.target.value;
    }
  },
  render: function(createElement) {
    return createElement(
      "div",
      {
        attrs: {
          class: "items"
        }
      },
      [
        createElement("h1", "指令实现V-model"),
        createElement(
          "div",
          {
            attrs: {
              class: "list"
            }
          },
          [
            createElement("input", {
              attrs: {
                value: this.value
              },
              on: {
                input: this.handleChange
              }
            }),
            createElement("p", this.value)
          ]
        )
      ]
    );
  }
});
