<template>
  <div class="header_bottom">
    <div class="wrapper">

      <Logo />

      <button class="menu-button"><Menu />Каталог</button>

      <label for="search" class="visually-hidden">Поиск</label>
      <div class="search-wrapper">
        <input v-model="search" id="search" type="search" name="search" placeholder="Хочу найти..." autocomplete="off" />
        <Search class="search-icon"/>
      </div>
      <div class="search_item">
        <select v-model="selected">
          <option v-for="option in options" :key="option.key" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>

      <button class="list-button"><List class="list-icon"/>Список</button>

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
