export default {
  data: () => ({
    message: "mixin"
  }),
  methods: {
    update(message) {
      this.message = message;
    },
    remove() {
      this.message = "";
    }
  }
};
