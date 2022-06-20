<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="footer__wrapper">
          <div class="footer__info">
            <img src="../static/logo.svg" alt="Food Bill logo" class="footer-logo">
            <p class="footer__info-text text">Lorem ipsum dolor
              sit consectetursadf sdfasdfasdf-asdfasdfasdf adgds
              adipiscing elit, sed
              do eiusmod tempor incididunt.</p>
            <div class="footer__info-icons icons">
              <ul class="icons__list">
                <li class="icons__list-item" tabindex="1">
                  <a href="#" class="icons__list-link">
                    <img src="../static/facebook.svg" alt="facebook" class="icons__list-img">
                  </a>
                </li>
                <li class="icons__list-item" tabindex="2">
                  <a href="#" class="icons__list-link">
                    <img src="../static/inst.svg" alt="instagram" class="icons__list-img">
                  </a>
                </li>
                <li class="icons__list-item" tabindex="3">
                  <a href="#" class="icons__list-link">
                    <img src="../static/twitter.svg" alt="twitter" class="icons__list-img">
                  </a>
                </li>
                <li class="icons__list-item" tabindex="4">
                  <a href="#" class="icons__list-link">
                    <img src="../static/in.svg" alt="in" class="icons__list-img">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul class="footer__blocks blocks">
            <li class="blocks__block">
              <p class="blocks__block-title">Opening Restaurant</p>
              <ul class="blocks__list-contacts contacts">
                <li class="contacts__item">
                  <p class="contacts__item-text text">Sa - We: 09:00am - 10:00pm</p>
                </li>
                <li class="contacts__item">
                  <p class="contacts__item-text text">Thursday: 09:00am - 05:00pm</p>
                </li>
                <li class="contacts__item">
                  <p class="contacts__item-text text">Friday: Closed</p>
                </li>
              </ul>
            </li>
            <li class="blocks__block">
              <p class="blocks__block-title">User Link</p>
              <ul class="blocks__list-contacts contacts">
                <li class="contacts__item-item">
                  <a href="#" class="contacts__item-link text">About Us</a>
                </li>
                <li class="contacts__item-item">
                  <a href="#" class="contacts__item-link text">Contact Us</a>
                </li>
                <li class="contacts__item-item">
                  <a href="#" class="contacts__item-link text">Order Delivery</a>
                </li>
                <li class="contacts__item-item">
                  <a href="#" class="contacts__item-link text">Payment & Tax</a>
                </li>
                <li class="contacts__item-item">
                  <a href="#" class="contacts__item-link text">Terms of Services</a>
                </li>
              </ul>
            </li>
            <li class="blocks__block">
              <p class="blocks__block-title">Contact Us</p>
              <ul class="blocks__list-contacts contacts">
                <li class="contacts__item">
                  <p class="contacts__item-text text">543 Country Club Ave</p>
                </li>
                <li class="contacts__item">
                  <p class="contacts__item-text text">NC 27587, London, UK</p>
                </li>
                <li class="contacts__item">
                  <p class="contacts__item-text text">+1259 6541120</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <hr>
        <div class="footer__copyright">
          <p class="footer__copyright-text">Copyright &copy; 2022 Food Bill All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {Component, Vue} from "nuxt-property-decorator";

export default @Component({
  name: "Foote"
})
class footer extends Vue{

}
</script>

<style >
@import "../assets/footer.css";
@import "../assets/footerBlocks.css";
@import "../assets/prodContent.css";
</style>
