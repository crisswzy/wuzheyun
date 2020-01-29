<template>
  <b-container fluid class="posts-page">
    <Brand />
    <b-row>
      <b-col class="main mb-5" cols="12" md="8">
        <SectionHeader type="start" title="ALL POSTS" class="mb-5" />
        <div class="main-body">
          <PostCard
            v-for="post in postsList"
            :key="post.id"
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
import Brand from "@/components/Brand.vue";
import { getPosts } from "@/API/posts";

export default {
  name: "Posts",
  components: {
    SectionHeader,
    PostCard,
    Brand
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
      this.fetchPosts();
    },
    fetchPosts() {
      this.loading = true;
      getPosts()
        .then(response => {
          this.postsList = response.data.items;
        })
        .catch(error => (this.msg = error.response.data.msg))
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style lang="less" scoped></style>
