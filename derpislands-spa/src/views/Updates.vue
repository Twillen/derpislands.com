<template>
  <div class="home">
    <left-bar />
    <section id="MainContent">
      <main-post
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainPost from "@/components/MainPost.vue";
import LeftBar from "@/components/LeftBar.vue";
import { Post } from "@/components/data-types/Post";
const now = new Date();

@Component({
  components: {
    MainPost,
    LeftBar
  }
})
export default class Updates extends Vue {
  posts = [];
  created() {
    fetch("/json-data/updates.json")
      .then(r => r.json())
      .then(posts => {
         this.posts = posts.filter((post: Post) => {
          const start = new Date(post.date);
          //Hide future posts
          if (now < start) return false;
          return post;
        })
        .sort((post1: Post, post2: Post) => {
          const date1 = new Date(post1.date);
          const date2 = new Date(post2.date);
          if (date1 > date2) return -1;
          if (date1 < date1) return 1;
          return 0;
        });
      });
  }
}
</script>

<style scoped lang="scss">
#MainContent {
  padding: $defaultPadding;
  background-color: #8fa8f2;
  background-image: url("../assets/section-backgrounds/docks.png");
  background-position: bottom right;
  background-repeat: repeat-x;
  background-size: contain;
  background-attachment: fixed;
  border-radius: 1em;
}
</style>
