(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-storeup-add-or-update"],{"144f":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("28a5"),t("96cf");var n=i(t("3b8d")),a=i(t("e2b1")),o=i(t("064f")),s=i(t("bd56")),u={data:function(){return{cross:"",ruleForm:{userid:"",refid:"",tablename:"",name:"",picture:"",type:"",inteltype:"",remark:""},user:{},ro:{userid:!1,refid:!1,tablename:!1,name:!1,picture:!1,type:!1,inteltype:!1,remark:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:if(i=e.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=13;break}return this.ruleForm.id=r.id,e.next=11,this.$api.info("storeup",this.ruleForm.id);case 11:i=e.sent,this.ruleForm=i.data;case 13:if(this.cross=r.cross,!r.cross){e.next=53;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 17:if((e.t1=e.t0()).done){e.next=53;break}if(a=e.t1.value,"userid"!=a){e.next=23;break}return this.ruleForm.userid=n[a],this.ro.userid=!0,e.abrupt("continue",17);case 23:if("refid"!=a){e.next=27;break}return this.ruleForm.refid=n[a],this.ro.refid=!0,e.abrupt("continue",17);case 27:if("tablename"!=a){e.next=31;break}return this.ruleForm.tablename=n[a],this.ro.tablename=!0,e.abrupt("continue",17);case 31:if("name"!=a){e.next=35;break}return this.ruleForm.name=n[a],this.ro.name=!0,e.abrupt("continue",17);case 35:if("picture"!=a){e.next=39;break}return this.ruleForm.picture=n[a].split(",")[0],this.ro.picture=!0,e.abrupt("continue",17);case 39:if("type"!=a){e.next=43;break}return this.ruleForm.type=n[a],this.ro.type=!0,e.abrupt("continue",17);case 43:if("inteltype"!=a){e.next=47;break}return this.ruleForm.inteltype=n[a],this.ro.inteltype=!0,e.abrupt("continue",17);case 47:if("remark"!=a){e.next=51;break}return this.ruleForm.remark=n[a],this.ro.remark=!0,e.abrupt("continue",17);case 51:e.next=17;break;case 53:this.styleChange(),this.$forceUpdate();case 55:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.picture="upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var r,t,i,n,a,o,s,u,d,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.userid){e.next=3;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(this.ruleForm.name){e.next=6;break}return this.$utils.msg("名称不能为空"),e.abrupt("return");case 6:if(this.ruleForm.picture){e.next=9;break}return this.$utils.msg("图片不能为空"),e.abrupt("return");case 9:if(!this.cross){e.next=26;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=26;break}if(r||(r=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=22;break}for(s in r)s==a&&(r[s]=o);return u=uni.getStorageSync("crossTable"),e.next=20,this.$api.update("".concat(u),r);case 20:e.next=26;break;case 22:t=Number(uni.getStorageSync("userid")),i=r["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 26:if(!i||!t){e.next=49;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:t,crossrefid:i},e.next=32,this.$api.list("storeup",d);case 32:if(l=e.sent,!(l.data.total>=n)){e.next=39;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 39:if(!this.ruleForm.id){e.next=44;break}return e.next=42,this.$api.update("storeup",this.ruleForm);case 42:e.next=46;break;case 44:return e.next=46,this.$api.add("storeup",this.ruleForm);case 46:this.$utils.msgBack("提交成功");case 47:e.next=57;break;case 49:if(!this.ruleForm.id){e.next=54;break}return e.next=52,this.$api.update("storeup",this.ruleForm);case 52:e.next=56;break;case 54:return e.next=56,this.$api.add("storeup",this.ruleForm);case 56:this.$utils.msgBack("提交成功");case 57:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=u},"20dd":function(e,r,t){var i=t("dac5");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("de504c2e",i,!0,{sourceMap:!1,shadowMode:!1})},"265c":function(e,r,t){"use strict";var i=t("20dd"),n=t.n(i);n.a},"871f":function(e,r,t){"use strict";var i,n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{minHeight:"100vh",padding:"0px 0 80rpx",borderColor:"#21d5ae",background:"#fff",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[t("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("表名")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.tablename,placeholder:"表名"},model:{value:e.ruleForm.tablename,callback:function(r){e.$set(e.ruleForm,"tablename",r)},expression:"ruleForm.tablename"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("名称")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.name,placeholder:"名称"},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.pictureTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("图片")]),e.ruleForm.picture?t("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:e.baseUrl+e.ruleForm.picture.split(",")[0],mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("类型(1:收藏,21:赞,22:踩,31:竞拍参与,41:关注)")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.type,placeholder:"类型(1:收藏,21:赞,22:踩,31:竞拍参与,41:关注)"},model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("推荐类型")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.inteltype,placeholder:"推荐类型"},model:{value:e.ruleForm.inteltype,callback:function(r){e.$set(e.ruleForm,"inteltype",r)},expression:"ruleForm.inteltype"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("备注")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.remark,placeholder:"备注"},model:{value:e.ruleForm.remark,callback:function(r){e.$set(e.ruleForm,"remark",r)},expression:"ruleForm.remark"}})],1),t("v-uni-view",{staticClass:"btn",style:{padding:"0px",margin:"40rpx 0 0",flexWrap:"wrap",background:"none",display:"flex",width:"100%",justifyContent:"center",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"0px 0px 0px #ccc",margin:"0 0 40rpx",borderColor:"#d8f5e3",color:"#333",display:"inline",minWidth:"200rpx",borderRadius:"0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(226,247,234,1) 100%)",borderWidth:"2rpx",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid",fontWeight:"500",height:"88rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))},c3d0:function(e,r,t){"use strict";t.r(r);var i=t("144f"),n=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=n.a},d26a:function(e,r,t){"use strict";t.r(r);var i=t("871f"),n=t("c3d0");for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);t("265c");var o,s=t("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"dd472852",null,!1,i["a"],o);r["default"]=u.exports},dac5:function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-dd472852]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=r}}]);