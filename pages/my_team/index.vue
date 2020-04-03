<style lang="scss" scoped>
/deep/ .ant-tabs-nav .ant-tabs-tab:hover {
   color: #f0d19e;
}
/deep/ .ant-tabs-nav .ant-tabs-tab-active {
   color: #f0d19e;
   font-weight: 500;
}
/deep/ .ant-tabs-ink-bar {
   background-color: #f0d19e;
}
/deep/ .ant-tabs-bar {
   margin-bottom: 0;
}
/deep/ .header {
   height: auto;
}
.counts {
   display: flex;
   flex-direction: column;
   padding: 0.15rem 0.15rem;
   .desc {
      color: #a0804a;
   }
   .digit {
      text-align: center;
      font-weight: bold;
      color: #f14141;
   }
   .counts-top,
   .counts-bottom {
      display: flex;
      justify-content: center;
      color: #a0804a;
   }
   .counts-bottom {
      justify-content: space-between;
      margin-top: 0.2rem;
   }
   .counts-user-total {
      margin-right: 0.5rem;
   }
}
.level-counts {
   align-items: center;
   display: flex;
   justify-content: space-around;
   height: 1rem;
   border-bottom: 1px solid #e5e5e5;
   .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .digit {
         font-size: 0.16rem;
         font-weight: bold;
      }
   }
}
.user-detail {
   .title {
      padding-left: 0.1rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;
      height: 0.4rem;
      .help {
         margin-left: 0.2rem;
         font-weight: bold;
      }
   }
   .item-wrap {
      height: calc(100vh - 0.5rem - 0.45rem - 1.475rem - 1rem);
      background-color: #f7f7f7;
      .item {
         padding: 0.1rem;
         height: 1.4rem;
         background-color: #fff;
         margin-bottom: 0.1rem;
         overflow: hidden;
         margin-bottom: 0.1rem;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         &:last-child {
            margin-bottom: 0;
         }
         .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .nickname {
               font-size: 0.18rem;
            }
            .createdtime {
               color: #cccccc;
            }
         }
         .middle {
            display: flex;
            justify-content: space-between;
            margin-top: 0.1rem;
            .count-item {
               font-size: 0.14rem;
               display: flex;
               font-weight: bold;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               .desc {
                  font-size: 0.13rem;
               }
               .digit {
                  font-size: 0.16rem;
               }
            }
         }
         .bottom {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            // height: .4rem;
            font-size: 0.13rem;
            font-weight: bold;
         }
      }
   }
}
</style>
<template>
   <div id="myTeam">
      <GoldTitle title="我的团队" />
      <div class="tabs-wrap">
         <a-tabs :defaultActiveKey="teamType" @change="callback">
            <a-tab-pane :forceRender="true" tab="直邀" :key="1">
               <GoleHeader>
                  <div class="counts">
                     <div class="counts-top">
                        <div class="counts-user-total">
                           <div class="digit">{{directTeamStatistics.user_count}}</div>
                           <div class="desc">总计人数</div>
                        </div>
                        <div class="counts-user-effective">
                           <div class="digit">{{directTeamStatistics.user_effective_count}}</div>
                           <div class="desc">有效用户</div>
                        </div>
                     </div>
                     <div class="counts-bottom">
                        <div class="item">今日新增：{{directTeamStatistics.user_day_count}}人</div>
                        <div class="item">7日新增：{{directTeamStatistics.user_week_count}}人</div>
                        <div class="item">30日新增：{{directTeamStatistics.user_month_count}}人</div>
                     </div>
                  </div>
               </GoleHeader>

               <div class="level-counts">
                  <div class="item">
                     <div class="digit">{{directTeamStatistics.first_level_count}}人</div>
                     <div class="desc">体验会员</div>
                  </div>
                  <div class="item">
                     <div class="digit">{{directTeamStatistics.sec_level_count}}人</div>
                     <div class="desc">初级会员</div>
                  </div>
                  <div class="item">
                     <div class="digit">{{directTeamStatistics.thr_level_count}}人</div>
                     <div class="desc">中级会员</div>
                  </div>
                  <div class="item">
                     <div class="digit">{{directTeamStatistics.forth_level_count}}人</div>
                     <div class="desc">高级会员</div>
                  </div>
               </div>
               <div class="user-detail">
                  <div class="title">
                     成员明细
                     <i class="iconfont iconbangzhu help"></i>
                  </div>
                  <div class="item-wrap">
                     <Scroll
                        :pullDownConfig="{threshold: 20,stop: 40, txt: '刷新成功'}"
                        @pullingUp="handleDirectPullingUp"
                        @pullingDown="handleDirectPullingDown"
                        :updateData="directTeamList"
                        ref="directScroll"
                     >
                        <empty-list :list="directTeamList" offsetTop=".3rem" />
                        <div class="item" v-for="item in directTeamList" :key="item.userid">
                           <div class="top">
                              <div class="self-info">
                                 <div class="nickname">{{item.user.username}}</div>
                                 <!-- <div class="createdtime">2020-1-5 15:15:15</div> -->
                              </div>
                              <i class="iconfont iconyou"></i>
                           </div>
                           <div class="middle">
                              <div class="count-item">
                                 <div class="desc">今日预估</div>
                                 <div class="digit">¥{{item.yesterday_order_rebate}}</div>
                              </div>
                              <div class="count-item">
                                 <div class="desc">本月预估</div>
                                 <div class="digit">¥{{item.month_order_rebate}}</div>
                              </div>
                              <div class="count-item">
                                 <div class="desc">今日直邀</div>
                                 <div class="digit">{{item.user_today_count}}人</div>
                              </div>
                              <div class="count-item">
                                 <div class="desc">本月直邀</div>
                                 <div class="digit">{{item.user_count}}人</div>
                              </div>
                           </div>
                           <div class="bottom">
                              邀请明细
                              <i class="iconfont iconyou"></i>
                           </div>
                        </div>
                     </Scroll>
                  </div>
               </div>
            </a-tab-pane>
            <a-tab-pane tab="其他" :key="2" :forceRender="true">
               <GoleHeader>
                  <div class="counts">
                     <div class="counts-top">
                        <div class="counts-user-total">
                           <div class="digit">{{indirectTeamStatistics.user_count}}</div>
                           <div class="desc">总计人数</div>
                        </div>
                        <div class="counts-user-effective">
                           <div class="digit">{{indirectTeamStatistics.user_effective_count}}</div>
                           <div class="desc">有效用户</div>
                        </div>
                     </div>
                     <div class="counts-bottom">
                        <div class="item">今日新增：{{indirectTeamStatistics.user_day_count}}人</div>
                        <div class="item">7日新增：{{indirectTeamStatistics.user_week_count}}人</div>
                        <div class="item">30日新增：{{indirectTeamStatistics.user_month_count}}人</div>
                     </div>
                  </div>
               </GoleHeader>

               <div class="level-counts">
                  <div class="item">
                     <div class="digit">{{indirectTeamStatistics.first_level_count}}人</div>
                     <div class="desc">体验会员</div>
                  </div>
                  <div class="item">
                     <div class="digit">{{indirectTeamStatistics.sec_level_count}}人</div>
                     <div class="desc">初级会员</div>
                  </div>
                  <div class="item">
                     <div class="digit">{{indirectTeamStatistics.thr_level_count}}人</div>
                     <div class="desc">中级会员</div>
                  </div>
                  <div class="item">
                     <div class="digit">{{indirectTeamStatistics.forth_level_count}}人</div>
                     <div class="desc">高级会员</div>
                  </div>
               </div>
               <div class="user-detail">
                  <div class="title">
                     成员明细
                     <i class="iconfont iconbangzhu help"></i>
                  </div>
                  <div class="item-wrap">
                     <Scroll
                        :pullDownConfig="{threshold: 20,stop: 40, txt: '刷新成功'}"
                        @pullingUp="handleIndirectPullingUp"
                        @pullingDown="handleIndirectPullingDown"
                        :updateData="indirectTeamList"
                        ref="indirectScroll"
                     >
                        <empty-list :list="indirectTeamList" offsetTop=".3rem" />
                        <div class="item" v-for="item in indirectTeamList" :key="item.userid">
                           <div class="top">
                              <div class="self-info">
                                 <div class="nickname">{{item.user.username}}</div>
                                 <!-- <div class="createdtime">2020-1-5 15:15:15</div> -->
                              </div>
                              <i class="iconfont iconyou"></i>
                           </div>
                           <div class="middle">
                              <div class="count-item">
                                 <div class="desc">今日预估</div>
                                 <div class="digit">¥{{item.yesterday_order_rebate}}</div>
                              </div>
                              <div class="count-item">
                                 <div class="desc">本月预估</div>
                                 <div class="digit">¥{{item.month_order_rebate}}</div>
                              </div>
                              <div class="count-item">
                                 <div class="desc">今日直邀</div>
                                 <div class="digit">{{item.user_today_count}}人</div>
                              </div>
                              <div class="count-item">
                                 <div class="desc">本月直邀</div>
                                 <div class="digit">{{item.user_count}}人</div>
                              </div>
                           </div>
                           <div class="bottom">
                              邀请明细
                              <i class="iconfont iconyou"></i>
                           </div>
                        </div>
                     </Scroll>
                  </div>
               </div>
            </a-tab-pane>
         </a-tabs>
      </div>
   </div>
