<template>
  <!-- Who is a Beatle - checkbox response V-Model -->
  <div class="h-auto mb-6 flex flex-col justify-between p-4 border-b-2 border-red-400">
    <h3 class="text-2xl">Checkbox to array append/print</h3>

    <div>
      <h2 >Who is a Beatle?</h2>
      <div class="w-full h-auto p-4 flex flex-row justify-around">
          <span class="container" v-for="option in options"
                :key="option">
            <input class="border-gray-700 border-2"
                   v-model="checkedNames"
                   :id="option.value"
                   :value="option.value"
                   type="checkbox" />
            <label class="p-2"
                   for="option.value">{{ option.value }}</label>
         </span>
      </div>
    </div>
    <span class="w-full h-auto">Checked Names: {{ checkedNames }}</span>
  </div>
</template>



<script type="text/x-template" id="checkbox-to-array-print-template">
export default {
  name: "CheckBoxToArrayPrint",
  data() {
    return {
      checkedNames: [],
      options: [
        { value: 'John' },
        { value: 'Paul' },
        { value: 'George' },
        { value: 'Ringo' },
        { value: 'Pete' },
      ],
    }
  }

}
</script>



<style scoped>

</style>