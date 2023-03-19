"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "hotapp",
  props: ["app"],
  setup(__props) {
    const props = __props;
    const applist = common_vendor.reactive(props.app);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(applist, (item, k0, i0) => {
          return {
            a: item.image[1].label,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attributes.label)
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6acef3b8"], ["__file", "D:/web/uni-app/uni-preset-vue-vite-ts/src/compments/hotapp.vue"]]);
wx.createComponent(Component);
