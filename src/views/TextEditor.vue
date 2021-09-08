<template>
  <QuillEditor></QuillEditor>
</template>



<script>
import { QuillEditor } from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  name: "TextEditor",
  components: {
    QuillEditor
  }
}

</script>



<style scoped>

</style>