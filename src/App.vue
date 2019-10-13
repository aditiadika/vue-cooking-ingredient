<template>
  <div id="app">
    <Navbar />
    <Index />
  </div>
</template>

<script>
import Index from "./components/Index.vue";
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Index,
    Navbar
  }
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
</style>
