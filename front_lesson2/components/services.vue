<template>
  <section class="services">
    <div class="container">
      <h3 class="services__title">Наши услуги</h3>
      <div class="services__columns">

        <div class="services__columns-item">
          <div class="services__card">
            <p class="card__titel">Рекламные материалы</p>
            <ul class="card__pluses-list">
              <li class="card__pluses-item">Верстка макетов</li>
              <li class="card__pluses-item">Флаеры</li>
              <li class="card__pluses-item">Визитки</li>
              <li class="card__pluses-item">Брошюры</li>
              <li class="card__pluses-item">Листовки</li>
            </ul>
            <p class="card__price">от
              <span class="card__price-cful">2000 руб.</span>
            </p>
          </div>
          <button class="services__description-btn btn">Подробнее</button>
        </div>

        <div class="services__columns-item">
          <div class="services__card">
            <p class="card__titel">бренд дизайн</p>
            <ul class="card__pluses-list">
              <li class="card__pluses-item">Логотипы</li>
              <li class="card__pluses-item">Фирменный стиль</li>
              <li class="card__pluses-item">Айдентика</li>
              <li class="card__pluses-item">Концепция бренда</li>
              <li class="card__pluses-item">Гайдлайн</li>
            </ul>
            <p class="card__price">от
              <span class="card__price-cful">3000 руб.</span>
            </p>
          </div>
          <button class="services__description-btn btn">Подробнее</button>
        </div>

        <div class="services__columns-item">
          <div class="services__card">
            <p class="card__titel">дизайн вывесок	и рекламы</p>
            <ul class="card__pluses-list">
              <li class="card__pluses-item">Дизайн вывесок</li>
              <li class="card__pluses-item">Фотопривязки</li>
              <li class="card__pluses-item">Роллапы</li>
            </ul>
            <p class="card__price">от
              <span class="card__price-cful">3000 руб.</span>
            </p>
          </div>
          <button class="services__description-btn btn">Подробнее</button>
        </div>

        <div class="services__columns-item">
          <div class="services__card">
            <p class="card__titel">Digital Дизайн</p>
            <ul class="card__pluses-list">
              <li class="card__pluses-item">WEB дизайн</li>
              <li class="card__pluses-item">Креативы для рекламы</li>
              <li class="card__pluses-item">Презентации</li>
            </ul>
            <p class="card__price">от
              <span class="card__price-cful">5000 руб.</span>
            </p>
          </div>
          <button class="services__description-btn btn">Подробнее</button>
        </div>

        <div class="services__columns-item">
          <div class="services__card">
            <p class="card__titel">Smm</p>
            <ul class="card__pluses-list">
              <li class="card__pluses-item">Stories Instagram</li>
              <li class="card__pluses-item">Post instagram</li>
              <li class="card__pluses-item">Оформление аккаунта</li>
              <li class="card__pluses-item">Рекламные креативы</li>
              <li class="card__pluses-item">Оформление группы</li>
            </ul>
            <p class="card__price">от
              <span class="card__price-cful">1500 руб.</span>
            </p>
          </div>
          <button class="services__description-btn btn">Подробнее</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {Component, Vue} from "nuxt-property-decorator";

export default @Component({
  name: "services"
})
class services extends Vue{

}
</script>

<style >
@import "../assets/services.css";
</style>


