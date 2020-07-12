<template>
  <div class="app">
    <NavbarComponent></NavbarComponent>
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent";

export default {
  name: "app",
  components: { NavbarComponent }
};
</script>

<style lang="scss">
@import "./styles/variables.scss";

body {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("./assets/img/main_bg@2x.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
