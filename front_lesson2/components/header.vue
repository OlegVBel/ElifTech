<template>
  <header class="product__header header" id="header">
    <a href="index.html" class="header__item logo">
      <img src="../static/logo.svg" alt="Food Bill">
    </a>
    <nav class="header__item nav">
      <ul class="nav__list">
        <li class="nav__list-item">
          <a href="#" class="nav__list-link">Home</a>
        </li>
        <li class="nav__list-item">
          <a href="#" class="nav__list-link">How to work</a>
        </li>
        <li class="nav__list-item">
          <a href="#" class="nav__list-link">Services</a>
        </li>
        <li class="nav__list-item">
          <a href="#" class="nav__list-link">Product</a>
        </li>
      </ul>
    </nav>
    <button class="header__item header-btn"><span class="crossed-text">Register</span></button>
  </header>
</template>

<script>
import {Component, Vue} from "nuxt-property-decorator";

export default @Component({
  name: "Header"
})
class Header extends Vue{

}
</script>

<style>
@import "../assets/header.css";
</style>
