import Vue from 'vue'
import Vuex from 'vuex'
import { SET_CONFIG, SET_LOCALE, SET_LOCALE_ACTION } from './types'
import i18n from '@/plugins/i18n'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: null,
    locale: 'en',
  },
  mutations: {
    [SET_CONFIG](state, payload) {
      state.config = payload
    },
    [SET_LOCALE](state, locale) {
      state.locale = locale
    },
  },
  actions: {
    [SET_LOCALE_ACTION]({ commit }, locale) {
      commit(SET_LOCALE, locale)
      i18n.locale = locale
    },
  },
  modules: {},
})
