<template>
	<web-view :src="url"></web-view>
	<!-- <navigator :url="url"></navigator> -->
</template>

<script setup lang="ts">
import { ref } from "vue";	
import { onLoad } from "@dcloudio/uni-app";
let url = ref('');
onLoad((item:any) => { 
  url.value = decodeURIComponent(item.url);
})

</script>
<style>
</style>