</template>
<script>
import GoldTitle from "@/components/GoldTitle";
import GoleHeader from "@/components/GoldHeader";
import Vue from "vue";
import Scroll from "vue-slim-better-scroll";
import { getTeamList, getTeamStatistics } from "@/apis/user";
export default Vue.extend({
   name: "myTeam",
   components: {
      GoldTitle,
      GoleHeader,
      Scroll
   },
   data() {
      return {
         teamType: 1,
         directPage: 1,
         indirectPage: 1,
         directTeamList: [],
         indirectTeamList: [],
         directTeamListNoMore: false,
         indirectTeamListNoMore: false,
         directTeamStatistics: {
            user_count: "0",
            user_effective_count: "0",
            user_day_count: "0",
            user_week_count: "0",
            user_month_count: "0",
            first_level_count: "0",
            sec_level_count: "1",
            thr_level_count: "0",
            forth_level_count: "0"
         },
         indirectTeamStatistics: {
            user_count: "0",
            user_effective_count: "0",
            user_day_count: "0",
            user_week_count: "0",
            user_month_count: "0",
            first_level_count: "0",
            sec_level_count: "1",
            thr_level_count: "0",
            forth_level_count: "0"
         }
      };
   },
   methods: {
      async getDirectTeamList(beforeInject) {
         try {
            let { data } = await getTeamList(this.teamType, this.directPage);
            beforeInject && beforeInject(data);
            if (!data.data.length) {
               this.directTeamListNoMore = true;
               this.$refs.directScroll.update(true);
               return;
            }
            this.directTeamList = [...this.directTeamList, ...data.data];
         } catch (error) {}
      },
      async getIndirectTeamList(beforeInject) {
         try {
            let { data } = await getTeamList(2, this.indirectPage);
            beforeInject && beforeInject(data);
            if (!data.data.length) {
               this.indirectTeamListNoMore = true;
               this.$refs.indirectScroll.update(true);
               return;
            }
            this.indirectTeamList = [...this.indirectTeamList, ...data.data];
         } catch (error) {}
      },
      async getDirectTeamStatistics() {
         try {
            let { data } = await getTeamStatistics(1);
            this.directTeamStatistics = data.data;
         } catch (error) {}
      },
      async getIndirectTeamStatistics() {
         try {
            let { data } = await getTeamStatistics(2);
            this.indirectTeamStatistics = data.data;
         } catch (error) {}
      },
      async handleDirectPullingUp() {
         try {
            this.directPage++;
            await this.getDirectTeamList();
         } catch (error) {}
      },
      async handleDirectPullingDown() {
         this.directPage = 1;
         try {
            await this.getDirectTeamList(() => {
               this.directTeamList = [];
            });
         } catch (error) {}
      },
      async handleIndirectPullingUp() {
         try {
            this.indirectPage++;
            await this.getIndirectTeamList();
         } catch (error) {}
      },
      async handleIndirectPullingDown() {
         try {
            this.indirectPage = 1;
            await this.getIndirectTeamList(() => {
               this.indirectTeamList = [];
            });
         } catch (error) {}
      },
      callback(v) {
         this.teamType = v;
      }
   },
   mounted() {
      this.getDirectTeamList();
      this.getIndirectTeamList();
      this.getDirectTeamStatistics();
   }
});
</script>