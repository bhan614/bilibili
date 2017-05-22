<template>
  <div id="app">
    <TopContainer></TopContainer>
    <BHeader></BHeader>
    <BContent :rows="rows"></BContent>
    <BNavSide :options="this.nav" v-on:change="isShowMask"></BNavSide>
    <div class="wnd-mask" ref="mask" v-show="showMask"></div>
  </div>
</template>

<script>
import TopContainer from './TopContainer.vue'
import BHeader from './BHeader.vue'
import BContent from './components/content/Content.vue'
import BNavSide from './components/nav/NavSide.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    TopContainer,
    BHeader,
    BContent,
    BNavSide
  },
  data() {
    return {
      showMask: false,
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.$store.dispatch('getContentRows')
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'rows',
      'nav'
    ]),
    options() {
      let options = {
        offset: 150, //偏移的距离
        items: this.rows,
        offsetTop: 0 //距离顶部距离
      }
      return options
    }
  },
  methods: {
    isShowMask() {
      this.showMask = !this.showMask
    }
  }
}
</script>

<style lang="stylus">
  #app
    font-family "Microsoft YaHei",Arial,Helvetica,sans-serif
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
    font-size 12px
    margin 0
    padding 0
    background #fff
    color #222
    min-width 990px
    tap-highlight-color transparent
    -webkit-tap-highlight-color transparent
    .wnd-mask
      position fixed
      width 100%
      height 150%
      background-color #000
      opacity .5!important
      z-index 1000
      top 0px
      left 0px
      transition .2s
</style>
