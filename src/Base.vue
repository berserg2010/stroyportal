<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/header/index.vue'
import Main from './components/Main.vue'

export default {
  name: 'Base',
  components: {
    Main,
    Header,
  }
}
</script>

<style lang="scss">
@import 'assets/scss/main.scss';
</style>
