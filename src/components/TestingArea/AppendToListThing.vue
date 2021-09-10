<template>
  <div class="p-8 border-b-2 border-purple-700">
    <h3 class="text-2xl">Some list append thing...</h3>

    <div class="w-10 h-10 bg-blue-100 m-auto"></div>
    <div class="main-info">
      <span class="name">Daniel</span>
      <h3>It´s awesome after the rain!</h3>
    </div>

    <hr>

    <ul class="w-1/2 m-auto my-6">
      <li v-for="comment in comments"
          :key="comment"
          class="text-left p-2 m-1 rounded-sm bg-gray-200 hover:bg-blue-200">
        {{ comment }}
      </li>
    </ul>

    <input @keyup.enter="addComment"
           v-model="newComment"
           placeholder="Add a comment"
           class="w-1/2 p-2 bg-gray-100 border-2 border-gray-400 rounded"/>
    <p class="w-1/2 m-auto text-sm text-left italic">Type something and press ENTER to add comment to list.</p>
  </div>
</template>



<script>
/**
 * Module Exports.
 */
export default {
  name: "AppendToListThing",
  data() {
    return {
      name: '',
      newComment: '',
      comments: [
        'Looks great Dude!',
        'I love the sea.',
        'Where are you at?'
      ],
    }
  },
  methods: {
    addComment() {
      this.comments.push(this.newComment)
      this.newComment = ''
    },
  }
}
</script>



<style scoped>

</style>