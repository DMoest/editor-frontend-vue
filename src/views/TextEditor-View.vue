<template>
  <TinyMceEditor></TinyMceEditor>
</template>



<script>
/**
 * Import Dependencies.
 */
import TinyMceEditor from '@/components/TextEditor/TinyMceEditor'


/**
 * Module Exports.
 */
export default {
  name: "TextEditor",
  components: {
    TinyMceEditor
  }
}
</script>



<style>
.tox-tinymce {
  width: 80%;
  height: auto;
  margin: auto;
}
</style>