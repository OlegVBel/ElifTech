<template>
  <div class="container">
    <router-view></router-view>
    <Header />
    <div class="switcher">
      <router-link to="/" >
        <button class="switcher__item-btn btn" >Go to first page</button>
      </router-link>
    </div>
    <About/>
    <Footer />
  </div>
</template>

<script>
import {Component, Vue} from "nuxt-property-decorator";

import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import About from "../components/about"

export default @Component({
  name: "SecondPage",
  components: {
    Header,
    Footer,
    About
  }
})

class SecondPage extends Vue{

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
