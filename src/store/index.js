import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UrlPeople: "http://swapi.dev/api",
    PicUrl: "https://vignette.wikia.nocookie.net/rustarwars/images/f/f0/%D0%A1%D1%82%D0%B0%D1%80%D1%8B%D0%B9_%D0%9B%D1%8E%D0%BA.png/revision/latest?cb=20161213171438",
    filmData: {},
    UrlsFilms: {},
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getUrlPeole: state => {
      return state.UrlPeople
    },
    getFilmData: state => {
      return state.filmData
    },
    getUlsFilms: state => {
      return state.UrlsFilms
    },
    getPicUrl: state => {
      return state.PicUrl
    }
  }
})
