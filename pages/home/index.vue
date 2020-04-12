<style lang="scss" scoped>
button,
input,
select,
textarea,
input[type="text"],
input[type="password"],
input[type="number"],
input[type="tel"] {
   font-family: inherit;
   font-size: 100%;
   border: none;
   outline: none;
}
.own-newheader {
   height: 1.475rem;
   background: url("~assets/image/index-bg.png") no-repeat;
   background-size: 100%;
   .own-newheader-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.1rem;
      padding-right: 0;
      position: relative;
      overflow: hidden;
      .header-pic {
         width: 1.5rem;
         height: 0.22rem;
         img {
            width: auto;
            height: 100%;
         }
      }
      .header-quit {
         display: block;
         width: 0.93rem;
         height: 0.255rem;
         position: absolute;
         top: 0.1rem;
         right: -0.1rem;
         border-radius: 0.2rem;
         background: #e0b66d;
         display: flex;
         align-items: center;
         em {
            display: block;
            font-size: 0.12rem;
            color: rgba(255, 255, 255, 0.8);
            margin-left: 0.09rem;
         }
         .iconGroup- {
            display: block;
            margin-left: 0.04rem;
            color: #fff;
         }
      }
   }
}
.own-newbox {
   width: 100%;
   margin-top: -0.65rem;
   padding: 0 0.12rem;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
}
.own-newbox .own-main {
   -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05);
   box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05);
   background: #fff;
   border-radius: 0.07rem;
   margin: 0 auto;
   position: relative;
   overflow: hidden;
   .own-info {
      margin-top: 0.1rem;
      width: 100%;
      // height: 0.65rem;
      display: flex;
      align-items: center;
      .right {
         flex-direction: column;
         justify-content: space-between;
         width: calc(100% - 0.4rem);
         .top {
            display: flex;
            align-items: center;
         }
         .bottom {
            margin-left: 0.07rem;
            font-size: 0.12rem;
         }
      }
      .own-info-photo {
         width: 0.4rem;
         height: 0.4rem;
         border-radius: 100%;
         overflow: hidden;
         background-size: cover;
         background-position: center;
         margin-left: 0.1rem;
      }
      .own-info-nickname {
         display: block;
         max-width: 50%;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
         font-size: 0.12rem;
         line-height: 0.25rem;
         color: #666;
         margin-left: 0.07rem;
      }
      .own-info-level {
         display: block;
         font-size: 0.12rem;
         line-height: 0.25rem;
         margin-left: 0.07rem;
         color: #ff6544;
      }
   }
   .own-settle {
      width: 100%;
      padding-left: 0.2rem;
      padding-right: 0.115rem;
      padding-bottom: 0.08rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      // align-items: center;
      flex-wrap: wrap;
      .own-settle-money {
         font-size: 0.14rem;
         // line-height: 0.64rem;
         color: #333;
         .own-settle-nub {
            padding: 0 0.05rem;
            font-size: 0.35rem;
            line-height: 0.52rem;
            color: #ff6544;
            // font-family: "DIN-Medium";
         }
      }
      .c-text {
         font-size: 0.12rem;
         // color: #999;
         text-align: center;
         display: inline-block;
         margin-top: 0.18rem;
         font-family: "DIN-Regular";
      }
      .get-cash {
      }
   }
   .own-predict {
      display: flex;
      justify-content: space-between;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      box-sizing: border-box;
      font-size: 0.12rem;
      margin-bottom: 0.1rem;
      .own-predict-money {
         line-height: 0.12rem;
      }
      .own-predict-wrap {
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: center;
         width: calc((100% / 3));
      }
   }
   .own-opretion-text {
      margin: 0 0.18rem;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      display: flex;
      justify-content: space-around;
      .item {
         cursor: pointer;
         height: 1rem;
         width: 50%;
         display: flex;
         justify-content: center;
         flex-direction: column;
         .icon {
            font-size: 0.28rem;
            color: #e0b66d;
         }
         .desc {
            font-size: 0.12rem;
         }
      }
   }
   .own-missions {
      // display: flex;
      padding: 0 0.2rem;
      padding-right: 0.4rem;
      > .own-mission {
         margin-bottom: 0.2rem;
      }
   }

   .info {
      font-size: 0.13rem;
      color: #999;
      line-height: 0.25rem;
      padding: 0.14rem 0;
   }
}
.m-indexbtn .m-indexbtn-main {
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0.1rem 0.12rem;
   .m-indexbtn-right {
      width: 100%;
      height: 0.5rem;
      border-radius: 0.07rem;
      -webkit-box-shadow: 0 0 0.1rem 0.01rem #e9e9e9;
      box-shadow: 0 0 0.1rem 0.01rem #e9e9e9;
      background-image: -webkit-linear-gradient(left, #f0d19e 0, #e7bb77 100%);
      background-image: -o-linear-gradient(left, #f0d19e 0, #e7bb77 100%);
      background-image: linear-gradient(to right, #f0d19e 0, #e7bb77 100%);
      background-repeat: repeat-x;
      display: flex;
      justify-content: center;
      align-items: center;
      em {
         font-size: 0.15rem;
         color: #68400b;
         margin-left: 0.07rem;
         font-weight: 600;
      }
   }
}
.m-navlist {
   padding: 0.145rem 0 0.1rem;
   background: #fff;
   .nav-list {
      display: flex;
      padding-bottom: 0.125rem;
      .list-item {
         flex: 1;
         &:first-child {
            position: relative;
         }
         .item-link {
            background: transparent;
            display: block;
            margin: 0 auto;
            color: #333;
            cursor: pointer;
            .c-icon {
               position: relative;
               display: block;
               width: 0.225rem;
               height: 0.22rem;
               background-image: url("~assets/image/qym2.3-icons.png");
               background-repeat: no-repeat;
               background-size: 2.5rem 0.31rem;
               margin: 0 auto;
            }
            .c-icon.c-invite {
               background-position: -0.05rem -0.05rem;
            }
            .c-icon.c-myteam {
               background-position: -0.395rem -0.05rem;
            }
            .c-txt {
               display: block;
               font-size: 0.12rem;
               line-height: 0.32rem;
               text-align: center;
            }
         }
         .c-icon.c-combatTeam {
            background-image: url(~assets/image/index-combat-icon.png);
            background-size: cover;
         }
         .c-icon.c-count {
            background-position: -0.76rem -0.05rem;
         }
         .c-icon.c-detail {
            background-position: -1.11rem -0.05rem;
         }
      }
   }
}
.m-spreadbox {
   width: 100%;
   padding: 0 0.175rem;
   background: #fff;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   .m-spreadbox-main {
      border-radius: 0.07rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      h3 {
         font-size: 0.15rem;
         line-height: 0.46rem;
         color: #333;
         font-weight: bold;
         margin-bottom: 0.04rem;
      }
      .m-spreadbox-list li {
         width: 100%;
         border-bottom: 1px solid #f0f0f0;
         padding-top: 0.105rem;
         padding-bottom: 0.115rem;
         &:first-child {
            padding-top: 0;
         }
         em {
            font-size: 0.135rem;
            line-height: 0.225rem;
            color: #333;
            font-family: "DIN-Regular";
         }
         .m-list-info {
            font-size: 0.13rem;
            line-height: 0.22rem;
            color: #666;
            .card-money {
               color: #ff8150;
               font-weight: bold;
               font-family: "DIN-Medium";
            }
            .card-status {
               color: #e7bb77;
            }
         }
      }
   }
}
.copyOperation {
   cursor: pointer;
   color: #1890ff;
}
.wechat {
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
}
.qq {
   display: flex;
   align-items: center;
   cursor: pointer;
   justify-content: center;
}
</style>
<template>
   <div id="home">
      <div class="own-newheader">
         <div class="own-newheader-main">
            <div class="header-pic">
               <img src="@/assets/image/logo_2.png" />
            </div>
            <nuxt-link to="rules" tag="a" class="header-quit" rseat="810251_ocm_unionperson_helpCenter">
               <em>帮助中心</em>
               <i class="iconGroup- iconfont"></i>
            </nuxt-link>
         </div>
      </div>
      <div class="own-newbox">
         <div class="own-banner">
            <!---->
            <div class="own-main">
               <nuxt-link to="/userinfo" tag="div" class="own-info">
                  <div class="own-info-photo">
                     <img src="/male-130.png" />
                  </div>
                  <div class="right">
                     <div class="top">
                        <em class="own-info-nickname">{{userDetail?userDetail.user.username:''}}</em>
                        <em class="own-info-level">{{userDetail?userDetail.promote.level_desc:''}}</em>
                     </div>
                     <div class="bottom">UID：{{userDetail?userDetail.user.userid:''}}</div>
                  </div>
               </nuxt-link>

               <div class="own-settle" style="flex-wrap: wrap;">
                  <div class="own-settle-money">
                     可提现
                     <span class="own-settle-nub">{{userDetail?userDetail.account.price:'0'}}</span>元
                  </div>
                  <a-button class="c-text" type="link" @click="cashOut">立即提现</a-button>
               </div>
               <div class="own-predict">
                  <div class="own-predict-wrap yestoday">
                     <a-button type="link" class="own-predict-money">¥{{statistics?statistics.today_count:"0"}}</a-button>
                     <div class="own-predict-desc">今日预估</div>
                  </div>
                  <div class="own-predict-wrap yestoday">
                     <a-button type="link" class="own-predict-money">¥{{statistics?statistics.last_day_count:"0"}}</a-button>
                     <div class="own-predict-desc">昨日预估</div>
                  </div>
                  <div class="own-predict-wrap month">
                     <a-button type="link" class="own-predict-money">¥{{statistics?statistics.month_count:"0"}}</a-button>
                     <div class="own-predict-desc">本月预估</div>
                  </div>
                  <div class="own-predict-wrap last-month">
                     <a-button type="link" class="own-predict-money">¥{{statistics?statistics.last_month_count:"0"}}</a-button>
                     <div class="own-predict-desc">上月预估</div>
                  </div>
               </div>
               <!-- <div class="own-missions">
                  <a-progress type="line" class="own-mission" :percent="75" :format="percent => `${percent}个推广`" />
                  <a-progress type="line" class="own-mission" :percent="100" :format="() => '完成'" />
               </div>-->
               <div class="own-opretion-text">
                  <div class="item" @click="selfGetRp">
                     <i class="iconfont icon iconhongbao-"></i>
                     <div class="desc">自用红包</div>
                  </div>
                  <div class="item" @click="contactCustService">
                     <i class="iconfont icon iconkefu"></i>
                     <div class="desc">联系客服</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="m-indexbtn" @click="shareRP">
         <div class="m-indexbtn-main">
            <div class="m-indexbtn-right">
               <em>分享返佣红包</em>
            </div>
         </div>
      </div>
      <div class="m-navlist">
         <ul class="nav-list">
            <nuxt-link to="invite" tag="li" class="list-item">
               <button id="share-btn" class="item-link">
                  <span class="c-icon c-invite"></span>
                  <i class="c-txt">邀请推广</i>
               </button>
            </nuxt-link>
            <li class="list-item">
               <nuxt-link tag="a" to="/my_team" class="item-link">
                  <span class="c-icon c-myteam"></span>
                  <i class="c-txt">我的团队</i>
               </nuxt-link>
            </li>
            <li class="list-item">
               <nuxt-link tag="a" to="/missions" class="item-link">
                  <span class="c-icon c-combatTeam"></span>
                  <i class="c-txt">我的任务</i>
               </nuxt-link>
            </li>
            <li class="list-item">
               <nuxt-link to="/settle" tag="a" class="item-link">
                  <span class="c-icon c-count"></span>
                  <i class="c-txt">结算记录</i>
               </nuxt-link>
            </li>
            <li class="list-item">
               <nuxt-link to="/order" tag="a" class="item-link">
                  <span class="c-icon c-detail"></span>
                  <i class="c-txt">收入明细</i>
               </nuxt-link>
            </li>
         </ul>
         <!---->
      </div>
      <div class="m-spreadbox">
         <div class="m-spreadbox-main">
            <h3>推广动态</h3>
            <ul class="m-spreadbox-list">
               <empty-list :list="rebateList" offsetTop=".3rem" />

               <li v-for="item in rebateList" :key="item.id">
                  <em>{{parseTimeS(item.created_time)}}</em>
                  <div class="m-list-info">
                     {{item.from_user.username}}购买了
                     <span class="card-type">在{{item.source_type_name}}消费金额：{{item.order_price}}元</span>。您获得佣金
                     <span class="card-money">{{item.order_rebate}}</span>元
                     <span v-if="item.status=='3'" class="card-status">（{{item.status_name}}）</span>
                  </div>
               </li>
            </ul>
         </div>
      </div>
      <a-modal title="联系客服" :bodyStyle="{alignItems:'center',display:'flex',justifyContent:'space-around'}" v-model="custServiceModalVisible" :footer="null">
         <!-- <img :src="mergedImgBase64" class="promote-img" /> -->
         <div class="wechat" v-clipboard:error="onError" v-clipboard:copy="custServiceWechat" v-clipboard:success="onCopy">
            <a-icon style="color:#3BB035;font-size:.2rem;" type="wechat" />
         </div>
         <div class="qq" @click="openUrl">
            <a-icon style="color:#009FF8;font-size:.2rem;" type="qq"></a-icon>
         </div>
      </a-modal>
   </div>
</template>
<script>
import Vue from "vue";
import {
   config,
   getUserDetail,
   getRebateList,
   getStatistics
} from "../../apis/user";
import moment from "moment";
export default Vue.extend({
   name: "home",
   data() {
      return {
         custServiceWechat: "23874928379",
         config: null,
         userDetail: null,
         rebateList: [],
         statistics: null,
         custServiceModalVisible: false,
         qqCustServiceUrl: "//qq.com"
      };
   },
   computed: {},
   methods: {
      selfGetRp() {
         if (this.userDetail?.channel?.elem_share_url) {
            window.location.href = this.userDetail.channel.elem_share_url;
         }else{
            this.$message.error('跳转领取页失败，请稍后尝试')
         }
      },
      contactCustService() {
         this.custServiceModalVisible = true;
      },
      openUrl() {
         if (this.qqCustServiceUrl) {
            location.href = this.qqCustServiceUrl;
         } else {
            this.$message.error("获取客服失败，请稍后尝试");
         }
      },
      onError() {
         this.$message.error("复制失败，请手动复制");
      },
      onCopy() {
         this.$message.success("复制成功");
      },
      custService() {},
      cashOut() {
         this.$router.push("settling");
      },
      shareRP() {
         this.$router.push("share");
      },
      parseTimeS(v) {
         return moment(v * 1000).format("YYYY-M-D HH:mm:SS");
      },
      async getUserDetail() {
         try {
            let { data } = await getUserDetail();
            this.userDetail = data.data;
         } catch (error) {}
      },
      async getRebateList() {
         try {
            let { data } = await getRebateList({ time_type: 10 });
            this.rebateList = data.data.list;
         } catch (error) {
            console.log(error);
         }
      },
      async getStatistics() {
         try {
            let { data } = await getStatistics();
            this.statistics = data.data;
         } catch (error) {
            console.log(error);
         }
      }
   },
   async mounted() {
      try {
         const { data } = await config();
         this.config = data.data;
         this.getRebateList();
         this.getUserDetail();
         this.getStatistics();
      } catch (error) {
         console.log(error);
      }
   }
});
</script>