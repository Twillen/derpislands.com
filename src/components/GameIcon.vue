<template>
  <img :src="getGameIcon()" :alt="geGameAlt()" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
const images = require.context("../assets/game-icons/", false, /\.png$/);

@Component
export default class AuthorIcon extends Vue {
  @Prop() private game!: string;

  getGameIcon(): string {
    try {
      return images("./" + this.game.toLowerCase() + ".png");
    } catch (e) {
      return images("./not-found-game.png");
    }
  }
  geGameAlt(): string {
    return this.game + " icon ";
  }
}
</script>
<style lang="scss" scoped>
img {
  display: block;
  margin-right: 3ch;
  max-width: 150px;
  max-height: 150px;
  width: auto;
  height: auto;
  aspect-ratio: 1 /1;
  border-radius: 10px;
  background-color: black;
}
</style>
