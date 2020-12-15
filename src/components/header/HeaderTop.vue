<template>
  <div class="header_top">
    <div class="wrapper">
      <div class="location">
        <Point />
        <span class="location__text">Волгоградская область</span>
      </div>

      <ul class="top-menu">
        <li>Тендеры</li>
        <li>База подрядчиков</li>
        <li class="">Другие сервисы</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Point from '/src/assets/img/point.svg'

export default {
  name: 'HeaderTop',
  components: {
    Point,
  },
}
</script>

<style scoped>

</style>
