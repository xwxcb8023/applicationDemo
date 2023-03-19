<template>
    <view class="head">
		<uni-icons type="search" size="20" :style="icon" class="searchIcon"></uni-icons>
		<input type="text"
		 class="input"
		 :style={...inputDom}
		 placeholder="Search…"
		 v-model="search"
         @change="getValue"
		 @blur="getValue"
		 />
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const search = ref("");
const inputDom = ref("");
const emits = defineEmits(["callBackSearch"]);
let icon = ref({});
// 获取当前设备类型
const platform:string = uni.getSystemInfoSync().platform;
// 动态切换输入框样式
inputDom.value = platform === "devtools" ? {'width':'75%'}:{'width':'100%'};
icon.value = platform === "devtools" ? {'bottom':'18rpx'}:{'bottom':'23rpx'};
// 获取输入框内容
const getValue = (val:any) => {
	search.value = val.detail.value;
	emits("callBackSearch", search.value)
}

</script>
<style lang="scss" scoped>
.head{
	//flex:1;
	height: 170rpx;
	background-color: #fff;
	box-sizing: border-box;
	display: flex;
	position: fixed;
	top:0rpx;
	left:0rpx;
	right:0rpx;
	z-index: 2;
	padding-left: 20rpx;
	padding-right: 20rpx;
	.searchIcon{
		font-size:35rpx !important;
		position: absolute;
		left:30rpx;
		bottom:23rpx;
		color:#999 !important;
	}
	.input{
		font-size: 15rpx;
		height:60rpx;
		margin-top:100rpx;
		background-color: #eee;
		font-size:13rpx;
		padding-left:50rpx;
		box-sizing: border-box;
		border-radius: 50rpx;
	}
}
</style>
