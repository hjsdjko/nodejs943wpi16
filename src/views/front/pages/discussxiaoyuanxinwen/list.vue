<template>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view :style='{"padding":"40rpx 0","borderColor":"#21d5ae","alignItems":"flex-start","display":"block","justifyContent":"space-between","minHeight":"100vh","flexWrap":"wrap","background":"#fff","borderWidth":"0px 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
			<view class="cu-bar bg-white search" style="width:100%" :style="[{top:CustomBar + 'px'}]">
				<picker v-if="queryList.length>1" mode="selector" :range="queryList" range-key="queryName" :value="queryIndex" @change="queryChange" style="padding-left: 20upx;">
					<view><image style="width: 20upx;height: 33upx;" src="../../static/center/to.png"></image></view>
				</picker>
					<view v-if="queryIndex==0" class="search-form round">
						<text class="cuIcon-search"></text>
						<input v-model="searchForm.nickname" type="text" placeholder="用户名" ></input>
					</view>
					<view v-if="queryIndex==1" class="search-form round">
						<text class="cuIcon-search"></text>
						<input v-model="searchForm.content" type="text" placeholder="评论内容" ></input>
					</view>
				<view class="action">
					<button @tap="search" class="cu-btn shadow-blur round">搜索</button>
				</view>
			</view>
			<view :style='{"width":"100%","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>

			
			<!-- 样式1 -->
			<view class="uni-product-list" :style='{"padding":"0px 24rpx 24rpx","margin":"60rpx 0 0","flexWrap":"wrap","background":"none","flex":"1","display":"flex","width":"calc(100% - 220rpx)","justifyContent":"space-between","height":"auto"}'>
				<view @tap="onDetailTap(product)" class="uni-product" :style='{"padding":"20rpx","margin":"0 0 40rpx","borderColor":"#86ce9f #e1f9eb","borderRadius":"60rpx","flexWrap":"wrap","borderWidth":"2rpx","background":"#fff","display":"flex","width":"48%","position":"relative","borderStyle":"solid","height":"auto"}' v-for="(product,index) in list" :key="index">
					<view :style='{"width":"100%","padding":"8rpx 20rpx","justifyContent":"space-between","display":"flex","height":"auto","order":"5"}'>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('discussxiaoyuanxinwen','修改')) || (!userid && isAuthFront('discussxiaoyuanxinwen','修改'))" @click.stop="onUpdateTap(product.id)">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-edit"></text>
							<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>修改</text>
						</view>
						<view :style='{"display":"flex"}' v-if="(userid && isAuth('discussxiaoyuanxinwen','删除')) || (!userid && isAuthFront('discussxiaoyuanxinwen','删除'))" @click.stop="onDeleteTap(product.id)">
							<text :style='{"margin":"0 8rpx 0 0","fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}' class="cuIcon-delete"></text>
							<text :style='{"fontSize":"28rpx","lineHeight":"1","color":"#666","display":"inline-block"}'>删除</text>
						</view>
					</view>
				</view>
			</view>
			
			
			
			

			</view>
			
			
			
		</view>

		<button :style='{"border":"0px solid #fff","boxShadow":"0 4rpx 8rpx rgba(0,0,0,.3)","color":"#fff","bottom":"120rpx","right":"128rpx","outline":"none","borderRadius":"100%","background":"#86CE9F","width":"88rpx","lineHeight":"88rpx","fontSize":"28rpx","position":"fixed","height":"88rpx","zIndex":"9999"}' v-if="userid && isAuth('discussxiaoyuanxinwen','新增')" class="add-btn" @click="onAddTap()">新增</button>
		<button :style='{"border":"0px solid #fff","boxShadow":"0 4rpx 8rpx rgba(0,0,0,.3)","color":"#fff","bottom":"120rpx","right":"128rpx","outline":"none","borderRadius":"100%","background":"#86CE9F","width":"88rpx","lineHeight":"88rpx","fontSize":"28rpx","position":"fixed","height":"88rpx","zIndex":"9999"}' v-if="!userid && isAuthFront('discussxiaoyuanxinwen','新增')" class="add-btn" @click="onAddTap()">新增</button>
	</view>
