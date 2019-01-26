<template>
  <section>
    <VueSwitch v-model="show" />
    <p>{{show}}</p>
  </section>
</template>

<script>
import { VueSwitch } from '@components/'

export default {
  name: 'vueSwitch',
  data: () => ({
    show:false
  })
}
</script>

<style scoped lang="less">
.toast{
  button{
    display: block;
    margin-bottom: .2rem;
  }
  .text-left();
  p{
    padding: 10px 0;
  span{
    color: #0a8cff;
  }
  }
  .border-bottom{
    border-bottom: 1px solid #f1f1f1;
  }
  .title{
    text-align: center;
  }
}
</style>
