<template>
	<div class="content">
		<div class="container-top-wrapper">
			<div class="container-top">
				<div class="b-l">
					<Banner></Banner>
				</div>
				<div class="b-r">
					<BContentTop></BContentTop>
				</div>
			</div>
		</div>
		<div class="container-row"></div>
	</div>
</template>

<script>
import Banner from '../banner/Banner.vue'
import BContentTop from './ContentTop.vue'
export default {
	components: {
		Banner,
		BContentTop
	}
}
</script>

<style lang="stylus" scoped>
	.content
		zoom 1
		.container-top
			padding 0
			margin-bottom 20px
			margin 0 auto
			zoom 1
			width 980px
			.b-l
				float left
				width 440px
			.b-r
				float right
				width 540px
				height auto
</style>
