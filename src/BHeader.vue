<template>
  <div class="header" style="background-image: url('//i0.hdslb.com/bfs/archive/57c5ced363be9f08b4cacf1745e221d3bb99d7c5.png');">
  	<div class="header-layer"></div>
  	<a class="header-link" @mouseover='isShowTitle' @mouseout="isShowTitle" target="_blank" href="http://www.bilibili.com" data-loc-id="142"></a>
  	<div class="h-center">
  		<a href="/" class="logo" style="background-image: url('//i0.hdslb.com/bfs/archive/58d322146cb4b1685a5775478b9753f96a0c2ff6.png');"></a>
  		<div ref="bannerTitle" :class="showTitle ? 'banner-title show' : 'banner-title' ">哔哩哔哩 (゜-゜)つロ 干杯~</div>
      <search class="msearch"></search>
  	</div>
    <BMenu></BMenu>
  </div>
</template>

<script>
import Search from './components/common/Search.vue'
import BMenu from './BMenu'
export default {
  data() {
    return {
      showTitle: false
    }
  },
  components: {
    Search,
    BMenu
  },
  methods: {
    isShowTitle() {
      this.showTitle = !this.showTitle
    }
  }
}
</script>

<style lang="stylus">
 .header
    background transparent no-repeat center -10px
    position relative
    margin -42px auto 0
    .header-layer
      height 170px
    .header-link
    	position absolute
    	top 0px
    	left 0px
    	width 100%
    	height 170px
    	z-index 10
    .h-center
      width 980px
      height 170px
      position absolute
      top 0
      left 50%
      margin-left -490px
      .logo
        width 220px
        position absolute
        height 105px
        left 24px
        top 55px
        background transparent no-repeat left center
        z-index 100
    	.banner-title
        max-width 350px
        position absolute
        top 114px
        left 255px
        height 20px
        line-height 20px
        padding 6px 10px
        background-color rgba(0,0,0,0.68)
        color #fff
        border-radius 4px
        font-size 14px
        transition .2s
        opacity 0
        visibility hidden
        &.show
          opacity 1
          visibility visible
</style>
