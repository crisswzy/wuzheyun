<template>
  <div id="wuzheyun">
    <!-- HEADER -->
    <header class="fixed-top">
      <Navbar />
    </header>

    <!-- BODY -->
    <div class="body" >
      <router-view />
    </div>

    <!-- GO-TO-TOP -->
    <!-- <div id="back-top">
      <a href=""><font-awesome-icon :icon="['fas', 'chevron-up']" size="3x"/></a>
    </div> -->

    <!-- FOOTER -->
    <footer>
      <div>
        <font-awesome-icon :icon="['far', 'copyright']" size="sm" /> 2020 WUZHEYUN
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "wuzheyun",
  components: {
    Navbar
  },
  data() {
    return {};
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    // window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {}
};
</script>

<style lang="less">
#wuzheyun {
  font-family: "Montserrat", "Noto Sans", "Helvetica Neue", Helvetica, Tahoma, Arial, // en
      "PingFang SC", "Noto Sans SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", sans-serif; // cn
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: calc(100vh - 50px);
  position: relative;

  text-align: center;
  color: #000000;

  .body {
    max-width: 1140px;
    margin: 0 auto;
    padding-bottom: 50px; // 给footer留位置
    a {
      text-decoration: none;
      color: #000000;
    }
  }

  #back-top {
    position: fixed;
    bottom: 60px;
    right: 40px;
    z-index: 1030;

    // visibility: hidden;
    // opacity: 0;
    a {
      color: #000000;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #ffffff;
    height: 50px;
    line-height: 50px;
    background-color: #000000;
    letter-spacing: 4px;
    font-size: 14px;
    font-weight: 800;
  }
}
</style>
