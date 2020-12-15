<template>
  <header>
    <HeaderTop />
    <HeaderBottom />
  </header>
</template>

<script>
import HeaderTop from './HeaderTop.vue'
import HeaderBottom from './HeaderBottom.vue'

export default {
  name: 'Header',
  components: {
    HeaderTop,
    HeaderBottom,
  }
}
</script>

<style scoped>

</style>
