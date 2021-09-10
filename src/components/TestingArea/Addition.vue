<template>
    <div class="mb-6 p-4 border-b-2 border-purple-400">
      <h3 class="text-2xl block">Addition</h3>

      <div class="w-1/3 m-auto p-4 flex flex-row justify-around">
        <input class="w-10"
               v-model.number="num1"
               type="number">
        <span>+</span>
        <input class="w-10"
               v-model.number="num2"
               type="number">
        <span>=</span>
        <span>{{ num1 + num2 }}</span>
        <p></p>
      </div>
    </div>
</template>



<script>
/**
 * Module Exports.
 */
export default {
  name: "Addition",
  data() {
    return {
      num1: 1,
      num2: 1
    }
  }
}

</script>



<style scoped>

</style>