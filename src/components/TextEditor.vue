<template>
    <div class="TextEditor">
      <pre v-text="$attrs"/>

      <!-- Quill Text Editor -->
      <quill-editor
          ref="myQuillEditor"
          v-model="content"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
      />

      <!-- Or manually control the data synchronization -->
      <quill-editor
          :content="content"
          :options="editorOption"
          @change="onEditorChange($event)"
      />

    </div>
</template>



<script>
    export default {
        name: 'Texteditor'
    };
</script>
