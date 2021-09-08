<template>
  <div class="h-auto mb-6 p-4 border-b-2 border-blue-400">
    <h3 class="text-2xl">Text to direct print</h3>
    <div class="flex flex-row justify-between">
      <div class="w-full flex flex-col justify-around">
        <h3 class="text-left text-lg">Type here:</h3>
        <textarea v-model="message"
                  class="message p-2 border-2 border-gray-800"
                  rows="10"
                  maxlength="400"/>
      </div>
      <div class="w-full h-auto flex flex-col justify-between">
        <p class="text-left text-lg">Look here:</p>
        <p class="booktext p-2 w-full h-full text-left p-4 border-2">{{ message }}</p>
      </div>
    </div>
  </div>
</template>



<script type="text/x-template" id="text-to-direct-print-template">
export default {
  name: "TextToDirectPrint",
  data() {
    return {
      message: 'Hello World!'
    };
  }
}
</script>



<style scoped>
</style>
