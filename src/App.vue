<template>
  <div id="app">
    <div id="banner">
      <img alt="Vue logo" src="./assets/mc-layout/DerpBanner.png" />
    </div>
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/updates">Updates</router-link>
      <router-link to="/events">Events</router-link>
      <router-link class="ender" to="/videos">Videos</router-link>
    </nav>
    <router-view id="router-view" />
    <footer></footer>
  </div>
</template>

<style lang="scss">
html,
body {
  min-height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: $bgColor1;
  color: white;
  line-height: 1.25em;
}
#app {
  min-height: 100vh;
  width: 90%;
  margin: 5px auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  background-image: url("./assets/mc-layout/dchunk.png");
  background-position: top left;
  background-repeat: repeat;
  box-shadow: 20px 20px 10px rgb(73, 66, 66);
  #banner {
    height: 150px;
    overflow: hidden;
    img {
      margin-left: 50%;
      transform: translateX(-50%);
    }
    background: linear-gradient(
      to right,
      $bgColor1,
      $bgColor2,
      $bgColor2,
      $bgColor1
    );
  }
  #nav {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: stretch;
    padding: 0 $defaultPaddingLeftRight 1em $defaultPaddingLeftRight;
    a {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      min-width: 12ch;
      min-height: 4em;
      margin: 0 2ch 0 0;
      padding: 1em 2ch 0.75em 2ch;
      line-height: 1.5em;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      color: #dde0f0;
      background: url("./assets/mc-layout/mc-chest-closed.png");
      background-position: bottom;
      background-size: contain;
      background-repeat: no-repeat;
      &.router-link-exact-active {
        color: #040427;
        background: url("./assets/mc-layout/mc-chest-open.png");
        background-position: bottom;
        background-size: contain;
        background-repeat: no-repeat;
      }
      &.ender {
        color: white;
        &.router-link-exact-active {
          color: rgb(253, 201, 201);
          background: url("./assets/mc-layout/mc-chest-ender-open.png");
          background-position: bottom;
          background-size: contain;
          background-repeat: no-repeat;
        }
        background: url("./assets/mc-layout/mc-chest-ender-closed.png");
        background-position: bottom;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
    background-image: url("./assets/mc-layout/dgrass.png"),
      url("./assets/mc-layout/ddirt.png");
    background-repeat: repeat-x, repeat;
    background-position: 0 0, bottom left;
  }
  #router-view {
    display: flex;
    flex-grow: 3;
    align-items: stretch;
    padding: $defaultPadding;
    flex-wrap: wrap-reverse;
    img {
      max-width: 100%;
    }
  }
  footer {
    min-height: 10em;
    background-image: url("./assets/mc-layout/dbed.png");
    background-repeat: repeat-x;
    background-position: bottom left;
  }
  #nav {
    @media screen and (min-height: 35em) {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
    }
    @media screen and (max-width: 96ch) {
      justify-content: space-evenly;
      a {
        padding: 1em 0.5ch 0.75em 0.5ch;
        min-width: 25vw;
      }
    }
  }
}
</style>
