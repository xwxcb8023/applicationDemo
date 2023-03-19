<template>
  <uni-list>
  	<uni-list :border="true">
  		<!-- 显示圆形头像 -->
  		<view class="ui-list-item" v-for="(item, index) in applist" @click="openUrl(item.link)">
			<view class="ui-list-item-left"><text class="list-sort">{{index + 1}}</text></view>
			<image 
			  class="appicon" 
			  :style="(index+1) % 2 ===0 ? 'border-radius:100%':'border-radius:20rpx'" 
			  :src="item.image[1].label"
			></image>
			<view class="right-content">
			   <h4 class="list-title">{{item.name}}</h4>
			   <text class="list-note">{{item.attributes.label}}</text>
			   <view class="list-bottom-icon">
				   <uni-icons 
				     v-for="ite in iconStatus"
				     :type=" item.grade > ite ? 'star-filled':'star'"
				     size="15"
				     color="#f60" 
				     class="icons">
				   </uni-icons>
				   <text class="list-number">({{item.attributes['im:id']}})</text>
			   </view>
			   
			</view>
		</view>
	</uni-list>
	<uni-load-more iconType="circle" :status="status" :content-text="contentText"/>
  </uni-list>
</template>

<script setup lang="ts">
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
import { reactive, watch, ref, onMounted, computed } from 'vue';
import { onReachBottom, onPullDownRefresh,onLaunch, onShow } from "@dcloudio/uni-app";
// Props 对象
const props = defineProps(["reStatus", "application"]);
// 数据加载三个状态
const contentText = reactive({contentdown: '加载更多应用',contentrefresh: '获取数据中…',contentnomore: '没有更多'});
// 动态列表数组
let applist:ListType[] = ref([]);
let iconStatus = reactive([1,2,3,4,5])

onShow(() => applist.value = props.application)
// 加载状态
const status = ref(props.reStatus);

// 监听列表检索变化
watch(() => props.application, (newData:ListType, oldData:ListType) => {
	applist.value = newData
},{ deep: true })

// 监听加载状态变化
watch(() => props.reStatus, (newData:any, oldData:any) => status.value = newData);

// 外部跳转
const openUrl = (url:any) => {
	uni.navigateTo({url: `/pages/navigate/navigateTo?url=${url[0].attributes.href}`})
}
</script>
<style lang="scss">
@import "../style/sortapp.scss";
</style>