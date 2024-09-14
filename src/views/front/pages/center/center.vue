<template>
	<view class="content">
		<view :style='{"minHeight":"100vh","padding":"0px 0 120rpx","borderColor":"#21d5ae","flexWrap":"wrap","background":"#fff","borderWidth":"0px 0 0","display":"block","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
			<view :style='{"padding":"40rpx 40rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #f7dcab","margin":"0px auto 20rpx","borderColor":"#e9be70","display":"flex","justifyContent":"space-between","borderRadius":"0","flexWrap":"wrap","background":"none","borderWidth":"0px 0px 0px 0px","width":"calc(100% - 0px)","position":"relative","borderStyle":"solid","height":"auto"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"padding":"0","margin":"0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 0px)","position":"static","height":"auto","order":"2"}' v-if="tableName=='xuesheng'" class="userinfo">
					<image :style='{"padding":"0px","margin":"0px 0 20rpx","borderColor":"#1bd0a9","objectFit":"cover","textAlign":"center","right":"100rpx","borderRadius":"100%","top":"80rpx","background":"rgba(255,255,255,.6)","borderWidth":"0px","width":"120rpx","position":"absolute","borderStyle":"solid","height":"120rpx","zIndex":"999"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"padding":"36rpx 16rpx 60rpx 40rpx","margin":"0 auto","borderColor":"#86ce9f #e1f9eb","flexDirection":"column","display":"block","float":"left","justifyContent":"center","minHeight":"324rpx","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20230410/9f502c94c8b84bc0aea8e0b413fa7698.png) repeat-x 0% 100%,#f5fdf8","borderWidth":"8rpx 2rpx 0","width":"100%","borderStyle":"solid","height":"auto"}' class="info">
						<view :style='{"padding":"4rpx 8rpx","borderColor":"#eecece","margin":"0 0 0px","color":"#369555","borderWidth":"0 0 0px","width":"90%","lineHeight":"60rpx","fontSize":"28rpx","borderStyle":"dashed","fontWeight":"600"}'>{{user.xuehao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
				</view>
				<view :style='{"padding":"20rpx 0 0","margin":"0px 0 0","borderColor":"#1bd0a9","alignItems":"flex-start","display":"flex","right":"80rpx","justifyContent":"center","top":"220rpx","background":"none","borderWidth":"0px","width":"160rpx","position":"absolute","borderStyle":"solid","height":"auto"}' class="setting">
					<view :style='{"border":"0","width":"80rpx","lineHeight":"80rpx","fontSize":"80rpx","color":"#369555","borderRadius":"0"}' class="cuIcon-settings"></view>
				</view>
			</view>
		
		
			<view :style='{"padding":"0px 24rpx 80rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 auto","borderColor":"#1bd0a9","display":"block","justifyContent":"space-between","overflow":"hidden","borderRadius":"0px","flexWrap":"wrap","background":"#fff","borderWidth":"0px 0px 0px 0px","width":"calc(100% - 48rpx)","borderStyle":"solid","height":"auto"}' class="list">

				<block v-for="item in menuList" v-bind:key="item.roleName">
					<block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.backMenu">
						<block v-bind:key="sort" v-for=" (child,sort) in menu.child">
							<view :style='{"padding":"0 40rpx 0px","borderColor":"#e1f9eb","margin":"0 0 20rpx","alignItems":"center","display":"flex","float":"left","borderRadius":"0px","borderWidth":"2rpx","background":"linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(245,253,248,1) 100%)","width":"100%","lineHeight":"88rpx","borderStyle":"solid","height":"100rpx"}' v-if="child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id+'&menuJump='+child.menuJump)" class="li" hover-class="hover">
								<view v-if="true" :style='{"width":"88rpx","lineHeight":"88rpx","fontSize":"56rpx","color":"#369555"}' :class="child.appFrontIcon"></view>
								<view :style='{"padding":"0 8rpx","color":"#369555","flex":"1","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","fontWeight":"500"}' class="text">{{child.menu}}</view>
								<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"32rpx","color":"#369555"}' class="cuIcon-right"></view>
							</view>
						</block>
					</block>
				</block>


			</view>
		</view>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
        iconArr: [
          'cuIcon-same',
          'cuIcon-deliver',
          'cuIcon-evaluate',
          'cuIcon-shop',
          'cuIcon-ticket',
          'cuIcon-cascades',
          'cuIcon-discover',
          'cuIcon-question',
          'cuIcon-pic',
          'cuIcon-filter',
          'cuIcon-footprint',
          'cuIcon-pulldown',
          'cuIcon-pullup',
          'cuIcon-moreandroid',
          'cuIcon-refund',
          'cuIcon-qrcode',
          'cuIcon-remind',
          'cuIcon-profile',
          'cuIcon-home',
          'cuIcon-message',
          'cuIcon-link',
          'cuIcon-lock',
          'cuIcon-unlock',
          'cuIcon-vip',
          'cuIcon-weibo',
          'cuIcon-activity',
          'cuIcon-friendadd',
          'cuIcon-friendfamous',
          'cuIcon-friend',
          'cuIcon-goods',
          'cuIcon-selection'
        ],
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(){
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		methods: {
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
</style>
