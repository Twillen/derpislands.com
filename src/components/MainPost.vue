<template>
  <article class="main-post" v-bind:id="post.id">
    <header>
      <author-icon v-bind:author="post.author" />
      <div>
        <h1 v-text="post.title" />
        <h2>
          Posted by {{ post.auther }} <br />
          On {{ formatedDate() }}
        </h2>
      </div>
    </header>
    <p v-html="post.text" />
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Post } from "@/components/data-types/Post";
import AuthorIcon from "@/components/AuthorIcon.vue";

@Component({
  components: {
    AuthorIcon
  }
})
export default class MainPost extends Vue {
  @Prop() private post!: Post;
  formatedDate(): string {
    const date: Date = new Date(this.post.date);
    if (date === null) {
      return "";
    }
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }
}
</script>

<style lang="scss">
.main-post {
  background-color: #262929e0;
  margin-bottom: 2em;
  border-radius: 1em;
  box-shadow: 10px 10px 15px #766969;
  min-height: 13em;
  header {
    display: flex;
    padding: $defaultPadding;
    border-bottom: solid black thick;
    img {
      margin-right: 3ch;
      height: 60px;
      width: auto;
      border-radius: 35px;
      background-color: white;
    }
    h1,
    h2 {
      margin: 0 auto;
    }
    h1 {
      font-size: 1.5em;
    }
    h2 {
      font-size: 1em;
    }
  }
  > p {
    padding: 0 4ch 2em 4ch;
  }
}
</style>
