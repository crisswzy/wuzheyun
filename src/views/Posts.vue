<template>
  <b-container fluid class="posts-page">
    <b-row>
      <b-col class="main mb-5" cols="12" md="8">
        <SectionHeader type="start" title="ALL POSTS" class="mb-5" />
        <div class="main-body">
          <PostCard
            v-for="post in postsList"
            :key="post.post_id"
            v-bind:post="post"
          />
        </div>
      </b-col>

      <b-col class="aside mb-5" cols="12" md="4">
        <SectionHeader type="center" title="CATEGORIES" />
        <div class="aside-body">
          TO BE UPDATED...
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import PostCard from "@/components/PostCard.vue";
import axios from "axios";

export default {
  name: "Posts",
  components: {
    SectionHeader,
    PostCard
  },
  data() {
    return {
      postsList: [],
      loading: false,
      error: null
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.getPostsList();
    },

    getPostsList() {
      this.loading = true;
      axios
        .get("http://www.wuzheyun.cn:88/api/v1/posts")
        // .then(response => (this.postsList = response.data.success))
        .then(response => {
          if (response.data.success) {
            this.postsList = response.data.data.items;
            this.error = null;
          } else {
            this.error = response.data.message;
          }
        })
        .catch(error => this.error = error)
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style lang="less" scoped></style>
