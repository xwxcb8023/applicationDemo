<template>
  <view class="page">
	  <Search @callBackSearch="getSearch"/>
	  <view class="titleBox"><h4 class="titlName">Recommend</h4></view>
	  <view class="top-hot-app"> <Hotapp :app="apps"/> </view>
	  <view class="content">
		<Sortapp
		  :reStatus="reachStatus"
		  :application.sync="renderlist"
		/>  
	  </view>
  </view>
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
import { ref, reactive, onBeforeMount,onMounted } from 'vue'
import { onReachBottom, onPullDownRefresh,onLaunch, onShow } from "@dcloudio/uni-app";
import Search from '../../compments/search';
import Hotapp from '../../compments/hotapp';
import Sortapp from "../../compments/sortapp";
import { GET_APPS, data, appList } from "../../api/api";
import { get } from "../../api/requests";
import { handlerData } from "../../utils/utils";
let title = ref('');
let page = 0;
const apps:ListType[] = reactive(handlerData(data.feed.entry).slice(0,10));
let sortapp:ListType[] = reactive(handlerData(appList.feed.entry));
let renderlist = ref([]);
const limit = 10;
let reachStatus = ref('more')
// 初始化数据
const init = () => renderlist.value = sortapp.slice(0, 10)

// 初次加载首页数据
onShow(() => init())

// 网络请求数据
const request = (url:string) => {
	url = GET_APPS.replace('${limit}', limit);
	get(url).then((res:any) => {
		sortapp = [...sortapp, ...handlerData(res.feed.entry)];
	}).catch((err:any) => {
		console.log(new Error(err.message))
	})
}

// 刷新数据
onPullDownRefresh(() => {
	init();
	uni.stopPullDownRefresh();
})

// 下拉加载更多数据
onReachBottom(() => {
	page = page + limit;
	let arr = sortapp.slice(page+1, page+1 + limit);
	if(page >= sortapp.length) {
	   request(GET_APPS);
	   return;
	}
	reachStatus.value = "loading"
	renderlist.value = [...renderlist.value, ...arr];
    reachStatus.value = "more"
	console.log("翻页");
})

// 实时检索
const getSearch = (val:any) => {
	if(val !== ''){
		let res = renderlist.value.filter((item:string) => {
			let str = item.name + item.attributes.label;
			return str.indexOf(val) !== -1;
		})
		renderlist.value = res
	}else {
		init()
	}
}
</script>

<style scoped lang="scss">
@import "../../style/index.scss";
</style>
