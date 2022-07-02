<template>
  <div>
    <span @click="show">
      {{ name }}-----{{ myprice }}
    </span>
    <button @click="add">+</button>

  </div>
</template>

<script>
// import { mixin } from '../mixin.js'//局部混入
export default {
  name: 'Game',
  data() {
    return {
      myprice: this.price
    }
  },
  props: ['name', 'price'],
  methods: {
    add() {
      this.myprice++;
    }
  },
  // mixins: [mixin] //局部混入
}
</script>

<style>
</style>