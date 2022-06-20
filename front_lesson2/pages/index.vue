<template>
  <div class="container">
    <router-view></router-view>
    <Header />
    <div class="switcher">
      <router-link :to="{name: 'second-page'}" >
        <button class="switcher__item-btn btn" >Go to second page</button>
      </router-link>
    </div>
    <Modal />
    <Services />
    <Footer />
  </div>
</template>

<script>
import {Component, Vue} from "nuxt-property-decorator";

import Header from "../components/header.vue";
import Modal from "../components/modal.vue";
import Footer from "../components/footer.vue";
import Services from "../components/services";

export default @Component({
  name: "FirsPage",
  components: {
    Header,
    Modal,
    Footer,
    Services
  }
})

class FirstPage extends Vue{

}
</script>

<style>
@import "../assets/default.css";
@import "../assets/normalize.css";
.switcher{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
}
</style>
