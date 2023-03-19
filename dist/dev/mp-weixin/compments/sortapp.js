"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_list2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js";
const _easycom_uni_list = () => "../node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list.js";
const _easycom_uni_load_more = () => "../node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list + _easycom_uni_load_more)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "sortapp",
  props: ["reStatus", "application"],
  setup(__props) {
    const props = __props;
    const contentText = common_vendor.reactive({ contentdown: "加载更多应用", contentrefresh: "获取数据中…", contentnomore: "没有更多" });
    let applist = common_vendor.ref([]);
    const status = common_vendor.ref(props.reStatus);
    let iconStatus = common_vendor.reactive([1, 2, 3, 4, 5]);
    common_vendor.onShow(() => applist.value = props.application);
    common_vendor.watch(() => props.application, (newData, oldData) => {
      applist.value = newData;
    }, { deep: true });
    common_vendor.watch(() => props.reStatus, (newData, oldData) => status.value = newData);
    const openUrl = (url) => {
      common_vendor.index.navigateTo({ url: `/pages/navigate/navigateTo?url=${url[0].attributes.href}` });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(applist), (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.s((index + 1) % 2 === 0 ? "border-radius:100%" : "border-radius:20rpx"),
            c: item.image[1].label,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.attributes.label),
            f: common_vendor.f(common_vendor.unref(iconStatus), (ite, k1, i1) => {
              return {
                a: "46631dde-2-" + i0 + "-" + i1 + ",46631dde-1",
                b: common_vendor.p({
                  type: item.grade > ite ? "star-filled" : "star",
                  size: "15",
                  color: "#f60"
                })
              };
            }),
            g: common_vendor.t(item.attributes["im:id"]),
            h: common_vendor.o(($event) => openUrl(item.link))
          };
        }),
        b: common_vendor.p({
          border: true
        }),
        c: status.value !== "more" ? false : true,
        d: common_vendor.p({
          iconType: "circle",
          status: status.value,
          ["content-text"]: contentText
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/web/uni-app/uni-preset-vue-vite-ts/src/compments/sortapp.vue"]]);
wx.createComponent(Component);
