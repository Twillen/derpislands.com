<template>
  <div class="video">
    <!-- Add a placeholder for the Twitch embed -->
    <div id="twitch-embed"></div>
    <!-- Create a Twitch.Embed object that will render within the "twitch-embed" root element. -->
    <script type="application/javascript">
      new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channel: "{{channelName}}"
      });
    </script>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  props: {
    channelName: {
      default: "derpislands",
      type: String
    }
  }
});
</script>

<style lang="scss">
#router-view {
  align-items: stretch;
}
#twitch-embed {
  flex: 1;
}
</style>
