<template>
  <div class="header_bottom">
    <div class="wrapper">

      <Logo />

      <button>Каталог</button>

      <label for="search">Поиск</label>
      <input id="search" type="search" placeholder="Хочу найти..." />

      <button>Список</button>

      <div class="user">
        <span>А</span>
      </div>


    </div>
  </div>
</template>

<script>
import Logo from '/src/assets/img/logo.svg'

export default {
  name: 'HeaderBottom',
  components: {
    Logo,
  }
}
</script>

<style scoped>

</style>
