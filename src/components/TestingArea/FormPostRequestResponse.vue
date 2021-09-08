<template>
  <!-- Forms submit request & stuff -->
  <div class="p-8 border-b-2 border-pink-500">
    <h3 class="text-2xl">This form thing...</h3>
    <form @submit.prevent="submitForm">
      <div>
        <label class="w-1/2 m-auto mt-2 text-left inline-block" for="name">Name: </label><br>
        <input type="text" id="name"
               v-model="name"
               required
               class="w-1/2 p-2 rounded-sm m-1 bg-gray-200 focus:bg-blue-100">
      </div>
      <div>
        <label class="w-1/2 m-auto mt-2 text-left inline-block" for="email">Email: </label><br>
        <input type="text"
               v-model="email"
               required
               class="w-1/2 p-2 rounded-sm m-1 bg-gray-200 focus:bg-blue-100">
      </div>
      <div>
        <label class="w-1/2 m-auto mt-2 text-left inline-block" for="caps">How do I turn off capslock?</label><br>
        <input type="text"
               v-model="caps"
               required
               class="w-1/2 p-2 rounded-sm m-1 bg-gray-200 focus:bg-blue-100">
      </div>
      <button :class="[name ? activeClass : passiveClass]"
              type="submit">Submit</button>
      <div class="w-full h-auto m-2 p-2 border-2 border-green-300 rounded">
        <h3 class="mb-4 text-left underline">Response from Server:</h3>
        <pre>{{ response }}</pre>
      </div>
    </form>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "FormPostRequestResponse",
  data() {
    return {
      passiveClass: 'my-4 py-2 px-3 rounded-sm text-white bg-gray-500',
      activeClass: 'my-4 py-2 px-3 rounded-sm text-white bg-blue-200',
      email: '',
      caps: '',
      response: ''
    }
  },
  methods: {
    submitForm() {
      axios.post('jsonplaceholder.typicode.com/posts', {
        name: this.name,
        email: this.email,
        caps: this.caps
      }).then(response => {
        this.response = JSON.stringify(response, null, 2)
      }).catch(error => {
        this.response = 'Error: ' + error.response.status
      })
    },
  }
}
</script>



<style scoped>
 .activeClass {
   background: #42b983;
 }
</style>