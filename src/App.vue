<template>
  <div id="wuzheyun">
    <!-- HEADER -->
    <header class="fixed-top">
      <Navbar />
    </header>

    <!-- BODY -->
    <div class="body" style="min-height:960px;">
      <Brand />
      <router-view />
    </div>

    <!-- GO-TO-TOP -->
    <!-- <div id="back-top">
      <a href=""><font-awesome-icon :icon="['fas', 'chevron-up']" size="3x"/></a>
    </div> -->

    <!-- FOOTER -->
    <footer>
      <div>
        <font-awesome-icon :icon="['far', 'copyright']" size="sm" /> 2019
        WUZHEYUN
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Brand from "./components/Brand.vue";

export default {
  name: "wuzheyun",
  components: {
    Navbar,
    Brand
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
  font-family: "Montserrat", "Noto Sans", "Helvetica Neue", Helvetica, Tahoma, Arial, // 英文
      "PingFang SC", "Noto Sans SC",  "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", sans-serif; // 中文
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  // color: #2c3e50;
  color: #000000;

  a {
    text-decoration: none;
  }

  .body {
    max-width: 1140px;
    margin: 0 auto;
    a {
      color: #010101;
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
