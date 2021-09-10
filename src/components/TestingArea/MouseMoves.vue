<template>
  <!-- MouseMoves -->
  <div class="p-8 border-b-2 border-gray-700"
       @mousemove="xCoordinate"
       :style="{
    backgroundColor: `hsl(${x}), 80%, 50%` }">
    <h3 class="text-2xl">MouseMoves</h3>

    <p>
      <button @click="decrement">-</button>
      {{ counter2 }}
      <button @click="increment">+</button>
    </p>
    <p>Pixels across: {{ x }}</p>
  </div>
</template>



<script>
/**
 * Module Exports.
 */
export default {
  name: "MouseMoves",
  data() {
    return {
      counter2: 0,
      x: 0
    }
  },
  methods: {
    increment() {
      this.counter2++;
    },
    decrement() {
      this.counter2--;
    },
    xCoordinate(e) {
      this.x = e.clientX;
    }
  }
}
</script>



<style scoped>

</style>