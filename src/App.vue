<template>
  <div id="app">
    <HeaderComponent />
  </div>
</template>

<script>
import "./styles/index.css";
import HeaderComponent from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  created() {
    this.$store.dispatch("subscribeToResizeEvent");
  },
};
</script>

<style></style>
