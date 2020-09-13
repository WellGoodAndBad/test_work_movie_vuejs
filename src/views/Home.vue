<template>
  <div class="home">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="picUrl">
      <div class="card-body">
        <h5 class="card-title">{{peopleData.name}}</h5>
        <p class="card-text">Home world - {{planetData.name}}</p>
        <p class="card-text">Gender - {{peopleData.gender}}</p>
        <p class="card-text">Berth year - {{peopleData.birth_year}}</p>
        <p class="card-text">Height - {{peopleData.height}}</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Movie with character</h5>
        <div class="card-body" v-for="filmData in filmsData">
          <a href="" @click="goTo(filmData)" class="card-link">{{filmData.title}}</a>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer
  },
  props: {
    
  },
  data(){
      return {
        peopleData: "",
        planetUrl: "",
        planetData: "",
        filmsData: [],
        picUrl: this.$store.getters.getPicUrl,
        }
    },
  created(){
    this.loadPeopleData()

  },
  methods: {
    async loadPeopleData(){
      this.peopleData = await fetch(`${this.$store.getters.getUrlPeole}/people/1/`).then(Response => Response.json());

      this.planetUrl = this.peopleData.homeworld;
      this.loadPlanetData(this.planetUrl);

      var filmsUlrs = this.peopleData.films;
      for (var filmUrl in filmsUlrs){
          this.loadfilmData(filmsUlrs[filmUrl]);
        };
    },
    async loadPlanetData(url){
      this.planetData = await fetch(url).then(Response => Response.json());
    },
    async loadfilmData(url){
      var filmData = await fetch(url).then(Response => Response.json());
      this.filmsData.push(filmData);
    },
    goTo(filmData){
      var slug = filmData.title.replace(/\s/g, '');
      this.$store.state.filmData = filmData;
      localStorage.FilmUrl = filmData.url;
      this.$router.push({name: 'Movie', params: {slug: slug}});
      
    },

  },
}
</script>
