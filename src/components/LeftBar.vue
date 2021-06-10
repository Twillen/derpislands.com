<template>
  <section id="LeftBar">
    <div v-if="showDiscord">
      <iframe
        id="discord"
        src="https://discordapp.com/widget?id=708855225640812638&theme=dark"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
    <div v-if="showPaypal" id="paypal">
      <h1>PayPal Donation</h1>
      <form
        v-bind:action="
          isDevelopment()
            ? 'https://www.sandbox.paypal.com/cgi-bin/webscr'
            : 'https://www.paypal.com/cgi-bin/webscr'
        "
        method="post"
      >
        <input
          type="hidden"
          name="business"
          v-bind:value="
            isDevelopment()
              ? 'mrk.ma_1326168080_per@gmail.com'
              : 'XD5KCRC3EQX9Q'
          "
        />
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="lc" value="US" />
        <input type="hidden" name="item_name" value="DerpIslandDonations" />
        <input type="hidden" name="item_number" value="NewSiteDonation" />

        <input type="hidden" name="currency_code" value="USD" />
        <input type="hidden" name="currency_code" value="USD" />
        <input
          type="hidden"
          name="bn"
          value="PP-DonationsBF:btn_donateCC_LG.gif:NonHosted"
        />
        Enter your Amount:
        <br />
        <input
          type="number"
          min="0.00"
          max="10000.00"
          step="0.01"
          name="amount"
          size="10"
          value=""
        />
        <br />
        Entered Value in USD
        <br />
        <br />
        <input
          type="image"
          src="https://www.sandbox.paypal.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
        <img
          alt=""
          border="0"
          src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
    <video-links v-if="showVideo" />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VideoLinks from "@/components/VideoLinks.vue";

@Component({
  components: {
    VideoLinks
  }
})
export default class LeftBar extends Vue {
  @Prop({ default: true }) showDiscord!: boolean;
  @Prop({ default: false }) showPaypal!: boolean;
  @Prop({ default: false }) showVideo!: boolean;

  isDevelopment() {
    return process.env.NODE_ENV === "development";
  }
}
</script>

<style lang="scss">
#LeftBar {
  flex: 0 0 250px;
  padding-right: 1ch;
  + section {
    flex: 1;
    max-width: 100%;
  }
  > div {
    margin: 0 auto 1em auto;
  }
  #discord {
    height: 500px;
    width: 100%;
  }
  #paypal {
    h1 {
      margin: 0.25em 0 0.5em 0;
      padding: 0.5em 2ch;
      border-bottom: white solid 2px;
    }
    padding-bottom: 1em;
    text-align: center;
    background-color: #505050dd;
    border: black solid 1px;
    border-radius: 2em;
    background-image: url("../assets/mc-layout/block-tree.png");
    background-size: cover;
  }
}
</style>
