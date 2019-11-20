<template>
  <div class="navbar">
    <div class="container-fluid">
      <router-link class="logo" to="/">
        <font-awesome-icon :icon="['fas', 'home']" size="md"/>
      </router-link>
      <ul class="menu">
        <li class="menu-item"><router-link to="/">HOME</router-link></li>
        <li class="menu-item"><router-link to="/posts">POSTS</router-link></li>
        <li class="menu-item"><router-link to="/about">ABOUT</router-link></li>
      </ul>
      <!-- <ul class="menu">
        <li class="menu-item has-sub-menu">
          <a href="#">Lang +</a>
          <ul class="sub-menu">
            <li><a href="">中文</a></li>
            <li><a href="">EN</a></li>
          </ul>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.navbar {
  background-color: #000000;
  height: 50px;
  font-size: 14px;
  letter-spacing: 4px;

  .container-fluid {
    flex-wrap: nowrap;
    max-width: 1140px;
    // LEFT LOGO
    .logo {
    }
    // NAV MENU
    .menu {
      display: flex;
      height: 100%;
      .menu-item {
        padding: 0 0 0 30px;
        display: flex;
        align-items: center;
      }
      .sub-menu {
        background-color: #000000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s ease-out;
        position: absolute;
        top: 40px;
        z-index: 999;

        min-width: 160px;
        padding: 10px 16px;
        text-align: left;
        li {
          margin: 8px 0;
        }
      }
      .has-sub-menu:hover .sub-menu {
        opacity: 1;
        visibility: visible;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    a {
      font-weight: bold;
      color: #ffffff;
      &:hover {
        color: rgb(185, 185, 185);
      }
      &.router-link-exact-active {
        // color: #6e6e6e;
      }
    }
  }
}
</style>
