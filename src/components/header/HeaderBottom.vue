<template>
  <div class="header_bottom">
    <div class="wrapper">

      <Logo />

      <button class="menu-button"><Menu />Каталог</button>

      <div class="search-wrapper">
        <label for="search" class="visually-hidden">Поиск</label>
        <input
          v-model="search"
          v-on:input="onChange"
          id="search"
          type="search"
          name="search"
          placeholder="Хочу найти..."
          autocomplete="off"
        />
        <Search class="search-icon"/>
      </div>

      <button class="list-button"><List class="list-icon"/>Список</button>

      <div class="user">
        <span>А</span>
      </div>

    </div>
  </div>
</template>

<script>
import Logo from 'img/logo.svg'
import Menu from 'img/menu.svg'
import Search from 'img/search.svg'
import List from 'img/list.svg'


export default {
  name: 'HeaderBottom',
  components: {
    Logo,
    Menu,
    Search,
    List,
  },
  data() {
    return {
      search: '',
    }
  },
  methods: {
    onChange() {
      this.$store.commit('updateSearchProduct', this.search)
    }
  }
}
</script>

<style scoped>

</style>
