<style lang="scss" scoped>
/deep/ .ant-tabs-nav-scroll {
   display: flex;
   justify-content: space-around;
}
.order-drawer /deep/ .ant-drawer-body {
   padding: 0.1rem !important;
}
/deep/ .ant-tabs-top-bar {
   margin-bottom: 0;
}
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
#order {
   background-color: #f5f5f5;
   height: calc(100vh);
}
.selector-item {
   height: 0.4rem;
   width: 100%;
   line-height: 0.4rem;
   &:hover {
      background-color: #f0d19e;
      color: #fff;
   }
   &.selected {
      background-color: #f0d19e;
      color: #fff;
   }
}
.sub-tabs {
   display: flex;
   justify-content: space-between;
   padding: 0.1rem;
   .sub-tabs-item {
      padding: 0.02rem 0.15rem;
      border-radius: 0.5rem;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      &.selected {
         background-color: #f0d19e;
         color: #fff;
         border-color: #f0d19e;
      }
   }
}
.count {
   display: flex;
   justify-content: space-between;
   height: 0.8rem;
   overflow: hidden;
   .order-item {
      height: 100%;
      background-color: #fff;
      width: calc((100% - 1.2rem) / 2);
      padding: 0.15rem 0.05rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      .count-top {
         color: rgb(160, 160, 160);
      }
      .count-digit {
         width: 100%;
         color: #333;
         text-overflow: ellipsis;
         white-space: nowrap;
         overflow: hidden;
         // font-weight: bold;
         font-size: 0.18rem;
         text-align: center;
         &.count-digit-real-money {
            color: rgb(221, 15, 15);
         }
      }
   }
   .count-order {
      width: 1.2rem;
   }
   .count-order-money {
   }
   .count-expected-income {
   }
}
.scroll-wrap {
   height: calc(100vh - 0.8rem - 0.44rem - 0.46rem - 0.47rem - 0.1rem);
   margin-top: 0.1rem;
   background-color: #f5f5f5;
   // padding-bottom: .3rem;
   box-sizing: border-box;
}
.order-item {
   background-color: #fff;
   padding: 0.15rem 0.1rem;
   margin-top: 0.1rem;
   &:last-child {
      margin-bottom: 0.3rem;
   }
   .order-top-bar {
      display: flex;
      .order-top-img {
         width: 0.6rem;
         height: 0.6rem;
         img {
            height: 100%;
            width: 100%;
         }
      }
      .order-top-info {
         margin-left: 0.1rem;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         width: calc(100% - 0.1rem - 0.6rem);
         // justify-content: space-between;
         // padding: 0.06rem 0.1rem;
         .status {
            padding: 0 0.1rem;
            border-radius: 1rem;
            color: #fff;
            font-size: 0.12rem;
            background: #2ec7c9;
            margin-top: .05rem;
            &.success {
               background-color: #f0d19e;
            }
            &.fail {
               background-color: #f5222d;
            }
         }
         .good-title {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 0.12rem;
         }
      }
   }
   .order-body {
      margin-top: 0.1rem;
      display: flex;
      justify-content: space-between;
      .item {
         text-align: center;
         width: 25%;
         .digit {
            font-size: 0.14rem;
            &.money{
               color:#f5222d;
            }
         }
         .desc {
            color:#a0a0a0;
            font-size: .13rem;
         }
      }
   }
   .order-foot {
      display: flex;
      justify-content: space-between;
      margin-top: 0.1rem;
      font-size: 0.12rem;
      color: #ccc;
   }
}
</style>
<template>
   <div id="order">
      <GoldTitle>
         <span @click="drawerVisible=true" style="display:inline-block;width:2rem;cursor:pointer;">
            {{findType}}
            <i style="margin-right:-.1rem;" class="iconfont iconxiangxia"></i>
         </span>
      </GoldTitle>
      <a-drawer :bodyStyle="{padding:'0'}" height="auto" @close="onClose" placement="top" :closable="false" :visible="drawerVisible">
         <div class="selector-wrap">
            <li
               class="selector-item"
               :class="{selected:type.type==choosedType}"
               @click="changeType(type.type)"
               v-for=" type in types"
               :key="type.type"
            >{{type.name}}</li>
         </div>
      </a-drawer>
      <a-spin :spinning="loading">
         <a-tabs @change="handlleTabChange" :tabBarStyle="{backgroundColor:'#fff'}">
            <a-tab-pane :forceRender="true" tab="我的订单" :key="1">
               <div class="sub-tabs">
                  <div
                     class="sub-tabs-item"
                     :class="{selected:time.type==ownChoosedTimeRangeType}"
                     v-for="time in timeRanges"
                     @click="ownChangeTimeRange(time.type)"
                     :key="time.type"
                  >{{time.name}}</div>
               </div>
               <div class="count">
                  <div class="count-order order-item">
                     <div class="count-top">订单数</div>
                     <div class="count-digit">{{ownCountData.order_count}}</div>
                  </div>
                  <div class="count-order-money order-item">
                     <div class="count-top">付款金额</div>
                     <div class="count-digit">¥{{ownCountData.order_price}}</div>
                  </div>
                  <div class="count-expected-income order-item">
                     <div class="count-top">预估收入</div>
                     <div class="count-digit count-digit-real-money">¥{{ownCountData.order_rebate}}</div>
                  </div>
               </div>
               <div class="scroll-wrap">
                  <Scroll
                     :pullUpConfig="{threshold: 20, txt: { more: '上拉加载', noMore: '— 我是有底线的 —'}}"
                     ref="ownScroll"
                     :updateData="ownOrders"
                     @pullingDown="ownLoadRefresh"
                     @pullingUp="ownLoadMore"
                  >
                     <empty-list :list="ownOrders" offsetTop=".3rem" />
                     <div class="order-item" v-for="order in ownOrders" :key="order.id">
                        <div class="order-top-bar">
                           <div class="order-top-img">
                              <img :src="order.info.img" :alt="order.info.title" :title="order.info.title" />
                           </div>
                           <div class="order-top-info">
                              <div class="good-title" :title="order.info.title">{{order.info.title}}</div>
                              <div class="status" :class="{success:order.status==1,fail:order.status==2}">{{order.status_name}}</div>
                           </div>
                        </div>
                        <div class="order-body">
                           <div class="item">
                              <div class="digit">{{order.order_price}}</div>
                              <div class="desc">付款金额</div>
                           </div>
                           <div class="item">
                              <div class="digit money">{{order.order_rebate}}</div>
                              <div class="desc">预估收入</div>
                           </div>
                           <div class="item">
                              <div class="digit">{{order.relation_type_name}}</div>
                              <div class="desc">推广类型</div>
                           </div>
                           <div class="item">
                              <div class="digit">{{order.source_type_name}}</div>
                              <div class="desc">消费平台</div>
                           </div>
                        </div>
                        <div class="order-foot">
                           <div class="order-num">{{order.sn}}</div>
                           <div class="order-time">{{parseTimeS(order.created_time)}}付款</div>
                        </div>
                     </div>
                  </Scroll>
               </div>
            </a-tab-pane>
            <a-tab-pane :forceRender="true" tab="团队订单" :key="2">
               <div class="sub-tabs">
                  <div
                     class="sub-tabs-item"
                     :class="{selected:time.type==groupChoosedTimeRangeType}"
                     v-for="time in timeRanges"
                     @click="groupChangeTimeRange(time.type)"
                     :key="time.type"
                  >{{time.name}}</div>
               </div>
               <div class="count">
                  <div class="count-order order-item">
                     <div class="count-top">订单数</div>
                     <div class="count-digit">{{groupCountData.order_count}}</div>
                  </div>
                  <div class="count-order-money order-item">
                     <div class="count-top">付款金额</div>
                     <div class="count-digit">¥{{groupCountData.order_price}}</div>
                  </div>
                  <div class="count-expected-income order-item">
                     <div class="count-top">预估收入</div>
                     <div class="count-digit count-digit-real-money">¥{{groupCountData.order_rebate}}</div>
                  </div>
               </div>
               <div class="scroll-wrap">
                  <Scroll ref="groupScroll" :updateData="groupOrders" @pullingDown="groupLoadRefresh" @pullingUp="groupLoadMore">
                     <empty-list :list="groupOrders" offsetTop=".3rem" />
                     <div class="order-item" v-for="order in groupOrders" :key="order.id">
                        <div class="order-top-bar">
                           <div class="order-top-img">
                              <img :src="order.info.img" :alt="order.info.title" :title="order.info.title" />
                           </div>
                           <div class="order-top-info">
                              <div class="good-title" :title="order.info.title">{{order.info.title}}</div>
                              <div class="status" :class="{success:order.status==1,fail:order.status==2}">{{order.status_name}}</div>
                           </div>
                        </div>
                        <div class="order-body">
                           <div class="item">
                              <div class="digit">{{order.order_price}}</div>
                              <div class="desc">付款金额</div>
                           </div>
                           <div class="item">
                              <div class="digit money">{{order.order_rebate}}</div>
                              <div class="desc">预估收入</div>
                           </div>
                           <div class="item">
                              <div class="digit">{{order.relation_type_name}}</div>
                              <div class="desc">推广类型</div>
                           </div>
                           <div class="item">
                              <div class="digit">{{order.source_type_name}}</div>
                              <div class="desc">消费平台</div>
                           </div>
                        </div>
                        <div class="order-foot">
                           <div class="order-num">{{order.sn}}</div>
                           <div class="order-time">{{parseTimeS(order.created_time)}}付款</div>
                        </div>
                     </div>
                  </Scroll>
               </div>
            </a-tab-pane>
            <!-- <a-button slot="tabBarExtraContent">Extra Action</a-button> -->
         </a-tabs>
      </a-spin>
   </div>
