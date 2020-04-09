<style lang="scss" scoped>
   .main{
      padding: .3rem .1rem;
      padding-bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      color: rgb(141, 140, 140);
      .digit{
         font-size: .28rem;
         color:#333;
         // font-weight: bold;
      }
      .line{
         height: 1px;
         width: 100%;
         background-color: #ebe8e8;
         margin-top: .3rem;
      }
   }
   .detail{
      margin-top: .15rem;
      .item{
         padding: 0 .1rem;
         display: flex;
         justify-content: space-between;
         height: .4rem;
         align-items: center;
         >.left{
            width:40%;
            color: rgb(126, 126, 126);
            font-size: .14rem;
         }
         >.right{
            text-align: right;
            width: 60%;
            color: #333;
         }
      }
   }
</style>
<template>
   <div id="settleDetail">
      <GoldTitle title="结算详情" />
      <div class="main">
         <div class="title">返佣金额</div>
         <div class="digit">1889</div>
         <div class="status">已结算</div>
         <div class="status-info">您的结算已完成，请到银行卡查看</div>
         <div class="line"></div>
      </div>
      <div class="detail">
         <div class="item">
            <div class="left">结算周期</div>
            <div class="right">2019.08.01-2019.11.30</div>
         </div>
         <div class="item">
            <div class="left">申请时间</div>
            <div class="right">2019.12.01</div>
         </div>
         <div class="item">
            <div class="left">返佣总收入</div>
            <div class="right">1889</div>
         </div>
         <div class="item">
            <div class="left">综合服务费（含税）</div>
            <div class="right">0.00</div>
         </div>
          <div class="item">
            <div class="left">实际收入</div>
            <div class="right">18.75</div>
         </div>
      </div>
   </div>
</template>
<script>
import {} from '@/apis/user'
import GoldTitle from "@/components/GoldTitle";
export default {
   name:"settleDetail",
   components:{
      GoldTitle
   },
   mounted(){
      
   }
}
</script>