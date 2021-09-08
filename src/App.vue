<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
<!--    <router-link :to="{ name: 'TextEditor' }">Text Editor</router-link> |-->
    <router-link :to="{ name: 'Experimental' }">Experimental</router-link>
  </div>

  <router-view/>

</template>



<script>
// @ is an alias to /src

export default {
  name: 'App',
};

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.active {
  background: #3d868f;
}

</style>
