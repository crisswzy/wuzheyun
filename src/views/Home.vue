<template>
  <b-container fluid class="home-page">
    <!-- 图片轮播 -->
    <b-row no-gutters class="mb-4">
      <b-col cols="12">
        <Carousel/>
      </b-col>
    </b-row>
    <!-- Features-->
    <b-row no-gutters class="features mb-5">
      <b-col class="feature-wrapper mr-5">
        <a href="">
          <div class="img-container">
            <img src="../assets/images/it.jpg" alt="it">
          </div>
          <div class="text-overlay">IT</div>
        </a>
      </b-col>
      <b-col class="feature-wrapper mr-5">
        <a href="">
          <div class="img-container">
            <img src="../assets/images/coffee.jpg" alt="coffee">
          </div>
          <div class="text-overlay">LIFE</div>
        </a>
      </b-col>
      <b-col class="feature-wrapper">
        <a href="">
          <div class="img-container">
            <img src="../assets/images/design.jpg" alt="design">
          </div>
          <div class="text-overlay">DESIGN / ART</div>
        </a>
      </b-col>
    </b-row>
    <!-- 主要内容 -->
    <b-row class="content">
      <b-col cols="12" md="8" class="mb-5">
        <!-- 主栏 -->
        <section class="main">
          <SectionHeader type="main" title="THE LATEST" />
          <div class="main-body">
            <!-- 渲染一张一张PostCard -->
            <PostCard v-for="post in postsList" :key="post.post_id" v-bind:post="post" />
            <h6 class="text-right" style="letter-spacing: 4px;"><router-link to="/posts">MORE >>></router-link></h6>
            <!-- if数据获取时出错 -->
            <div>
              <p v-if="loading">Loading...</p>
              <p v-if="error">{{error}}</p>
            </div>
          </div>
        </section>
      </b-col>

      <!-- 侧栏 -->
      <b-col cols="12" md="4" class="mb-5">
        <aside class="aside">
          <SectionHeader type="aside" title="ABOUT" />
          <div class="aside-body">
            <section class="profile mb-3">
              <b-row no-gutters class="profile-card d-flex">
                <b-col cols="12" class="profile-avatar d-flex justify-content-center py-3">
                  <div class="avatar-container">
                    <img src="../assets/avatar.jpg" style="width:100%; height:100%;" alt="profile-photo">
                  </div>
                </b-col>
                <b-col cols="12" class="profile-intro d-flex flex-column py-2">
                  <h5 class="name">吴哲耘</h5>
                  <span class="bio">
                    ~ 𝙱𝚊𝚜𝚎 𝚒𝚗 𝚂𝚑𝚊𝚗𝚐𝚑𝚊𝚒
                    <br>> 𝚃𝚊𝚖𝚔𝚊𝚗𝚐 𝚄𝚗𝚒𝚟𝚎𝚛𝚜𝚒𝚝𝚢, 𝚃𝚊𝚒𝚠𝚊𝚗
                    <br>> 𝚂𝚝𝚘𝚌𝚔𝚑𝚘𝚕𝚖 𝚄𝚗𝚒𝚟𝚎𝚛𝚜𝚒𝚝𝚢, 𝚂𝚠𝚎𝚍𝚎𝚗
                    <br># 𝙲𝚘𝚏𝚏𝚎𝚎 𝙰𝚏𝚒𝚌𝚒𝚘𝚗𝚊𝚍𝚘
                    <br># 𝙽𝚘𝚛𝚍𝚒𝚌 / 𝚃𝚛𝚊𝚟𝚎𝚕 / 𝙼𝚞𝚜𝚒𝚌
                    <!-- Base in Shanghai
                    <br> Design / Coffee / Music
                    <br> Tamkang University, Taiwan
                    <br> Stockholm University, Sweden -->
                  </span>
                </b-col>
                <b-col cols="12 py-2">
                  <SocialMedia/>
                </b-col>
              </b-row>
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
import axios from "axios";

export default {
  name: "Home",
  components: {
    Carousel,
    SectionHeader,
    PostCard,
    SocialMedia
  },
  data() {
    return {
      postsList: [],
      loading: false,
      error: null,
      limit: 5,
      offset: 0,
    };
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
    // window.addEventListener('scroll', this.onScroll);
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.getPostsList();
    },

    getPostsList(){
      this.loading = true;
      axios
        .get('http://localhost:5000/api/v1/posts')
        .then(response => {
          if (response.data.success) {
            this.postsList = response.data.data.items;
            this.error = null;
          } else {
            this.error = response.data.message;
          }
        })
        .catch(error => this.error = error)
        .finally(() => this.loading=false)
    },
  },
};
</script>

<style lang="less" scoped>
.home-page {
  .features {
    letter-spacing: 4px;
    .feature-wrapper {
      .img-container {
        // width: 100%;
        // height: 0;
        // padding-bottom: 66.666%;
        // overflow: hidden;
        
        // background-size: cover;
        // background-position: center;
        // background-repeat: no-repeat;
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
          .bio {
            letter-spacing: 0px;
            font-size: 16px;
            font-family: 'Noto Sans', Helvetica, Tahoma, Arial,
            'Noto Sans SC', "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", sans-serif;
          }
        }
      }
    }

  }

}
</style>