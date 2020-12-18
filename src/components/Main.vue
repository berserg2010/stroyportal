<template>
  <main class="content">
    <div class="wrapper">
      <h1>Список товаров</h1>
      <ul class="products_list">
        <li v-for="item in productsList" :key="item.key">{{ item }}</li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Main',
  props: {
    productsList: {
      type: Array,
      require: true,
      default: () => []
    }
  },
}
</script>

<style scoped>

</style>
