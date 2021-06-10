<template>
  <article id="YouTubePlayer" class="main-post">
    <header>
      <img
        src="https://yt3.ggpht.com/a/AATXAJxfCoDU3fp5Fh278soD_bkt800e79XYgUyBzdMA=s100-c-k-c0xffffffff-no-rj-mo"
        alt="DerpIslands YouTube"
      />
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
  </article>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<!--- Assumes .main-post is also being dislayed --->
<style lang="scss" scoped>
#YouTubePlayer {
  a {
    color: white;
    &:visited {
      color: #d0d0d0;
    }
  }
  p {
    text-align: center;
    padding: 0 10%;
    margin: 5px;
    iframe {
      height: 325px;
      width: 577px;
      max-width: 100%;
      aspect-ratio: 16/9;
    }
  }
}
</style>
