<template>
  <form @submit.prevent="submitForm" class="p-4">
<!--      <label class="w-3/4 m-auto mt-2 text-left inline-block" for="author">Author: </label><br>-->
      <input type="text"
             id="author"
             v-model="author"
             required
             placeholder="Document author"
             class="w-4/5 p-2 rounded-sm m-1 bg-gray-200 focus:bg-blue-100">

<!--      <label class="w-3/4 m-auto mt-2 text-left inline-block" for="title">Title: </label><br>-->
      <input type="text"
             id="title"
             v-model="title"
             required
             placeholder="Document title"
             class="w-4/5 my-1 p-2 rounded-sm bg-gray-200 focus:bg-blue-100">

<!--      <label class="w-3/4 m-auto mt-2 text-left inline-block" for="category">Category</label><br>-->
      <input type="text"
             id="category"
             v-model="category"
             required
             placeholder="Document category"
             class="w-4/5 p-2 rounded-sm bg-gray-200 focus:bg-blue-100">

    <button @click="createTheDocument"
            class="w-4/5 my-4 py-2 px-4 rounded font-bold text-white bg-blue-400 hover:bg-blue-300"
            type="submit">
      Create New Document
    </button>
  </form>
</template>



<script>
export default {
  name: 'CreateDocumentForm',
  components: {

  },
  data: () => ({
    author: '',
    title: '',
    category: '',
    isShowing: false,
  }),
  methods: {
    createTheDocument() {
      return this.$emit('createDocument', { author: this.author, title: this.title, category: this.category })
    }
  },
  watch: {
    author(value) {
      this.author = value
    },
    title(value) {
      this.title = value
    },
    category(value) {
      this.category = value
    }
  }
}

</script>



<style>

</style>