</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				queryList:[
					{
						queryName:"用户名",
					},
					{
						queryName:"评论内容",
					},
				],
				queryIndex: 0,
				list: [],
				lists: [],
                userid: '',
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				searchForm:{},
				CustomBar: '0'
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onShow() {
			this.btnColor = this.btnColor.sort(()=> {
                                return (0.5-Math.random());
                        });
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		onLoad(options) {
            if(options.userid) {
                this.userid=options.userid;
            } else {
                this.userid = "";
            }
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		methods: {
            priceChange(price) {
                return Number(price).toFixed(2);
            },
            preHttp(str) {
                return str && str.substr(0,4)=='http';
            },
			//查询条件切换
			queryChange(e) {
				this.queryIndex=e.detail.value;
				this.searchForm.nickname="";
				this.searchForm.content="";
			},
			//类别搜索
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				// 重置分页参数页数为1
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				let params = {
					page: mescroll.num,
					limit: mescroll.size
				}
        params['sort'] = 'id';
        params['order'] = 'desc';
        params['sort'] = 'id';
        params['order'] = 'desc';
        params['sort'] = 'id';
        params['order'] = 'desc';
        params['sort'] = 'id';
        params['order'] = 'desc';
        params['sort'] = 'id';
        params['order'] = 'desc';
        params['sort'] = 'id';
        params['order'] = 'desc';


				if(this.searchForm.nickname){
					params['nickname'] = '%' + this.searchForm.nickname + '%'
				}
				if(this.searchForm.content){
					params['content'] = '%' + this.searchForm.content + '%'
				}



                let res = {}
                if(this.userid) {
                    res = await this.$api.page(`discussxiaoyuanxinwen`, params);
                } else {
                    res = await this.$api.list(`discussxiaoyuanxinwen`, params);
                }
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
			},
			// 详情
			onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
			},
			// 修改
			onUpdateTap(id){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update?id=${id}`)
			},
			// 添加
			onAddTap(){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update`)
			},
			onDeleteTap(id){
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '是否确认删除',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.del('discussxiaoyuanxinwen', JSON.stringify([id]));
							_this.hasNext = true
							// 重置分页参数页数为1
							_this.mescroll.resetUpScroll()
						}
					}
				});
			},
			// 搜索
			async search(){
				this.mescroll.num = 1
				let searchForm = {
					page: this.mescroll.num,
					limit: this.mescroll.size
				}

                searchForm['sort'] = 'id';
                searchForm['order'] = 'desc';
                searchForm['sort'] = 'id';
                searchForm['order'] = 'desc';
                searchForm['sort'] = 'id';
                searchForm['order'] = 'desc';
                searchForm['sort'] = 'id';
                searchForm['order'] = 'desc';
                searchForm['sort'] = 'id';
                searchForm['order'] = 'desc';
                searchForm['sort'] = 'id';
                searchForm['order'] = 'desc';

				if(this.searchForm.nickname){
					searchForm['nickname'] = '%' + this.searchForm.nickname + '%'
				}
				if(this.searchForm.content){
					searchForm['content'] = '%' + this.searchForm.content + '%'
				}
                let res = {};
                if(this.userid) {
                    res = await this.$api.page(`discussxiaoyuanxinwen`, searchForm);
                } else {
                    res = await this.$api.list(`discussxiaoyuanxinwen`, searchForm);
                }
				// 如果是第一页数据置空
				if (this.mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				this.mescroll.endSuccess(this.mescroll.size, this.hasNext);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.category-one .tab {
		cursor: pointer;
		padding: 0 20rpx;
		margin: 0 8rpx;
		color: #333;
		display: inline-block;
		font-size: 28rpx;
		border-color: #9fdfba;
		line-height: 80rpx;
		border-radius: 0;
		background: #edfbf3;
		width: auto;
		border-width: 0px;
		border-style: solid;
		text-align: center;
		min-width: 126rpx;
		height: 80rpx;
	}
	
	.category-one .tab.active {
		cursor: pointer;
		padding: 0 20rpx;
		margin: 0 8rpx;
		color: #333;
		font-weight: 600;
		display: inline-block;
		font-size: 28rpx;
		border-color: #9fdfba;
		line-height: 80rpx;
		border-radius: 0;
		background: #edfbf3;
		width: auto;
		border-width: 0 0 4rpx;
		border-style: solid;
		text-align: center;
		min-width: 126rpx;
		height: 80rpx;
	}
	
	.category-two .tab {
		cursor: pointer;
		padding: 0;
		margin: 0 0 20rpx;
		color: #555;
		display: inline-block;
		font-size: 28rpx;
		border-color: #cbf0f1;
		line-height: 80rpx;
		border-radius: 0px;
		background: rgba(255,255,255,1);
		width: 100%;
		border-width: 0px 0px 4rpx;
		border-style: solid;
		text-align: center;
		height: 84rpx;
	}
	
	.category-two .tab.active {
		cursor: pointer;
		padding: 0;
		margin: 0 0 20rpx;
		color: #333;
		font-weight: 600;
		display: inline-block;
		font-size: 28rpx;
		border-color: #92d5d6;
		line-height: 80rpx;
		border-radius: 0px;
		background: #ecfafb;
		width: 100%;
		border-width: 0px 0px 4rpx;
		border-style: solid;
		text-align: center;
		height: 84rpx;
	}
	
	.category-three .tab {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: burlywood;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
	
	.category-three .tab.active {
		cursor: pointer;
		padding: 0;
		color: #fff;
		background: #000;
		display: inline-block;
		width: 100%;
		font-size: 28rpx;
		line-height: 80rpx;
		text-align: center;
	}
</style>
