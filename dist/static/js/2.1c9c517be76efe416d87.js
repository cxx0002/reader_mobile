webpackJsonp([2],{BnP2:function(t,e){},m77C:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o("miO0");var s=o("OTYB"),n=o.n(s),a=o("eFLg"),i=o("P9l9"),r={data:function(){return{largeTypeIndex:0,smallTypeIndex:0,type:"hot",duration:"last-seven-days",major:"",minor:"",gender:"",start:0,currentPage:1,largeTypes:[{type:"hot",name:"热门"},{type:"new",name:"新书",duration:"all"},{type:"reputation",name:"好评"},{type:"over",name:"完结"},{type:"monthly",name:"包月"}],mins:[],bookLists:[],allLoaded:!1,cate:!0,isLoadMore:!1}},methods:{setLargeType:function(t,e){this.largeTypeIndex=e,this.type!==t&&(this.type=t,this._getBookLists(this.gender,this.type,this.major,this.minor),this.$refs.load.scrollTop=0)},setSmallType:function(t,e){this.smallTypeIndex=e,this.minor!==t&&(this.minor=""===t||"全部"===t?"":t,this.currentPage=1,this._getBookLists(this.gender,this.type,this.major,this.minor),this.$refs.load.scrollTop=0)},_getBookLists:function(t,e,o){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=this,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:20;Object(i.h)(t,e,o,s,r,l).then(function(t){t.data.ok&&(a.bookLists=a._unEscape(a.normalizeBooks(t.data.books)))},function(t){n.a.close(),n.a.open("网络错误"),setTimeout(function(){n.a.close()},1500)})},_unEscape:function(t){for(var e=0;e<t.length;e++)t[e].cover=unescape(t[e].cover),t[e].cover=t[e].cover.replace("/agent/","");return t},loadBottom:function(){var t=this;this.isLoadMore=!0,n.a.open("加载中"),Object(i.h)(this.gender,this.type,this.major,this.minor,20*this.currentPage,20).then(function(e){e.data.ok&&(t.bookLists=t.bookLists.concat(t._unEscape(t.normalizeBooks(e.data.books))),setTimeout(function(){n.a.close(),t.isLoadMore=!1},350),t.currentPage++)},function(t){n.a.close(),n.a.open("网络错误"),setTimeout(function(){n.a.close()},1500)}),this.$refs.loadmore.onBottomLoaded()},loadTop:function(){var t=this;n.a.open("加载中"),Object(i.h)(this.gender,this.type,this.major,this.minor,0,20).then(function(e){e.data.ok&&(t.bookLists=t._unEscape(t.normalizeBooks(e.data.books)),n.a.close())},function(t){n.a.close(),n.a.open("网络错误"),setTimeout(function(){n.a.close()},1500)}),this.$refs.loadmore.onTopLoaded()}},components:{BookList:a.a},beforeRouteEnter:function(t,e,o){o(function(t){t.major=t.$route.query.major,t.gender=t.$route.query.gender,Object(i.m)().then(function(e){e.data[t.$route.query.gender].forEach(function(e){e.major===t.$route.query.major&&(t.mins=e.mins,e.mins.length>0&&t.mins.unshift("全部"))})},function(t){n.a.close(),n.a.open("网络错误"),setTimeout(function(){n.a.close()},1500)}),t._getBookLists(t.$route.query.gender,t.type,t.$route.query.major)})}},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bookLists"},[o("mt-header",{staticClass:"book-header",attrs:{title:t.major}},[o("router-link",{attrs:{slot:"left",to:"/categories"},slot:"left"},[o("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)],1),t._v(" "),o("div",{staticClass:"select"},[o("ul",{staticClass:"select-bar"},t._l(t.largeTypes,function(e,s){return o("li",{class:{active:s===t.largeTypeIndex},on:{click:function(o){return t.setLargeType(e.type,s)}}},[t._v(t._s(e.name)+"\n      ")])}),0),t._v(" "),o("ul",{directives:[{name:"show",rawName:"v-show",value:t.mins.length>0,expression:"mins.length>0"}],staticClass:"select-bar"},t._l(t.mins,function(e,s){return o("li",{class:{active:s===t.smallTypeIndex},on:{click:function(o){return t.setSmallType(e,s)}}},[t._v(t._s(e)+"\n      ")])}),0)]),t._v(" "),o("div",{ref:"load",staticClass:"load-more",class:[t.mins.length>0?"padding300":"padding200"]},[o("mt-loadmore",{ref:"loadmore",staticClass:"loadmore",attrs:{"top-method":t.loadTop,"bottom-method":t.loadBottom,"auto-fill":!1,"bottom-all-loaded":t.allLoaded}},[o("div",{staticClass:"book-list"},[t._l(t.bookLists,function(e,s){return o("book-list",{key:s,attrs:{book:e,cate:t.cate,isLoadMore:t.isLoadMore}})}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.bookLists.length,expression:"!bookLists.length"}],staticStyle:{"margin-top":"10px","text-align":"center"}},[t._v("暂无数据")])],2)])],1)],1)},staticRenderFns:[]};var c=o("C7Lr")(r,l,!1,function(t){o("BnP2")},"data-v-e9c79b72",null);e.default=c.exports}});
//# sourceMappingURL=2.1c9c517be76efe416d87.js.map