import Vue from 'vue'
import Vuex from 'vuex'
import { catsModule } from "./cats.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    catsModule
  }
})
