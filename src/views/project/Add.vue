<template>
  <div>
    <p>标题</p>
    <input type="text" v-model="title"/>
    <p>内容</p>
    <input type="text" v-model="content"/>
    <p>
      <button type="button" @click="add()">添加</button>
    </p>
  </div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import store from '@/store'

  export default {
    name: 'Add',
    data () {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      add () {
        store.commit('addItem', {
          title: this.title,
          content: this.content
        })
        this.title = '',
          this.content = '',
          this.$router.push('/home/list')
      }
    }
  }
</script>

<style scoped>

</style>
