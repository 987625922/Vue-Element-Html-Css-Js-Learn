<template>
  <div>
    <ul>
      <li v-for="(item,index) in lists" :key="index" @click="choose(index)" :class="{active: index == current}">
        {{item}}
      </li>
    </ul>
    <button @click="add()">添加</button>
    <ul>
      <li v-for="(item,index) in targets" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data () {
      return {
        lists: [1, 2, 3, 4, 5, 6],
        targets: [],
        current: -1
      }
    },
    methods: {
      choose (index) {
        this.current = index
      },
      add () {
        if (this.current !== -1) {
          this.targets.push(this.lists[this.current])
          this.current = -1
        }
      }
    }
  }
</script>

<style scoped>
  li.active {
    background: green;
  }
</style>
