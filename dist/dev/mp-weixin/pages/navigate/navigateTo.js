"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "navigateTo",
  setup(__props) {
    let url = common_vendor.ref("");
    common_vendor.onLoad((item) => {
      url.value = decodeURIComponent(item.url);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(url)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/web/uni-app/uni-preset-vue-vite-ts/src/pages/navigate/navigateTo.vue"]]);
wx.createPage(MiniProgramPage);
