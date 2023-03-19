"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
const api_requests = require("../../api/requests.js");
const utils_utils = require("../../utils/utils.js");
if (!Math) {
  (common_vendor.unref(Search) + common_vendor.unref(Hotapp) + common_vendor.unref(Sortapp))();
}
const Search = () => "../../compments/search.js";
const Hotapp = () => "../../compments/hotapp.js";
const Sortapp = () => "../../compments/sortapp.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.ref("");
    let page = 0;
    const apps = common_vendor.reactive(utils_utils.handlerData(api_api.data.feed.entry).slice(0, 10));
    let sortapp = common_vendor.reactive(utils_utils.handlerData(api_api.appList.feed.entry));
    let renderlist = common_vendor.ref([]);
    const limit = 10;
    let reachStatus = common_vendor.ref("more");
    const init = () => renderlist.value = sortapp.slice(0, 10);
    common_vendor.onShow(() => init());
    const request = (url) => {
      url = api_api.GET_APPS.replace("${limit}", limit);
      api_requests.get(url).then((res) => {
        sortapp = [...sortapp, ...utils_utils.handlerData(res.feed.entry)];
      }).catch((err) => {
        console.log(new Error(err.message));
      });
    };
    common_vendor.onPullDownRefresh(() => {
      init();
      common_vendor.index.stopPullDownRefresh();
    });
    common_vendor.onReachBottom(() => {
      page = page + limit;
      let arr = sortapp.slice(page + 1, page + 1 + limit);
      if (page >= sortapp.length) {
        request(api_api.GET_APPS);
        return;
      }
      reachStatus.value = "loading";
      renderlist.value = [...renderlist.value, ...arr];
      reachStatus.value = "more";
      console.log("翻页");
    });
    const getSearch = (val) => {
      if (val !== "") {
        let res = renderlist.value.filter((item) => {
          let str = item.name + item.attributes.label;
          return str.indexOf(val) !== -1;
        });
        renderlist.value = res;
      } else {
        init();
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(getSearch),
        b: common_vendor.p({
          app: apps
        }),
        c: common_vendor.p({
          reStatus: common_vendor.unref(reachStatus),
          application: common_vendor.unref(renderlist)
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "D:/web/uni-app/uni-preset-vue-vite-ts/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
