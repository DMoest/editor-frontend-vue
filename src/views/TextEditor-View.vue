<template>
  <TinyMceEditor></TinyMceEditor>
</template>



<script>
/**
 * Import Dependencies.
 */
import TinyMceEditor from '@/components/TextEditor/TinyMceEditor'
// import DocumentMenu from '@/components/TextEditor/DocumentMenu'


/**
 * Module Exports.
 */
export default {
  name: "TextEditor",
  components: {
    TinyMceEditor,
    // DocumentMenu,
  }
}
</script>



<style>
.tox-tinymce {
  width: 80%;
  height: auto;
  margin: auto;
}

.fade-enter-active {
  transition: opacity 0.25s ease-out;
}

.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-enter-from,
.fade-enter-leave {
  opacity: 0;
}

.isShowing {
  position: absolute;
}

.blurClass {
  filter: blur(2px);
  opacity: 0.4;
}

.bkClass {
  transition: all 0.1s ease-out;
}

</style>
