<template>
  <article class="event-post" v-bind:id="siteEvent.id">
    <div>
      <div v-html="siteEvent.name" />
      <div>Location: <span v-html="siteEvent.location" /></div>
      <div v-html="startLocalText" />
    </div>
    <div>
      <div>
        <game-icon :game="siteEvent.game" />
      </div>
      <div>
        <span v-html="siteEvent.description" />
      </div>
      <div>
        <p v-if="startsInText" v-html="startsInText"></p>
        <p v-if="durationText" v-html="durationText"></p>
        <p v-if="endingText" v-html="endingText"></p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { SiteEvent } from "@/components/data-types/SiteEvent";
import GameIcon from "@/components/GameIcon.vue";

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

@Component({
  components: {
    GameIcon
  },
  data: function() {
    return {
      startLocalText: "test text",
      startsInText: null,
      durationText: null,
      endingText: null,
      timer: null
    };
  },
  filters: {}
})
export default class AuthorIcon extends Vue {
  @Prop() private siteEvent!: SiteEvent;

  created() {
    this.$data.startsInText = this.getTimeToStart();
    this.$data.durationText = this.getDuration();
    this.$data.startLocalText = this.getStartText();
    this.$data.endingText = this.getEndingIn();
    this.$data.timer = setInterval(() => {
      this.$data.startsInText = this.getTimeToStart();
      this.$data.durationText = this.getDuration();
      this.$data.endingText = this.getEndingIn();
    }, _minute / 2);
  }
  beforeDestroy() {
    clearInterval(this.$data.timer);
  }

  getStartText() {
    const eventStart = new Date(this.siteEvent.start);
    return eventStart.toLocaleString();
  }
  getTimeToStart() {
    const now = new Date();
    const eventStart = new Date(this.siteEvent.start);
    const datespan = this.dateSpan(now, eventStart);
    if (datespan == null) return "";
    return (
      "The event is starting in:<br>" +
      datespan.days +
      " <span>days</span>, " +
      datespan.hours +
      "<span>hours</span>, " +
      datespan.minutes +
      "<span>minute</span>"
    );
  }
  getDuration() {
    const eventStart = new Date(this.siteEvent.start);
    const eventEnd = new Date(this.siteEvent.end);
    const datespan = this.dateSpan(eventStart, eventEnd);
    if (datespan == null) return "";
    return (
      "The event lasts:<br>" +
      datespan.days +
      " <span>days</span>, " +
      datespan.hours +
      "<span>hours</span>, " +
      datespan.minutes +
      "<span>minute</span>"
    );
  }

  getEndingIn() {
    const now = new Date();
    const eventEnd = new Date(this.siteEvent.end);
    const datespan = this.dateSpan(now, eventEnd);
    if (datespan == null) return "";
    return (
      "The event is ending in:<br>" +
      datespan.days +
      " <span>days</span>, " +
      datespan.hours +
      "<span>hours</span>, " +
      datespan.minutes +
      "<span>minute</span>"
    );
  }

  private dateSpan(start: Date, end: Date) {
    const time = end.getTime() - start.getTime();
    if (isNaN(time)) return;
    if (time <= 0) return;
    const days = Math.floor(time / _day);
    const hours = Math.floor((time % _day) / _hour);
    const minutes = Math.floor((time % _hour) / _minute);
    const seconds = Math.floor((time % _minute) / _second);
    return { days: days, hours: hours, minutes: minutes, seconds: seconds };
  }
}
</script>
