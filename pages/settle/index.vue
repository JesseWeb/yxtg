<style lang="scss" scoped>
.title {
   color: #68400b;
   font-size: 0.16rem;
   text-align: center;
   line-height: 0.44rem;
   height: 0.44rem;
}
.main {
   box-sizing: border-box;
   padding: 0 0.1rem;
}
.main-wrap {
   box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05);
   background: #fff;
   border-radius: 0.07rem;
   margin: 0 auto;
   position: relative;
   overflow: hidden;
   // min-height: 1.5rem;
   .main-title {
      font-weight: bold;
      font-size: 0.14rem;
      margin-left: 0.2rem;
      margin-top: 0.2rem;
   }
   .main-money {
      font-family: "Helvetica Neue", helvetica, arial, sans-serif;
      margin-left: 0.2rem;
      margin-left: 0.13rem;
      // display: flex;
      .digit {
         padding: 0 0.05rem;
         font-size: 0.35rem;
         line-height: 0.52rem;
         color: #ff6544;
      }
      .unit {
         font-size: 0.14rem;
         color: #333;
      }
   }
   .settle-btn {
      margin-top: 0.2rem;
      border-radius: 0 0 0.07rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 0.4rem;
      width: 100%;
      cursor: pointer;
      &.primary {
         color: #fff;
         background: rgb(240, 209, 158);
      }
      &.disabled {
         background-color: #e0e0e0;
         color: #bbb;
      }
   }
}
.settle-history {
   margin-top: 0.8rem;
   position: relative;
   .settle-history-title {
      font-size: 0.14rem;
      font-weight: bold;
      margin-left: 0.1rem;
   }
   .settle-history-list {
      padding: 0.1rem;
   }
   .item {
      cursor: pointer;
      position: relative;
      padding: 0.1rem;
      // padding-right: 0.3rem;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      border-bottom: 1px solid #e5e5e5;
      .money {
         color: #ff6544;
      }
      .item-top,
      .item-bottom {
         height: 0.5rem;
         display: flex;
         align-items: center;
         justify-content: space-between;
      }
      // .item-bottom{
      //    justify-content: flex-end;
      // }
      .item-top-right,
      .item-bottom-right {
         text-align: right;
         width:auto;
         white-space: nowrap;
         width: 50%;
         text-overflow: ellipsis;
         overflow: hidden;
      }
      .item-left-top {
         font-weight: bold;
      }
   }
   .arrow {
      display: flex;
      align-items: center;
      position: absolute;
      height: calc(100% - 0.2rem);
      right: 0;
      width: 0.2rem;
   }
}
</style>
<template>
   <div id="settle">
      <gold-header :showBackButton="true">
         <div class="title">提现记录</div>
         <div class="main">
            <div class="main-wrap">
               <div class="main-title">可提现金额</div>
               <div class="main-money">
                  <span class="digit">{{userDetail?userDetail.account.price:'0'}}</span>
                  <span class="unit">元</span>
               </div>
               <nuxt-link tag="div" to="settling" class="settle-btn" :class="settleNum<=0?'disabled':'primary'">申请提现</nuxt-link>
            </div>
         </div>
      </gold-header>
      <div class="settle-history">
         <div class="settle-history-title">返佣提现记录</div>
         <div class="settle-history-list">
            <empty-list :list="cashList" offsetTop=".3rem" />
            <div class="item" v-for="(item,index) in cashList" :key="index">
               <div class="item-top">
                  <div class="item-top-left">
                     提现金额：
                     <span class="money">¥{{item.value}}</span>
                  </div>
                  <div class="item-top-right">申请时间：{{parseTimeS(item.created)}}</div>
               </div>
               <div class="item-bottom">
                  <div class="item-bottom-right">{{item.remark}}</div>
                  <div class="item-bottom-left">手续费：¥0</div>
               </div>
               <!-- <div class="arrow">
                  <i class="iconfont iconyou"></i>
               </div>-->
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import moment from "moment";
import GoldHeader from "../../components/GoldHeader";
import { getUserDetail, getCashList } from "@/apis/user";
export default {
   name: "settle",
   components: {
      GoldHeader
   },
   data() {
      return {
         settleNum: 10,
         userDetail: null,
         cashList: []
      };
   },
   methods: {
      parseTimeS(v) {
         return moment(v * 1000).format("YYYY/M/D");
      },
      async getUserDetail() {
         try {
            let { data } = await getUserDetail();
            this.userDetail = data.data;
         } catch (error) {}
      },
      async getCashList() {
         try {
            let { data } = await getCashList();
            this.cashList = data.data.list;
         } catch (error) {}
      }
   },
   mounted() {
      this.getCashList();
      this.getUserDetail();
   }
};
</script>