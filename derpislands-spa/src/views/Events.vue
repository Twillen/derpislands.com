<template>
  <div>
    <left-bar />
    <section class="events" v-if="events.length">
      <h1>Upcomming Events</h1>
      <event-post
        v-for="event in events"
        v-bind:key="event.id"
        v-bind:siteEvent="event"
      />
    </section>
    <section class="events" v-else>
      <h1>No Upcomming Events</h1>
      <article class="event-post">
        <div style="min-height: calc(500px - 5em)">
          Currently there are no events scheduled. New events are posted as we
          make plans. Stop back later to see when we're next grouping up.
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LeftBar from "@/components/LeftBar.vue";
import EventPost from "@/components/EventPost.vue";
import { SiteEvent } from "@/components/data-types/SiteEvent";

@Component({
  components: {
    LeftBar,
    EventPost
  }
})
export default class Events extends Vue {
  events = [];
  created() {
    fetch("/json-data/event-list.json")
      .then(r => r.json())
      .then(events => {
        this.events = events
          .filter((event: SiteEvent) => {
            const now = new Date();
            const start = new Date(event.start);
            const end = new Date(event.end);
            //invalid start time
            if (isNaN(start.getTime())) return;
            //remove past events
            if (now >= start && now >= end) return;
            return event;
          })
          .sort((event1: SiteEvent, event2: SiteEvent) => {
            const start1 = new Date(event1.start);
            const start2 = new Date(event2.start);
            const end1 = new Date(event1.end);
            const end2 = new Date(event2.end);
            //same start time, display event ending soonest first
            if (start1.getTime() === start2.getTime()) {
              //Return equal
              if (end1.getTime() === end2.getTime()) return 0;
              //event 1 comes first
              if (end1 > end2) return 1;
              //event 2 comes first
              return -1;
            }
            if (start1 > start2) return 1;
            return -1;
          });
      });
  }
}
</script>

<style lang="scss">
.events {
  h1 {
    margin: 0.5em 0;
  }
  padding: $defaultPadding;
  border-radius: 2em;
  background-image: url("../assets/section-backgrounds/derpislands-keep.png"),
    url("../assets/section-backgrounds/derpislands-keep-top.png");
  background-position: 200px 100%, 200px 100%;
  background-repeat: repeat-x, repeat;
  background-size: contain;
  background-attachment: fixed;
}
.event-post {
  h1 {
    margin-top: 0;
    span {
      margin-left: auto;
    }
  }
  margin-bottom: 1em;
  > div {
    display: flex;
    border: solid white 1px;
    padding: $defaultPadding;
    min-height: 100%;
    background-color: #55555599;
    &:first-of-type {
      padding-right: 4ch;
      border-top-right-radius: 4ch;
    }
    &:last-of-type {
      border-bottom-right-radius: 2ch;
    }
    div {
      margin-right: 2ch;
    }
    div:first-of-type {
      width: 20ch;
    }
    div:last-of-type {
      margin-right: 0;
      margin-left: auto;
      span {
        white-space: nowrap;
      }
    }
  }
}
@media screen and (max-width: 96ch) {
  .event-post {
    padding: 0;
    > div {
      flex-direction: column;
    }
    img {
      width: 20vw !important;
    }
  }
}
</style>
