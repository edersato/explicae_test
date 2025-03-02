<template>
  <div class="container-xs" id="app">
    <Navbar class="p-3" />
    <Home class="px-3" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue'
export default {
  components: {
    Home, Navbar
  }
}
</script>

<style lang="scss">

$bg-main: #eff0f0;

#app {
  background-color: $bg-main;
}

</style>