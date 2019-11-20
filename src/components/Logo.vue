<template>
  <div class="logo">
    <img src="../assets/brand.png" />
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.logo {
  margin-top: 50px;
  img {
    max-width: 100%;
    margin: 0 auto;
    padding: 48px 0;
  }
}
</style>
