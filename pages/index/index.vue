<template>
	<view class="drag">
		<!-- controlsList 表示控件的列表  controlsSize 表示每个控件的大小 -->
		<drag-and-drop-sort :controlsList="dataArray" :controlsSize="{width: 100, height: 100}">
			<!-- 自定义内容 -->
			<template #content="{item}">
				<view :style="{'background': item.color}" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
					{{item.label}}
				</view>
			</template>
		</drag-and-drop-sort>
	</view>
</template>
 
<script>
import dragAndDropSort from '@/components/drag.vue';
export default {
	components: {
		dragAndDropSort,
	},
	data() {
	    return {
	        // 这个内容可以自定义,应该有一个disabled,为空时静止拖拽
			dataArray: [
				{color: '#ee3131', label: '1'},
				{color: '#2dc3d5', label: '2'},
				{color: '#f5aa41', label: '3'},
				{color: '#42b983', label: '4'},
				{color: '#1983fb', label: '5'},
				{color: '#a15afd', label: '6'},
				{color: '#ffe874', label: '7'},
				{color: '#00a8fb', label: '8'},
				{color: '#f36586', label: '9'},
				{color: '#16d46b', label: '10'},
				{color: '#ee3131', label: '1'},
				{color: '#2dc3d5', label: '2'},
				{color: '#f5aa41', label: '3'},
				{color: '#42b983', label: '4'},
				{color: '#1983fb', label: '5'},
				{color: '#a15afd', label: '6'},
				{color: '#ffe874', label: '7'},
				{color: '#00a8fb', label: '8'},
				{color: '#f36586', label: '9'},
				{color: '#16d46b', label: '10'},
				{color: '#ee3131', label: '1'},
				{color: '#2dc3d5', label: '2'},
				{color: '#f5aa41', label: '3'},
				{color: '#42b983', label: '4'},
				{color: '#1983fb', label: '5'},
				{color: '#a15afd', label: '6'},
				{color: '#ffe874', label: '7'},
				{color: '#00a8fb', label: '8'},
				{color: '#f36586', label: '9'},
				{color: '#16d46b', label: '10'},
			],
		}
	},
};
</script>
<style lang="scss" scoped>
	.drag{
		
	}
</style>