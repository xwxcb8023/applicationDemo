<template>
	<scroll-view scroll-x="true" class="scrollList">
		<view class="scroll-view-item_H" v-for="item in applist" @click="openUrl(item.link)">
			<view class="appimgbox"><image class="appimg" :src="item.image[1].label"/></view>
			<h4 class="appName">{{item.name}}</h4>
			<text class="apptype">{{item.attributes.label}}</text>
		</view>
	</scroll-view>
</template>

<script lang="ts" setup>
interface ListType {
  attributes: any
  grade: number
  image: [
	  attributes: {
		  height: string
	  },
	  label: string
  ]
  link:{
	  attributes: any
  }
  name: string
}	
import { reactive } from "vue";	
const props:any = defineProps(["app"]);
const applist:ListType[] = reactive(props.app)
// 外部跳转
const openUrl = (url:any) => {
	console.log(url[0].attributes.href)
	uni.navigateTo({url: `/pages/navigate/navigateTo?url=${url[0].attributes.href}`})
}

</script>
<style scoped lang="scss">
@import "../style/hotapp.scss";
</style>