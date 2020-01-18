<template>
  <div>hello info
    <button type="button" @click="add()">添加</button>
  </div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import store from '@/store'
  export default {
    name: 'Info',
    store,
    methods: {
      add () {
        console.log('add from info')
        store.commit('increate')
      }
    }
  }
</script>

<style scoped>

</style>
