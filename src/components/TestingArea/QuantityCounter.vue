<template>
  <!-- Backpack - quantity click event -->
  <div class="item mb-6 p-4 flex flex-col justify-between gap-4 border-b-2 border-yellow-500">
    <h3 class="text-2xl">Quantity Counter</h3>
    <div class="w-10 h-10 m-auto bg-blue-500 block"></div>
    <div class="w-1/2 m-auto px-4 py-2 block flex flex-row justify-between bg-blue-400 rounded-3xl">
      <button class="inc" @click="counter > 0 ? counter -= 1 : 0">-</button>
      <span class="quant-text">Quantity: {{ counter }}</span>
      <button class="inc" @click="counter += 1">+</button>
    </div>
    <button class="submit" @click="submit">Submit</button>
  </div>
</template>



<script type="text/x-template" id="quantity-counter-template">

export default {
  name: "QuantityCounter",
  data() {
    return {
      counter: 0
    };
  }
}

</script>



<style scoped>

</style>
