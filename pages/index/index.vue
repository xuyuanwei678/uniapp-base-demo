<template>
	<view class="content">
		<u-swiper
				:list="list1"
				
		></u-swiper>
		5
	</view>
</template>

<script>
	import {API_TEST_GET,API_TEST_POST} from '@/http/request/request.js'
	export default {
		data() {
			return {
				title: 'Hello',
				show: false,
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				]
			}
		},
		onLoad() {
			// console.log(this.vuex_version)
			// this.$u.vuex('vuex_version','1.0.55555')
			// console.log(this.vuex_version)
			// this.get_test()
			 //this.post_test()
			
			
		},
		methods: {
			get_test(){
				let data = {
					test:666
				}
				API_TEST_GET(data).then(res=>{
					
				})
			},
				
			post_test(){
				let data = {
					test:555,
					id: 789,
					name: 'admin'
				}
				API_TEST_POST(data).then(res=>{
					
				})
			}
		}
	}
</script>

<style>
	

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
