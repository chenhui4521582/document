import Vue from "vue";

export default Vue.extend({
  data: () => ({
    chatList: ["1231231", "dasfda"],
    value: ""
  }),
  render: function(createElement) {
    let listNode = "";
    if (this.chatList.length) {
      listNode = createElement("ul", [
        this.chatList.map((item, index) =>
          createElement(
            "li",
            {
              key: index
            },
            item
          )
        )
      ]);
    } else {
      listNode = createElement("p", "暂无聊天内容");
    }
    return createElement(
      "div",
      {
        attrs: {
          class: "items"
        }
      },
      [
        createElement("h1", "模拟聊天"),
        createElement(
          "div",
          {
            attrs: {
              class: "list"
            }
          },
          [
            listNode,
            createElement("input", {
              attrs: {
                placeholder: "请输入聊天内容"
              },
              domProps: {
                value: this.value
              },
              on: {
                keyup: e => {
                  if (e.target.value != "" && e.keyCode == 13) {
                    this.chatList.push(e.target.value);
                    this.value = "";
                  }
                },
                input: e => {
                  this.value = e.target.value;
                }
              }
            }),
            createElement(
              "button",
              {
                on: {
                  click: () => {
                    this.chatList.push(this.value);
                    this.value = "";
                  }
                }
              },
              "发送"
            )
          ]
        )
      ]
    );
  }
});
