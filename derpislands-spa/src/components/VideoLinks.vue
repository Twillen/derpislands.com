<template>
  <div id="channel-links">
    <h1>Youtube Channels</h1>
    <a
      v-for="profile in youtube"
      :key="profile.author + 'youtube'"
      :href="'https://www.youtube.com/channel/' + profile.channel"
      target="_blank"
    >
      <author-icon v-bind:author="profile.author" />{{ profile.author }}</a
    >
    <h1>Twitch Channels</h1>
    <a
      v-for="profile in twitch"
      :key="profile.author + 'twitch'"
      :href="'https://www.twitch.tv/' + profile.channel"
      target="_blank"
    >
      <author-icon v-bind:author="profile.author" />{{ profile.author }}</a
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthorIcon from "@/components/AuthorIcon.vue";
import { User } from "@/components/data-types/User.ts";

@Component({
  components: {
    AuthorIcon
  }
})
export default class VideoLinks extends Vue {
  data() {
    return {
      youtube: [{ author: "DerpIslands", channel: "UClQ-BYe1Z7KPHZRgYHozQVA" }],
      twitch: [{ author: "DerpIslands", channel: "derpislands" }]
    };
  }
  created() {
    fetch("/json-data/video-channels.json")
      .then(r => r.json())
      .then(users =>
        users.forEach((user: User) => {
          if (user.youtube) {
            this.$data.youtube.push({
              author: user.username,
              channel: user.youtube
            });
          }
          if (user.twitch) {
            this.$data.twitch.push({
              author: user.username,
              channel: user.twitch
            });
          }
        })
      );
  }
}
</script>

<style lang="scss" scoped>
#channel-links {
  background-image: url("../assets/section-backgrounds/pillar.png");
  background-size: contain;
  background-attachment: fixed;
  border: #101010 solid 2px;
  margin-bottom: 2em;
  border-radius: 1em;
  box-shadow: 10px 10px 10px rgb(73, 66, 66);
  min-height: 13em;
  height: 100%;
  h1:first-child {
    margin-top: 0;
    padding-top: 1em;
  }
  h1 {
    text-align: center;
  }
  img {
    vertical-align: middle;
  }
  a {
    display: inline-block;
    margin: 0.5em 1ch;
    color: white;
    :visited {
      color: blanchedalmond;
    }
  }
}
</style>
