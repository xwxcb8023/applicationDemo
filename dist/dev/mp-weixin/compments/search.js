"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search",
  emits: ["callBackSearch"],
  setup(__props, { emit: emits }) {
    const search = common_vendor.ref("");
    const inputDom = common_vendor.ref("");
    let icon = common_vendor.ref({});
    const platform = common_vendor.index.getSystemInfoSync().platform;
    inputDom.value = platform === "devtools" ? { "width": "75%" } : { "width": "100%" };
    icon.value = platform === "devtools" ? { "bottom": "18rpx" } : { "bottom": "23rpx" };
    const getValue = (val) => {
      search.value = val.detail.value;
      emits("callBackSearch", search.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s(common_vendor.unref(icon)),
        b: common_vendor.p({
          type: "search",
          size: "20"
        }),
        c: common_vendor.s(inputDom.value),
        d: common_vendor.o(getValue),
        e: common_vendor.o(getValue),
        f: search.value,
        g: common_vendor.o(($event) => search.value = $event.detail.value)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1ce3b248"], ["__file", "D:/web/uni-app/uni-preset-vue-vite-ts/src/compments/search.vue"]]);
wx.createComponent(Component);
