<template>
  <div>
    <Header />
    <Main :products-list="productsList" />
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
  },
  data() {
    return {
      products: [],
    }
  },
  computed: {
    productsList() {
      return this.$store.getters.PRODUCTS
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/main.scss';
</style>
