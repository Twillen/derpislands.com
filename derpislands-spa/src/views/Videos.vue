<template>
  <div class="about">
    <left-bar v-bind:show-discord="false" v-bind:show-video="true" />
    <section id="VideoMain">
      <article class="main-post">
        <header>
          <author-icon :author="'DerpIslands'" />
          <div>
            <h1>
              Newest DerpIslandServer Video
            </h1>
            <h2>
              <a href="https://www.youtube.com/channel/UClQ-BYe1Z7KPHZRgYHozQVA"
                >Check our channel out</a
              >
            </h2>
          </div>
        </header>
        <p>
          <iframe
            src="https://www.youtube.com/embed?max-results=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;listType=user_uploads&amp;list=DerpIslandServer"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </p>
        <p>
          Check out our members Youtube and Twitch channels.
        </p>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LeftBar from "@/components/LeftBar.vue";
import AuthorIcon from "@/components/AuthorIcon.vue";

export default Vue.extend({
  components: {
    LeftBar,
    AuthorIcon
  }
});
</script>

<style lang="scss" scoped>
#VideoMain {
  a {
    color: white;
    &:visited {
      color: #d0d0d0;
    }
  }
  p {
    iframe {
      display: block;
      margin: 0 auto;
      height: 325px;
      width: 577px;
      max-width: 100%;
      aspect-ratio: 16/9;
    }
  }

  background-color: #b2d1e0;
  background-image: url("../assets/section-backgrounds/derp-farm.png");
  background-position: bottom right;
  background-repeat: repeat-x;
  background-size: contain;
  background-attachment: fixed;
  border-radius: 1em;
}
</style>
