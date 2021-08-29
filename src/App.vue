<template>
  <div id="app">
    <LanguagePanel />
    <router-view />
  </div>
</template>

<script>
import LanguagePanel from '@/components/LanguagePanel'
export default {
  name: 'App',
  components: {
    LanguagePanel,
  },
}
</script>
