<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"0px 0 80rpx","borderColor":"#21d5ae","background":"#fff","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0 20rpx 0px","margin":"0 0 20rpx","borderColor":"#e1f9eb","borderRadius":"0px","flexWrap":"wrap","borderWidth":"2rpx","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#369555","textAlign":"right","fontWeight":"600"}' class="title">学号</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="xuehaoChange" :value="xuehaoIndex"  :range="xuehaoOptions">
					<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#666","background":"none"}' class="uni-input">{{xuehaoOptions[xuehaoIndex]}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","margin":"0 0 20rpx","borderColor":"#e1f9eb","borderRadius":"0px","flexWrap":"wrap","borderWidth":"2rpx","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#369555","textAlign":"right","fontWeight":"600"}' class="title">学生姓名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx"}' :disabled="ro.xueshengxingming" v-model="ruleForm.xueshengxingming" placeholder="学生姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","margin":"0 0 20rpx","borderColor":"#e1f9eb","borderRadius":"0px","flexWrap":"wrap","borderWidth":"2rpx","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#369555","textAlign":"right","fontWeight":"600"}' class="title">性别</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx"}' :disabled="ro.xingbie" v-model="ruleForm.xingbie" placeholder="性别"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","margin":"0 0 20rpx","borderColor":"#e1f9eb","borderRadius":"0px","flexWrap":"wrap","borderWidth":"2rpx","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#369555","textAlign":"right","fontWeight":"600"}' class="title">学院</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx"}' :disabled="ro.xueyuan" v-model="ruleForm.xueyuan" placeholder="学院"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","margin":"0 0 20rpx","borderColor":"#e1f9eb","borderRadius":"0px","flexWrap":"wrap","borderWidth":"2rpx","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#369555","textAlign":"right","fontWeight":"600"}' class="title">年级</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx"}' :disabled="ro.nianji" v-model="ruleForm.nianji" placeholder="年级"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","margin":"0 0 20rpx","borderColor":"#e1f9eb","borderRadius":"0px","flexWrap":"wrap","borderWidth":"2rpx","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#369555","textAlign":"right","fontWeight":"600"}' class="title">班级</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx"}' :disabled="ro.banji" v-model="ruleForm.banji" placeholder="班级"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","margin":"0 0 20rpx","borderColor":"#e1f9eb","borderRadius":"0px","flexWrap":"wrap","borderWidth":"2rpx","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#369555","textAlign":"right","fontWeight":"600"}' class="title">寝室号</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx"}' :disabled="ro.qinshihao" v-model="ruleForm.qinshihao" placeholder="寝室号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","margin":"0 0 20rpx","borderColor":"#e1f9eb","borderRadius":"0px","flexWrap":"wrap","borderWidth":"2rpx","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","display":"flex","width":"100%","lineHeight":"100rpx","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx 0 0","fontSize":"28rpx","color":"#369555","textAlign":"right","fontWeight":"600"}' class="title">床位号</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx"}' :disabled="ro.chuangweihao" v-model="ruleForm.chuangweihao" placeholder="床位号"></input>
			</view>
			
			<!-- 否 -->
 

			
			
			<view :style='{"padding":"0px","margin":"40rpx 0 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"center","height":"auto"}' class="btn" >
				<button :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px #ccc","margin":"0 0 40rpx","borderColor":"#d8f5e3","color":"#333","display":"inline","minWidth":"200rpx","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(226,247,234,1) 100%)","borderWidth":"2rpx","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","borderStyle":"solid","fontWeight":"500","height":"88rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				xuehao: '',
				xueshengxingming: '',
				xingbie: '',
				xueyuan: '',
				nianji: '',
				banji: '',
				qinshihao: '',
				chuangweihao: '',
				},
				xuehaoOptions: [],
				xuehaoIndex: 0,
				// 登录用户信息
				user: {},
                ro:{
                   xuehao : false,
                   xueshengxingming : false,
                   xingbie : false,
                   xueyuan : false,
                   nianji : false,
                   banji : false,
                   qinshihao : false,
                   chuangweihao : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor,
            multipleSelect
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下2
			res = await this.$api.option(`xuesheng`,`xuehao`,{});
			this.xuehaoOptions = res.data;

			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`susheanpai`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='xuehao'){
					this.ruleForm.xuehao = obj[o];
					this.ro.xuehao = true;
					continue;
					}
					if(o=='xueshengxingming'){
					this.ruleForm.xueshengxingming = obj[o];
					this.ro.xueshengxingming = true;
					continue;
					}
					if(o=='xingbie'){
					this.ruleForm.xingbie = obj[o];
					this.ro.xingbie = true;
					continue;
					}
					if(o=='xueyuan'){
					this.ruleForm.xueyuan = obj[o];
					this.ro.xueyuan = true;
					continue;
					}
					if(o=='nianji'){
					this.ruleForm.nianji = obj[o];
					this.ro.nianji = true;
					continue;
					}
					if(o=='banji'){
					this.ruleForm.banji = obj[o];
					this.ro.banji = true;
					continue;
					}
					if(o=='qinshihao'){
					this.ruleForm.qinshihao = obj[o];
					this.ro.qinshihao = true;
					continue;
					}
					if(o=='chuangweihao'){
					this.ruleForm.chuangweihao = obj[o];
					this.ro.chuangweihao = true;
					continue;
					}
				}
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},
			// 下二随
			async xuehaoChange (e) {
				this.xuehaoIndex = e.target.value
				this.ruleForm.xuehao = this.xuehaoOptions[this.xuehaoIndex]
				let res = await this.$api.follow(`xuesheng`, `xuehao`,{
					columnValue: this.ruleForm.xuehao
				});
				if(res.data.xueshengxingming){
					this.ruleForm.xueshengxingming = res.data.xueshengxingming
				}
				if(res.data.xingbie){
					this.ruleForm.xingbie = res.data.xingbie
				}
				if(res.data.xueyuan){
					this.ruleForm.xueyuan = res.data.xueyuan
				}
				if(res.data.nianji){
					this.ruleForm.nianji = res.data.nianji
				}
				if(res.data.banji){
					this.ruleForm.banji = res.data.banji
				}
			},

			// 多级联动参数





			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {

















//跨表计算判断
				var obj;
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
                    uni.setStorageSync('crossCleanType',true);
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`susheanpai`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
                        uni.removeStorageSync('crossCleanType');
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`susheanpai`, this.ruleForm);
						}else{
							await this.$api.add(`susheanpai`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`susheanpai`, this.ruleForm);
					}else{
						await this.$api.add(`susheanpai`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
