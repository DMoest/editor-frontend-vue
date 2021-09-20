<template>
  <form @submit.prevent="submitForm">
    <div>
      <label class="w-1/2 m-auto mt-2 text-left inline-block" for="author">Author: </label><br>
      <input type="text"
             id="author"
             v-model="author"
             required
             class="w-1/2 p-2 rounded-sm m-1 bg-gray-200 focus:bg-blue-100">
    </div>

    <div>
      <label class="w-1/2 m-auto mt-2 text-left inline-block" for="title">Title: </label><br>
      <input type="text"
             id="title"
             v-model="title"
             required
             class="w-1/2 p-2 rounded-sm m-1 bg-gray-200 focus:bg-blue-100">
    </div>

    <div>
      <label class="w-1/2 m-auto mt-2 text-left inline-block" for="category">Category</label><br>
      <input type="text"
             id="category"
             v-model="category"
             required
             class="w-1/2 p-2 rounded-sm m-1 bg-gray-200 focus:bg-blue-100">
    </div>

    <button @click="createTheDocument"
            class="py-2 px-4 rounded bg-blue-400"
            type="submit">
      Create document
    </button>

    <div class="w-full h-auto m-2 p-2 border-2 border-green-300 rounded">
      <p v-if="author">{{author}}</p>
      <p v-if="title">{{title}}</p>
      <p v-if="category">{{category}}</p>

      <h3 class="mb-4 text-left underline">Response from Server:</h3>
      <pre>{{ response }}</pre>
    </div>
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
    category: ''
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