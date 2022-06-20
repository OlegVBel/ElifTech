<template>
  <section class="about">
    <div class="about__container">
      <h3 class="about__title">Мы знаем толк в дизайне!</h3>
      <div class="about__properties-wrapper">
        <div class="about__properties-item">
          <span class="about__item-title">6 лет</span>
          <p class="about__item-subtitle">В сфере рекламы</p>
        </div>
        <div class="about__properties-item">
          <span class="about__item-title">более 100</span>
          <p class="about__item-subtitle">Наших постоянных клиентов</p>
        </div>
        <div class="about__properties-item">
          <span class="about__item-title">+20%</span>
          <p class="about__item-subtitle">Конверсия продаж</p>
        </div>
        <div class="about__properties-item">
          <span class="about__item-title">-70%</span>
          <p class="about__item-subtitle">Ошибок менеджеров</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {Component, Vue} from "nuxt-property-decorator";

export default @Component({
  name: "About Block"
})
class about extends Vue{

}
</script>

<style>
@import "../assets/about.css";
</style>
