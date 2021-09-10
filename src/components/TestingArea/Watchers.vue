<template>
  <!-- Watchers -->
  <div class="p-8 border-b-2 border-green-300">
    <button @click="getStuff"
            class="py-2 px-3 bg-purple-400 rounded text-white font-extrabold hover:bg-purple-300">Click Me to Submit!</button>
    <p class="text-xl italic">{{ orderStatus }}</p>
    <p v-if="orderSubmitted">{{ orderSubmitted }}</p>
  </div>
</template>



<script>
/**
 * Module Exports.
 */
export default {
  name: "Watchers",
  data() {
    return {
      orderStatus: 'Hey where is my stuff..?',
      orderSubmitted: null
    };
  },
  methods: {
    getStuff() {
      this.orderStatus = 'Ordered';
    }
  },
  watch: {
    counter(newValue, oldValue) {
      if (newValue < oldValue) {
        console.log("Counter MINSKAR i värde. Det nya värdet är: ", newValue);
      } else if (newValue > oldValue) {
        console.log("Counter ÖKAR i värde. Det nya värdet är: ", newValue);
      }
    },
    orderStatus() {
      this.orderSubmitted = 'Your stuff have been delivered two days ago!';

      setTimeout(() => this.orderSubmitted = null, 1500);
    }
  }
}
</script>



<style scoped>

</style>