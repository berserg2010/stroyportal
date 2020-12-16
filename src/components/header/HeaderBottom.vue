<template>
  <div class="header_bottom">
    <div class="wrapper">

      <Logo />

      <button><Menu />Каталог</button>

      <label for="search">Поиск</label>
      <input id="search" type="search" placeholder="Хочу найти..." />
      <Search />

      <button>Список</button>
      <List />

      <div class="user">
        <span>А</span>
      </div>


    </div>
  </div>
</template>

<script>
import Logo from '../../assets/img/logo.svg'
import Menu from '../../assets/img/menu.svg'
import Search from '../../assets/img/search.svg'
import List from '../../assets/img/list.svg'

export default {
  name: 'HeaderBottom',
  components: {
    Logo,
    Menu,
    Search,
    List,
  }
}
</script>

<style scoped>

</style>
