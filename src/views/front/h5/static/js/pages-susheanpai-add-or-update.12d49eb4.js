(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-susheanpai-add-or-update"],{2230:function(e,r,i){var t=i("f0ce");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var n=i("4f06").default;n("d7ed47a4",t,!0,{sourceMap:!1,shadowMode:!1})},3385:function(e,r,i){"use strict";i.r(r);var t=i("6f73"),n=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(r,e,(function(){return t[e]}))}(a);r["default"]=n.a},"5bba":function(e,r,i){"use strict";i.r(r);var t=i("b073"),n=i("3385");for(var a in n)"default"!==a&&function(e){i.d(r,e,(function(){return n[e]}))}(a);i("a599");var o,u=i("f0c5"),s=Object(u["a"])(n["default"],t["b"],t["c"],!1,null,"1fbf87a1",null,!1,t["a"],o);r["default"]=s.exports},"6f73":function(e,r,i){"use strict";var t=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("96cf");var n=t(i("3b8d")),a=t(i("e2b1")),o=t(i("064f")),u=t(i("bd56")),s={data:function(){return{cross:"",ruleForm:{xuehao:"",xueshengxingming:"",xingbie:"",xueyuan:"",nianji:"",banji:"",qinshihao:"",chuangweihao:""},xuehaoOptions:[],xuehaoIndex:0,user:{},ro:{xuehao:!1,xueshengxingming:!1,xingbie:!1,xueyuan:!1,nianji:!1,banji:!1,qinshihao:!1,chuangweihao:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:u.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var i,t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:return t=e.sent,this.user=t.data,e.next=7,this.$api.option("xuesheng","xuehao",{});case 7:if(t=e.sent,this.xuehaoOptions=t.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=17;break}return this.ruleForm.id=r.id,e.next=15,this.$api.info("susheanpai",this.ruleForm.id);case 15:t=e.sent,this.ruleForm=t.data;case 17:if(this.cross=r.cross,!r.cross){e.next=57;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 21:if((e.t1=e.t0()).done){e.next=57;break}if(a=e.t1.value,"xuehao"!=a){e.next=27;break}return this.ruleForm.xuehao=n[a],this.ro.xuehao=!0,e.abrupt("continue",21);case 27:if("xueshengxingming"!=a){e.next=31;break}return this.ruleForm.xueshengxingming=n[a],this.ro.xueshengxingming=!0,e.abrupt("continue",21);case 31:if("xingbie"!=a){e.next=35;break}return this.ruleForm.xingbie=n[a],this.ro.xingbie=!0,e.abrupt("continue",21);case 35:if("xueyuan"!=a){e.next=39;break}return this.ruleForm.xueyuan=n[a],this.ro.xueyuan=!0,e.abrupt("continue",21);case 39:if("nianji"!=a){e.next=43;break}return this.ruleForm.nianji=n[a],this.ro.nianji=!0,e.abrupt("continue",21);case 43:if("banji"!=a){e.next=47;break}return this.ruleForm.banji=n[a],this.ro.banji=!0,e.abrupt("continue",21);case 47:if("qinshihao"!=a){e.next=51;break}return this.ruleForm.qinshihao=n[a],this.ro.qinshihao=!0,e.abrupt("continue",21);case 51:if("chuangweihao"!=a){e.next=55;break}return this.ruleForm.chuangweihao=n[a],this.ro.chuangweihao=!0,e.abrupt("continue",21);case 55:e.next=21;break;case 57:this.styleChange(),this.$forceUpdate();case 59:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xuehaoChange:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.xuehaoIndex=r.target.value,this.ruleForm.xuehao=this.xuehaoOptions[this.xuehaoIndex],e.next=4,this.$api.follow("xuesheng","xuehao",{columnValue:this.ruleForm.xuehao});case 4:i=e.sent,i.data.xueshengxingming&&(this.ruleForm.xueshengxingming=i.data.xueshengxingming),i.data.xingbie&&(this.ruleForm.xingbie=i.data.xingbie),i.data.xueyuan&&(this.ruleForm.xueyuan=i.data.xueyuan),i.data.nianji&&(this.ruleForm.nianji=i.data.nianji),i.data.banji&&(this.ruleForm.banji=i.data.banji);case 10:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var r,i,t,n,a,o,u,s,d,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.cross){e.next=17;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=17;break}if(r||(r=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=13;break}for(u in r)u==a&&(r[u]=o);return s=uni.getStorageSync("crossTable"),e.next=11,this.$api.update("".concat(s),r);case 11:e.next=17;break;case 13:i=Number(uni.getStorageSync("userid")),t=r["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 17:if(!t||!i){e.next=40;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=t,d={page:1,limit:10,crossuserid:i,crossrefid:t},e.next=23,this.$api.list("susheanpai",d);case 23:if(l=e.sent,!(l.data.total>=n)){e.next=30;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 30:if(!this.ruleForm.id){e.next=35;break}return e.next=33,this.$api.update("susheanpai",this.ruleForm);case 33:e.next=37;break;case 35:return e.next=37,this.$api.add("susheanpai",this.ruleForm);case 37:this.$utils.msgBack("提交成功");case 38:e.next=48;break;case 40:if(!this.ruleForm.id){e.next=45;break}return e.next=43,this.$api.update("susheanpai",this.ruleForm);case 43:e.next=47;break;case 45:return e.next=47,this.$api.add("susheanpai",this.ruleForm);case 47:this.$utils.msgBack("提交成功");case 48:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,i=r.getFullYear(),t=r.getMonth()+1,n=r.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,n=n>9?n:"0"+n,"".concat(i,"-").concat(t,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=s},a599:function(e,r,i){"use strict";var t=i("2230"),n=i.n(t);n.a},b073:function(e,r,i){"use strict";var t,n=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{style:{minHeight:"100vh",padding:"0px 0 80rpx",borderColor:"#21d5ae",background:"#fff",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[i("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[i("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("学号")]),i("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.xuehaoIndex,range:e.xuehaoOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.xuehaoChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{width:"100%",padding:"0 20rpx",lineHeight:"80rpx",fontSize:"28rpx",color:"#666",background:"none"}},[e._v(e._s(e.xuehaoOptions[e.xuehaoIndex]))])],1)],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("学生姓名")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.xueshengxingming,placeholder:"学生姓名"},model:{value:e.ruleForm.xueshengxingming,callback:function(r){e.$set(e.ruleForm,"xueshengxingming",r)},expression:"ruleForm.xueshengxingming"}})],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("性别")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.xingbie,placeholder:"性别"},model:{value:e.ruleForm.xingbie,callback:function(r){e.$set(e.ruleForm,"xingbie",r)},expression:"ruleForm.xingbie"}})],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("学院")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.xueyuan,placeholder:"学院"},model:{value:e.ruleForm.xueyuan,callback:function(r){e.$set(e.ruleForm,"xueyuan",r)},expression:"ruleForm.xueyuan"}})],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("年级")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.nianji,placeholder:"年级"},model:{value:e.ruleForm.nianji,callback:function(r){e.$set(e.ruleForm,"nianji",r)},expression:"ruleForm.nianji"}})],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("班级")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.banji,placeholder:"班级"},model:{value:e.ruleForm.banji,callback:function(r){e.$set(e.ruleForm,"banji",r)},expression:"ruleForm.banji"}})],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("寝室号")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.qinshihao,placeholder:"寝室号"},model:{value:e.ruleForm.qinshihao,callback:function(r){e.$set(e.ruleForm,"qinshihao",r)},expression:"ruleForm.qinshihao"}})],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("床位号")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.chuangweihao,placeholder:"床位号"},model:{value:e.ruleForm.chuangweihao,callback:function(r){e.$set(e.ruleForm,"chuangweihao",r)},expression:"ruleForm.chuangweihao"}})],1),i("v-uni-view",{staticClass:"btn",style:{padding:"0px",margin:"40rpx 0 0",flexWrap:"wrap",background:"none",display:"flex",width:"100%",justifyContent:"center",height:"auto"}},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"0px 0px 0px #ccc",margin:"0 0 40rpx",borderColor:"#d8f5e3",color:"#333",display:"inline",minWidth:"200rpx",borderRadius:"0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(226,247,234,1) 100%)",borderWidth:"2rpx",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid",fontWeight:"500",height:"88rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];i.d(r,"b",(function(){return n})),i.d(r,"c",(function(){return a})),i.d(r,"a",(function(){return t}))},f0ce:function(e,r,i){var t=i("24fb");r=t(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-1fbf87a1]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=r}}]);