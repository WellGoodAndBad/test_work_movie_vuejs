<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/">Home Page</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~bootstrap';
@import '~bootstrap-vue';
body {
    background-image: url(https://img2.akspic.com/image/41282-film_poster-leisure-sky-water-stormtrooper-3840x2160.jpg);
    background-size: cover; 
    background-repeat: no-repeat;
};

</style>
