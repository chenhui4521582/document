<template>
  <div>
    <button @click="handleClick">ifram通讯</button>
    <p v-for="(item, index) in receive" :key="index">
      接收到的数据: {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  name: "exampleIframe",
  data: () => ({
    receive: ["当前没有接收到数据"]
  }),
  methods: {
    handleClick() {
      window.parent.postMessage("龙哥是猪 ！！！！", "*");
    }
  },
  created() {
    window.addEventListener("message", msg => {
      console.log(msg);
      if (msg.data.type === "sendMessage") {
        this.receive.push(msg.data.data);
      }
    });
  }
};
</script>

<style scoped lang="less"></style>
