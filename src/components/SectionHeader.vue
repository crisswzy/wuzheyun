<template>
  <div v-if="type === 'start'">
    <div class="main-header d-flex align-items-center mb-4">
      <span class="text pr-3"
        ><b>{{ title }}</b></span
      >
      <div
        style="height:2px;border-bottom:1px solid #000000;flex-grow:1 "
      ></div>
    </div>
  </div>

  <div v-else-if="type === 'center'">
    <div class="aside-header d-flex align-items-center mb-4">
      <div
        style="height:2px;border-bottom:1px solid #000000;flex-grow:1 "
      ></div>
      <span class="text px-3"
        ><b>{{ title }}</b></span
      >
      <div
        style="height:2px;border-bottom:1px solid #000000;flex-grow:1 "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    type: String,
    title: String
  }
};
</script>
<style lang="less" scoped>
* {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 4px;
}
</style>
