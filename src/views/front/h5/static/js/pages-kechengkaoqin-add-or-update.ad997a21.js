(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kechengkaoqin-add-or-update"],{"05e0":function(e,r,i){var n=i("24fb");r=n(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-69b135ba]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=r},"112a":function(e,r,i){"use strict";var n=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var t=n(i("3b8d")),a=n(i("e2b1")),o=n(i("064f")),s=n(i("bd56")),u={data:function(){return{cross:"",ruleForm:{kechengmingcheng:"",shoukejiaoshi:"",dakaleixing:"",xuehao:"",xueshengxingming:"",xueyuan:"",dakashijian:""},dakaleixingOptions:[],dakaleixingIndex:0,user:{},ro:{kechengmingcheng:!1,shoukejiaoshi:!1,dakaleixing:!1,xuehao:!1,xueshengxingming:!1,xueyuan:!1,dakashijian:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(r){var i,n,t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.dakashijian=this.$utils.getCurDateTime(),i=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:if(n=e.sent,this.user=n.data,this.ruleForm.xuehao=this.user.xuehao,this.ro.xuehao=!0,this.ruleForm.xueshengxingming=this.user.xueshengxingming,this.ro.xueshengxingming=!0,this.ruleForm.xueyuan=this.user.xueyuan,this.ro.xueyuan=!0,this.ro.dakashijian=!0,this.dakaleixingOptions="签到,签退,请假".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=22;break}return this.ruleForm.id=r.id,e.next=20,this.$api.info("kechengkaoqin",this.ruleForm.id);case 20:n=e.sent,this.ruleForm=n.data;case 22:if(this.cross=r.cross,!r.cross){e.next=58;break}t=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(t);case 26:if((e.t1=e.t0()).done){e.next=58;break}if(a=e.t1.value,"kechengmingcheng"!=a){e.next=32;break}return this.ruleForm.kechengmingcheng=t[a],this.ro.kechengmingcheng=!0,e.abrupt("continue",26);case 32:if("shoukejiaoshi"!=a){e.next=36;break}return this.ruleForm.shoukejiaoshi=t[a],this.ro.shoukejiaoshi=!0,e.abrupt("continue",26);case 36:if("dakaleixing"!=a){e.next=40;break}return this.ruleForm.dakaleixing=t[a],this.ro.dakaleixing=!0,e.abrupt("continue",26);case 40:if("xuehao"!=a){e.next=44;break}return this.ruleForm.xuehao=t[a],this.ro.xuehao=!0,e.abrupt("continue",26);case 44:if("xueshengxingming"!=a){e.next=48;break}return this.ruleForm.xueshengxingming=t[a],this.ro.xueshengxingming=!0,e.abrupt("continue",26);case 48:if("xueyuan"!=a){e.next=52;break}return this.ruleForm.xueyuan=t[a],this.ro.xueyuan=!0,e.abrupt("continue",26);case 52:if("dakashijian"!=a){e.next=56;break}return this.ruleForm.dakashijian=t[a],this.ro.dakashijian=!0,e.abrupt("continue",26);case 56:e.next=26;break;case 58:this.styleChange(),this.$forceUpdate();case 60:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},dakashijianConfirm:function(e){console.log(e),this.ruleForm.dakashijian=e.result,this.$forceUpdate()},dakaleixingChange:function(e){this.dakaleixingIndex=e.target.value,this.ruleForm.dakaleixing=this.dakaleixingOptions[this.dakaleixingIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(){var r,i,n,t,a,o,s,u,d,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.dakaleixing){e.next=3;break}return this.$utils.msg("打卡类型不能为空"),e.abrupt("return");case 3:if(!this.cross){e.next=20;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=20;break}if(r||(r=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=16;break}for(s in r)s==a&&(r[s]=o);return u=uni.getStorageSync("crossTable"),e.next=14,this.$api.update("".concat(u),r);case 14:e.next=20;break;case 16:i=Number(uni.getStorageSync("userid")),n=r["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 20:if(!n||!i){e.next=43;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=n,d={page:1,limit:10,crossuserid:i,crossrefid:n},e.next=26,this.$api.list("kechengkaoqin",d);case 26:if(l=e.sent,!(l.data.total>=t)){e.next=33;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 33:if(!this.ruleForm.id){e.next=38;break}return e.next=36,this.$api.update("kechengkaoqin",this.ruleForm);case 36:e.next=40;break;case 38:return e.next=40,this.$api.add("kechengkaoqin",this.ruleForm);case 40:this.$utils.msgBack("提交成功");case 41:e.next=51;break;case 43:if(!this.ruleForm.id){e.next=48;break}return e.next=46,this.$api.update("kechengkaoqin",this.ruleForm);case 46:e.next=50;break;case 48:return e.next=50,this.$api.add("kechengkaoqin",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,i=r.getFullYear(),n=r.getMonth()+1,t=r.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,t=t>9?t:"0"+t,"".concat(i,"-").concat(n,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};r.default=u},1468:function(e,r,i){"use strict";i.r(r);var n=i("5702"),t=i("5ab0");for(var a in t)"default"!==a&&function(e){i.d(r,e,(function(){return t[e]}))}(a);i("9e8f");var o,s=i("f0c5"),u=Object(s["a"])(t["default"],n["b"],n["c"],!1,null,"69b135ba",null,!1,n["a"],o);r["default"]=u.exports},5702:function(e,r,i){"use strict";var n={"w-picker":i("e2b1").default},t=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{style:{minHeight:"100vh",padding:"0px 0 80rpx",borderColor:"#21d5ae",background:"#fff",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[i("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("课程名称")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.kechengmingcheng,placeholder:"课程名称"},model:{value:e.ruleForm.kechengmingcheng,callback:function(r){e.$set(e.ruleForm,"kechengmingcheng",r)},expression:"ruleForm.kechengmingcheng"}})],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("授课教师")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.shoukejiaoshi,placeholder:"授课教师"},model:{value:e.ruleForm.shoukejiaoshi,callback:function(r){e.$set(e.ruleForm,"shoukejiaoshi",r)},expression:"ruleForm.shoukejiaoshi"}})],1),i("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("打卡类型")]),i("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.dakaleixingIndex,range:e.dakaleixingOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.dakaleixingChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{width:"100%",padding:"0 20rpx",lineHeight:"80rpx",fontSize:"28rpx",color:"#666",background:"none"}},[e._v(e._s(e.ruleForm.dakaleixing?e.ruleForm.dakaleixing:"请选择打卡类型"))])],1)],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("学号")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.xuehao,placeholder:"学号"},model:{value:e.ruleForm.xuehao,callback:function(r){e.$set(e.ruleForm,"xuehao",r)},expression:"ruleForm.xuehao"}})],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("学生姓名")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.xueshengxingming,placeholder:"学生姓名"},model:{value:e.ruleForm.xueshengxingming,callback:function(r){e.$set(e.ruleForm,"xueshengxingming",r)},expression:"ruleForm.xueshengxingming"}})],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("学院")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{disabled:e.ro.xueyuan,placeholder:"学院"},model:{value:e.ruleForm.xueyuan,callback:function(r){e.$set(e.ruleForm,"xueyuan",r)},expression:"ruleForm.xueyuan"}})],1),i("v-uni-view",{style:{padding:"0 20rpx 0px",margin:"0 0 20rpx",borderColor:"#e1f9eb",borderRadius:"0px",flexWrap:"wrap",borderWidth:"2rpx",background:"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",fontSize:"28rpx",color:"#369555",textAlign:"right",fontWeight:"600"}},[e._v("打卡时间")]),i("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"0px",flex:"1",background:"none",fontSize:"28rpx"},attrs:{placeholder:"打卡时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("dakashijian")}},model:{value:e.ruleForm.dakashijian,callback:function(r){e.$set(e.ruleForm,"dakashijian",r)},expression:"ruleForm.dakashijian"}})],1),i("v-uni-view",{staticClass:"btn",style:{padding:"0px",margin:"40rpx 0 0",flexWrap:"wrap",background:"none",display:"flex",width:"100%",justifyContent:"center",height:"auto"}},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"0px 0px 0px #ccc",margin:"0 0 40rpx",borderColor:"#d8f5e3",color:"#333",display:"inline",minWidth:"200rpx",borderRadius:"0px",background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(226,247,234,1) 100%)",borderWidth:"2rpx",width:"100%",lineHeight:"88rpx",fontSize:"28rpx",borderStyle:"solid",fontWeight:"500",height:"88rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),i("w-picker",{ref:"dakashijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.dakashijianConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];i.d(r,"b",(function(){return t})),i.d(r,"c",(function(){return a})),i.d(r,"a",(function(){return n}))},"5ab0":function(e,r,i){"use strict";i.r(r);var n=i("112a"),t=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(r,e,(function(){return n[e]}))}(a);r["default"]=t.a},"9e8f":function(e,r,i){"use strict";var n=i("d6f2"),t=i.n(n);t.a},d6f2:function(e,r,i){var n=i("05e0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var t=i("4f06").default;t("e791dfd4",n,!0,{sourceMap:!1,shadowMode:!1})}}]);