</template>
<script>
import Scroll from "vue-slim-better-scroll";
import GoldTitle from "@/components/GoldTitle";
import { getRebateList, getRebateStatic } from "@/apis/user";
import moment from "moment";
export default {
   name: "order",
   components: {
      GoldTitle,
      Scroll
   },
   data() {
      return {
         drawerVisible: false,
         mode: "top",
         types: [
            {
               name: "饿了么",
               type: 1
            },
            {
               name: `美   团`,
               type: 2
            }
         ],
         loading: false,
         choosedType: 1,
         timeRanges: [
            {
               type: 7,
               name: "今 日"
            },
            {
               type: 1,
               name: "昨 日"
            },
            {
               type: 5,
               name: "本 月"
            },
            {
               type: 6,
               name: "上 月"
            }
         ],
         ownOrders: [],
         groupOrders: [],
         ownPageSize: 10,
         ownPageNumber: 1,
         groupPageSize: 10,
         groupPageNumber: 1,
         choosedTab: 1,
         ownCountData: { order_count: 0, order_price: 0, order_rebate: 0 },
         groupCountData: { order_count: 0, order_price: 0, order_rebate: 0 },
         /**
          * 1 昨日   2 前日   3 本周   4 上周   5 本月   6上月   7今日
          */
         ownChoosedTimeRangeType: 7,
         groupChoosedTimeRangeType: 7
      };
   },
   computed: {
      findType() {
         return this.types.find(e => {
            return e.type == this.choosedType;
         }).name;
      }
   },
   methods: {
      parseTimeS(v) {
         return moment(v * 1000).format("YYYY年M月D日 HH:mm");
      },
      handlleTabChange(key) {
         this.choosedTab = key;

      },
      async getRebateStatic() {
         let choosedTimeRange;
         this.loading = true;
         try {
            if (this.choosedTab == 1) {
               choosedTimeRange = this.ownChoosedTimeRangeType;
               let { data } = await getRebateStatic(
                  choosedTimeRange,
                  this.choosedTab,
                  this.choosedType
               );
               this.ownCountData = data.data;
            } else {
               choosedTimeRange = this.groupChoosedTimeRangeType;
               let { data } = await getRebateStatic(
                  choosedTimeRange,
                  this.choosedTab,
                  this.choosedType
               );
               this.groupCountData = data.data;
            }
         } catch (error) {
         } finally {
            this.loading = false;
         }
      },
      async getOwnRebateList() {
         this.loading = true;

         try {
            let { data } = await getRebateList({
               pageSize: this.ownPageSize,
               pageNumber: this.ownPageNumber,
               type: this.choosedType,
               from_type: 1,
               time_type: this.ownChoosedTimeRangeType
            });
            if (!data.data.list.length) {
               // this.$message.warning("没有数据了");
               this.$refs.ownScroll.update(true);
               return [];
            }
            this.ownOrders.push(...data.data.list);
            this.$refs.ownScroll.update(false);
            return data.data.list;
         } catch (error) {
            console.log(error);
         } finally {
            this.loading = false;
         }
      },
      async getGroupRebateList() {
         let { data } = await getRebateList({
            pageSize: this.groupPageSize,
            pageNumber: this.groupPageNumber,
            type: this.choosedType,
            from_type: 2,
            time_type: this.groupChoosedTimeRangeType
         });

         if (!data.data.list.length) {
            this.$refs.groupScroll.update(true);
            return [];
         }
         this.groupOrders.push(...data.data.list);
         this.$refs.groupScroll.update(false);
         return data.data.list;
      },
      ownLoadRefresh() {
         this.ownPageNumber = 1;
         this.ownOrders = [];
         this.getOwnRebateList();
      },
      groupLoadRefresh() {
         this.groupPageNumber = 1;
         this.groupOrders = [];
         this.getGroupRebateList();
      },
      async ownLoadMore() {
         this.ownPageNumber++;
         let res = await this.getOwnRebateList();
      },
      async groupLoadMore() {
         this.groupPageNumber++;
         let res = await this.getGroupRebateList();
      },
      ownChangeTimeRange(rangeType) {
         this.ownPageNumber = 1;
         this.ownChoosedTimeRangeType = rangeType;
         this.ownOrders = [];
         this.getOwnRebateList();
         this.getRebateStatic();
      },
      groupChangeTimeRange(rangeType) {
         this.groupPageNumber = 1;
         this.groupChoosedTimeRangeType = rangeType;
         this.groupOrders = [];
         this.getGroupRebateList();
         this.getRebateStatic();
      },
      changeType(type) {
         this.choosedType = type;
         this.drawerVisible = false;
         this.ownPageNumber = 1;
         this.groupPageNumber = 1;
         this.ownChoosedTimeRangeType = 1;
         this.groupChoosedTimeRangeType = 1;
         this.ownOrders = [];
         this.groupOrders = [];
         this.getOwnRebateList();
         this.getGroupRebateList();
         this.getRebateStatic();
      },
      onClose() {
         this.drawerVisible = false;
      },
      callback(val) {
         console.log(val);
      },
      back() {
         this.$router.back();
      }
   },
   mounted() {
      this.getOwnRebateList();
      this.getGroupRebateList();
      this.getRebateStatic();
      this.getOwnRebateList();
   }
};
</script>