<template>
  <b-container fluid class="post-page">

    <b-row align-h="center">
      <b-col cols="12" md="10">
          <SectionHeader type="main" title="ARTICLE" />
          <!-- 封面图 -->

          <!-- 标题+info -->
          <article>
            <header>
              <div class="post-title">
                <h1>{{post.post_title}}</h1>
              </div>
              <div class="post-info"><span>December 21, 2019</span> <span>by Criss</span></div>
              <!-- <div class="post-cover-image">
                <div class="image-container" :style="{backgroundImage:'url(' + post.post_cover_image + ')'}">
  
                </div>
              </div> -->
            </header>
            <!-- 文章主体 -->
            <div class="post-content">
              <h4>Heading</h4>
              <p>Love the look of our Copenhagen tours, but feel like customising them to make exactly the tour you're looking for? Well, you're in the right place.  </p>
              <p>Put our team of local experts to work to build the perfect itinerary just for you. You can include some of the components of our regular tours, or none at all. This is your tour — so make it your own! If you're not sure, we've got plenty of ideas for what you might want to include. If you let our team of expert locals know your interests, they will come up with all kinds of things! </p>
              <h4>Highlights</h4>
              <li>Learn about the history and culture of Copenhagen with your own private guide by your side</li>
              <li>Tuck into Copenhagen's legendary food culture your way - take a Nordic cooking class or design a michelin starred itinerary to 'dine' for!</li>
              <li>Take a specially curated tour around local galleries and museums dedicated to Danish art and culture</li>
              <li>Take a Nordic-noir themed tour and see the sights of your favourite TV shows, such as The Bridge, Borgen and The Killing</li>
              <li>Get a true local experience as you explore Copenhagen’s neighbourhoods</li>
              <img :src="post.post_cover_image" alt="">
            </div>
          </article>
      </b-col>

      <!-- 可扩展为aside -->
      <!-- <b-col cols="12" lg="3">
      </b-col> -->
    </b-row>
  </b-container>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import axios from "axios";

export default {
  name: "Post",
  components: {
    SectionHeader,
  },
  data() {
    return {
      post_id: this.$route.params.id,
      post: null,
      loading: false,
      error: null,
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
    // window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    fetchData() {
      this.getPost();
    },

    getPost(){
      this.loading = true;
      axios
        .get('http://localhost:5000/api/v1/posts/'+this.post_id)
        .then(response => {
          if (response.data.success) {
            this.post = response.data.data;
            this.error = null;
          } else {
            this.error = response.data.message;
          }
        })
        .catch(error => this.error = error)
        .finally(() => this.loading=false)
    },
  },
}
</script>

<style lang="less" scoped>

article {
  text-align: left;
  letter-spacing: 0px;
  img{
    width: 100%;
  }
  header {
    margin-bottom: 35px;
    .post-title {
      text-transform: capitalize;
      margin-bottom: 10px;
      font-style: italic;
      font-family: 'Noto Serif', Helvetica, Tahoma, Arial,
      'Noto Serif SC', "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", serif;
    }
    .post-info {
      font-size: 14px;
      font-family: 'Noto Sans', Helvetica, Tahoma, Arial,
      'Noto Sans SC', "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", sans-serif;
    }
    .post-cover-image {
      .image-container {
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
  .post-content {

    // font-size: 16px;
    font-family: 'Noto Sans', Helvetica, Tahoma, Arial,
    'Noto Sans SC', "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", sans-serif;

  }
}


</style>