export default {
  install (Vue, options) {
    Vue.mixin({
      data: () => ({
        message: 'mixin'
      }),
      methods: {
        update (message) {
          this.message = message
        },
        remove () {
          this.message = ''
        }
      }
    })
  }
}
