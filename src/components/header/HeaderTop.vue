<template>
  <div class="header_top">
    <div class="wrapper">
      <div class="location">
        <Point />
        <span class="location__text">Волгоградская область</span>
      </div>

      <nav class="top-menu">
        <ul>
          <li>Тендеры</li>
          <li>База подрядчиков</li>
          <li class="">Другие сервисы<ArrowBottom class="arrow-bottom" /></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Point from '../../assets/img/point.svg'
import ArrowBottom from '../../assets/img/arrow_bottom.svg'

export default {
  name: 'HeaderTop',
  components: {
    Point,
    ArrowBottom,
  },
}
</script>

<style scoped>

</style>
