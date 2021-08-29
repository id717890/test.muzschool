<template>
  <div id="nav">
    <button class="lang-btn btn btn-success me-2" @click="setLocale('ru')">
      {{ $t('language.ru') }}
    </button>
    <button
      class="lang-btn btn btn-warning text-white"
      @click="setLocale('en')"
    >
      {{ $t('language.en') }}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { SET_LOCALE_ACTION } from '@/store/types'
export default {
  name: 'LanguagePanel',
  methods: {
    ...mapActions([SET_LOCALE_ACTION]),
    setLocale(locale) {
      this[SET_LOCALE_ACTION](locale)
    },
  },
}
</script>
