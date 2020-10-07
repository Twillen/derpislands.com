<template>
  <img :src="getAuthorIcon()" :alt="getAuthorAlt()" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
const images = require.context("../assets/user-icons/", false, /\.png$/);

@Component
export default class AuthorIcon extends Vue {
  @Prop() private author!: string;

  getAuthorIcon(): string {
    try {
      return images("./" + this.author.toLowerCase() + ".png");
    } catch (e) {
      return images("./not-found-user.png");
    }
  }
  getAuthorAlt(): string {
    return this.author + " icon ";
  }
}
</script>
<style lang="scss" scoped>
img {
  margin-right: 3ch;
  height: 60px;
  width: auto;
  border-radius: 35px;
  background-color: white;
}
</style>
