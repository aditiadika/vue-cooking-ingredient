<template>
  <div id="app">
    <Navbar />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    HelloWorld,
    Navbar
  }
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
</style>
