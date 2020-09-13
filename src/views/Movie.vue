<template>
  <div>
    <b-card :title="dataFlm.title" sub-title="Info about movie">
      <b-card-text>
        {{dataFlm.opening_crawl}}
      </b-card-text>

      <b-card-text>Director - {{dataFlm.director}}.</b-card-text>
      <b-card-text>Producer - {{dataFlm.producer}}.</b-card-text>
    </b-card>

  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'Movie',
  components: {
    Footer
  },
  props:['slug'],
  data(){
      return {
          dataFlm : this.$store.getters.getFilmData,
          urlForFilm: localStorage.FilmUrl,
      }
  },
  created(){
    if (Object.keys(this.dataFlm).length === 0){
        this.dataFlm = this.loadFilmtData(this.urlForFilm);
      }
    },
  methods:{
    async loadFilmtData(url){
      this.dataFlm = await fetch(url).then(Response => Response.json());
    },
  },
}
</script>