<template>
  <div id="app">

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>



<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: { HelloWorld },
  data() {
      return {
        message: 'Hello World!',
        checkedNames: [],
        options: [
          { value: 'John' },
          { value: 'Paul' },
          { value: 'George' },
          { value: 'Ringo' },
          { value: 'Pete' },
        ],
        tacos: '',
        activeClass: 'text-white px-3 py-2 border-2 border-blue-400 bg-blue-400 hover:bg-blue-200 hover:border-blue-300',
        counter: 0,
        num1: 1,
        num2: 1,
        name: ''
    };
  }
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
