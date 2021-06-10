<template>
  <div class="about">
    <left-bar v-bind:show-paypal="true" />
    <section id="AboutPage">
      <img src="../assets/derpcon-1-250.png" />
      <h1>Welcome to Derpislands.com</h1>
      <p>
        This is the home of a group of friends that play games together. Back in
        2011 the core group met while playing Minecraft and came together and
        built a fairly sizable island called DerpIsland. From there we continued
        to grow and built our own Minecraft Server together.
      </p>
      <p>
        Today our minecraft server has been neglected and retired, but we'll
        from time to time spinn up a snapshot and play from scratch again. We
        also play other games including Final Fantasy 14, Destiny 2, Terraria,
        Among Us, along with other multiplayer games.
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LeftBar from "@/components/LeftBar.vue";
export default Vue.extend({
  components: {
    LeftBar
  }
});
</script>

<style lang="scss" scoped>
#AboutPage {
  img {
    float: right;
  }
  width: 100%;
  color: rgb(24, 18, 18);
  border-radius: 2em;
  padding: $defaultPadding;
  background-color: rgba($color: #8eaedc, $alpha: 0.75);
  padding-bottom: 225px;
  background-image: url("../assets/section-backgrounds/pyramid.png"),
    url("../assets/section-backgrounds/pyramid-top.png");
  background-position: bottom right 80%, top right 80%;
  background-repeat: repeat-x, repeat;
}
</style>
