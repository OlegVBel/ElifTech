<template>
  <div>
    <div class="modal">
      <div class="container modal__container">
        <h2 class="modal__title">Creating order of sushi</h2>
        <form action="#" class="modal__form">
          <div class="modal__form-wrapper">
            <div class="modal__form-item">
              <p class="modal__form-text">Name</p>
              <input type="text" id="name" class="modal__input input" placeholder="Enter your name">
            </div>
            <div class="modal__form-item">
              <p class="modal__form-text">Gmail</p>
              <input type="email" id="email" class="modal__input input" placeholder="Enter your email">
            </div>
            <select id="goods" class="modal__form-item modal__select">
              <option class="modal__option" value="">Select your sushi</option>
              <option class="modal__option" value="1">Sushi</option>
              <option class="modal__option" value="2">Roles</option>
              <option class="modal__option" value="3">Sushi set</option>
              <option class="modal__option" value="4">Sashimi</option>
              <option class="modal__option" value="5">Help</option>
            </select>
            <div class="modal__form-item">
              <p class="modal__form-text">Amount of item</p>
              <input type="number" min="1" id="quantity" class="modal__input input" placeholder="Enter quantity of your goods">
            </div>
          </div>
          <div class="modal__checkbox-wrapper">
            <p class="checkbox-text text">Should we call you for confirming your order</p>
            <input type="checkbox" class="modal__checkbox checkbox" value="Should we call you for confirming your order">
          </div>
          <div class="modal__btn-wrapper">
            <button type="submit" class="modal__btn btn">Create order</button>
            <button type="reset" class="modal__btn btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {Component, Vue} from "nuxt-property-decorator";

export default @Component({
  name: "modal"
})
class footer extends Vue{

}
</script>

<style >
@import "../assets/modal.css";
</style>
