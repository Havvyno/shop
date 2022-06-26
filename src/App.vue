<template>
  <div id="app">
    <v-header/>
    <router-view/>
    <v-footer/>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import core from "@/assets/style/core.css"
import vHeader from "@/components/v-header.vue"
import vFooter from "@/components/v-footer.vue"

export default {
  name: 'App',
  components: {
    core,
    vHeader,
    vFooter
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    ...mapActions([
      'getProducts'
    ])
  }
}
</script>

<style>
  * {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
  }
</style>


