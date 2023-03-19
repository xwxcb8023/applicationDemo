<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
	// let accountInfo = uni.getAccountInfoSync();
	// const appid:string = accountInfo.miniProgram.appId;
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
@import "./uni.scss";
</style>
