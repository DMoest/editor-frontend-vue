<template>
  <div class="home">
    <img class="m-auto" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>



<script>
/**
 * Import Module Dependencies.
 */
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


/**
 * Module Exports.
 */
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>



<style>

</style>
