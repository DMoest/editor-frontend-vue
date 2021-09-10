<template>

  <nav class="w-full h-auto p-4 flex flex-row justify-around bg-gray-700">
    <button @click="consoleLogText" class="px-3 py-2 bg-blue-400 rounded text-white font-bold hover:bg-blue-200">Save</button>
  </nav>

  <editor
      :api-key="apiKey"
      v-model="textContent"
      :init="{
         height: 500,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
  />


</template>


<script>
/**
 * Import Module Dependencies.
 */
import Editor from '@tinymce/tinymce-vue'


/**
 * Module Exports.
 */
export default {
  name: "TinyMceEditor",
  components: {
    Editor
  },
  data: () => ({
    textContent: '',
    apiKey: '8lf1fazjlcfjsvscqsr6alyidgxfw27oez3a3mw8ytzfllv7'

  }),
  methods: {
    consoleLogText() {
      console.log('*> --- Console Log Text from Tiny MCE Editor ----- *')
      console.log('textContent: ')
      console.log(this.textContent)
    }
  },
  watch: {
    textContent(textValue) {
      console.log('*> ', textValue)
    }
  }
}
</script>



<style>

</style>
