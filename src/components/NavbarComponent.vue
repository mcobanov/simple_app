<template>
  <div class="navbar">
    <span class="hamburger" @click="toggleSidebar()" v-if="isMobileView">&#8801;</span>
    <div class="panel" :class="{'visible': isSidebarVisible}">
      <ul>
        <li @click="toggleSidebar()"><router-link to="/">Home</router-link></li>
        <li @click="toggleSidebar()"><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data: () => {
    return {
      isMobileView: false,
      isSidebarVisible: false
    };
  },
  methods: {
    handleView() {
      this.isMobileView = window.innerWidth <= 900;
    },
    toggleSidebar() {
      if (this.isMobileView) {
        this.isSidebarVisible = !this.isSidebarVisible;
      }
    }
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/fonts.scss";

* {
  font-family: wfont, josefinMedium, sans-serif;
  font-size: 18px;
}

.navbar {
  .panel {
    height: 50px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-end;

    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;

      li a {
        display: block;
        color: $primary-foreground;
        text-align: center;
        padding: 8px 12px;
        margin-right: 10px;
        text-decoration: none;
        user-select: none;
        border-bottom: 2px solid transparent;
        transition: border ease 0.3s;

        &.router-link-exact-active {
          border-bottom: 2px solid $primary-foreground;
        }

        &:not(.router-link-exact-active):hover {
          border-bottom: 2px solid $button-accent;
        }
      }
    }

    @media only screen and (max-width: $grid-md) {
      position: absolute;
      top: 0;
      left: -250px;
      width: 250px;
      height: 100%;
      flex-direction: column;
      background-color: $primary-background;
      margin: 0px;
      justify-content: center;
      transition: transform ease-in .3s;

      ul {
        flex-direction: column;
        align-self: center;
        max-width: 100px;

        li a {
          margin-bottom: 25px;
          margin-right: 0px;
        }
      }

      &.visible {
        transform: translateX(250px);
        transition: transform ease-in .3s;
      }
    }
  }

  .hamburger {
    position: absolute;
    right: 20px;
    top: 20px;
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    color: $primary-foreground;
    font-size: 50px;
    cursor: pointer;
  }
}
</style>
