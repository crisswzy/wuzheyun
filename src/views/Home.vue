<template>
  <b-container fluid class="home-page">
    <Brand />
    <!-- 图片轮播 -->
    <b-row no-gutters class="mb-4">
      <b-col cols="12">
        <Carousel />
      </b-col>
    </b-row>

    <!-- Features-->
    <b-row no-gutters class="features mb-5">
      <b-col class="feature-wrapper" style="margin-right:3%;">
        <a href="javascript:void(0);">
          <div class="img-container">
            <img src="../assets/images/it.jpg" alt="it" />
          </div>
          <div class="text-overlay">IT</div>
        </a>
      </b-col>
      <b-col class="feature-wrapper" style="margin-right:3%;">
        <a href="javascript:void(0);">
          <div class="img-container">
            <img src="../assets/images/coffee.jpg" alt="coffee" />
          </div>
          <div class="text-overlay">LIFE</div>
        </a>
      </b-col>
      <b-col class="feature-wrapper">
        <a href="javascript:void(0);">
          <div class="img-container">
            <img src="../assets/images/design.jpg" alt="design" />
          </div>
          <div class="text-overlay">DESIGN</div>
        </a>
      </b-col>
    </b-row>

    <!-- EMBEDED Instagram -->
    <b-row no-gutters class="instagram mb-5">
      <b-col cols="12">
        <section>
          <SectionHeader type="center" title="INSTAGRAM" />
          TO BE UPDATED...
          <div class="ig-body">
            <div class="image-container" v-for="ig in igList" :key="ig.media_id" :style="{backgroundImage:'url(' + ig.thumbnail_url + ')'}">
            </div>
          </div>
        </section>
      </b-col>
    </b-row>

    <!-- 主要内容 -->
    <b-row class="content">
      <b-col cols="12" md="8" class="mb-5" order="2" order-md="1">
        <!-- 主栏 -->
        <section class="main">
          <SectionHeader type="start" :title="$t('posts')" />
          <div class="main-body">
            <!-- 渲染PostCard -->
            <PostCard
              v-for="post in postsList"
              :key="post.id"
              v-bind:post="post"
            />
            <!-- '更多'按钮 -->
            <h6 class="text-right" style="font-weight: 800; letter-spacing: 4px;">
              <router-link to="/posts">{{ $t("more") }} >>></router-link>
            </h6>
            <!-- if loading || error -->
            <div>
              <p v-if="loading">Loading...</p>
              <p v-if="msg">{{ msg }}</p>
            </div>
          </div>
        </section>
      </b-col>

      <!-- 侧栏 -->
      <b-col cols="12" md="4" class="mb-5" order="1" order-md="2">
        <aside class="aside">
          <SectionHeader type="center" :title="$t('about me')" />
          <div class="aside-body">
            <section class="profile mb-3">
              <b-row no-gutters class="profile-card d-flex">
                <!-- 头像 -->
                <b-col cols="12" class="profile-avatar d-flex justify-content-center py-3">
                  <div class="avatar-container">
                    <img
                      src="../assets/avatar.jpg"
                      style="width:100%; height:100%;"
                      alt="profile-photo"
                    />
                  </div>
                </b-col>
                <!-- 名字和bio -->
                <b-col cols="12" class="profile-intro d-flex flex-column py-2">
                  <h5 class="name">{{$t('resume.name')}}</h5>
                  <span class="bio">
                    <p v-html="$t('bio')"></p>
                  </span>
                </b-col>
                <!-- 社交媒体 -->
                <b-col cols="12 mb-2">
                  <SocialMedia />
                </b-col>
              </b-row>
                <!-- '更多'按钮 -->
                <h6 class="text-right py-3" style="font-weight: 800; letter-spacing: 4px;">
                  <router-link to="/about">{{$t('more')}} >>></router-link>
                </h6>
            </section>
          </div>
        </aside>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import PostCard from "@/components/PostCard.vue";
import SocialMedia from "@/components/SocialMedia.vue";
import Brand from "@/components/Brand.vue";
import { getPosts } from "@/API/posts";

export default {
  name: "Home",
  components: {
    Carousel,
    SectionHeader,
    PostCard,
    SocialMedia,
    Brand
  },
  data() {
    return {
      igList: [],
      postsList: [],
      loading: false,
      msg: null
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

<style lang="less" scoped>
.home-page {
  .features {
    font-weight: 800;
    font-size: 14px;
    letter-spacing: 4px;
    .feature-wrapper {
      .img-container {
        img {
          width: 100%;
        }
      }
      .text-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // 背景
        background-color: #000;
        border: none;
        width: 60%;
        opacity: 0.85;
        // 文字
        color: #fff;
        padding: 12px 0;
      }
      &:hover {
        .text-overlay {
          opacity: 0.7;
        }
      }
    }
  }
  .instagram {
    .ig-body {
      width: 100%;
      display: flex;
      flex-direction: row;
      .image-container {
        width: 10%;
        height: 0;
        padding-bottom: 10%;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }

  .aside {
    .aside-body {
      .profile-card {
        .profile-avatar {
          .avatar-container {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
          }
        }
        .profile-intro {
          .name {font-weight: 600;}
          .bio {
            letter-spacing: 0px;
            font-size: 16px;
            font-family: "Noto Sans", "Noto Sans SC";
          }
        }
      }
    }
  }
}
</style>
