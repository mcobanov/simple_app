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

html {
  overflow: hidden;
  height: 100%;
}

body {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("./assets/img/main_bg@2x.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: auto;
  height: 100%;
  transform-style: flat;
}

.toasted{
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px !important;
  text-transform: uppercase;
}
</style>
