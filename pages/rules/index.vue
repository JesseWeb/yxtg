<style lang="scss" scoped>
#rules {
   .main {
      padding: 0.1rem;
   }
   .rule-wrap {
      margin-top: 0.1rem;
      padding: 0 0.1rem;
      &:first-child {
         margin-top: 0;
      }
      .label {
         font-weight: bold;
      }
   }

   .table-title {
      color: rgba(143, 96, 25, 1);
      font-size: 0.16rem;
      font-weight: bold;
      padding-left: 0.1rem;
      margin-top: 0.2rem;
   }
   .table-wrap {
      display: flex;
      width: 100%;
      justify-content: center;
      .table {
         width: 3.29rem;
         margin-top: 0.1rem;
         border: 1px solid rgba(221, 204, 179, 1);
         background-color: rgba(255, 244, 226, 1);
         .question {
            color: #1890ff;
            cursor: pointer;
         }
         th {
            color: #c3925b;
         }
         td {
            color: #333;
            &:first-child {
               width: 0.75rem;
            }
         }
         td,
         th {
            text-align: center;
            border: 1px solid rgba(221, 204, 179, 1);
            height: 0.35rem;
         }
      }
   }
}
</style>
<template>
   <div id="rules">
      <GoldTitle title="帮助中心" />
      <div class="main">
         <div class="rule-wrap">
            <span class="label">1、申请注册条件：</span>无需任何加盟费用，注册即可成为体验推广员，整个升级流程中也无需缴纳任何费用
         </div>
         <div class="rule-wrap">
            <span class="label">2、申请须知：</span>用户加盟成为悦享推广员后，需确保账号为本人使用，后续结算成功的佣金将发放至此账号所绑定的钱包中。
         </div>
         <div class="rule-wrap">
            <span class="label">3、佣金获取方式：</span>用户加盟成为悦享推广员后，可分享含个人专属二维码的链接或图片，分享给其他用户领券点单，或分享给其他用户成为推广员，推广员分发给其他用户点单，均可获得相应推广佣金。
            含个人专属二维码的图片：首页-分享返佣红包
         </div>
         <div class="rule-wrap">
            <span class="label">4、奖励机制：</span>推广员通过完成任务升级可获得更高的收益~
         </div>
         <div class="rule-wrap">
            <span class="label">5、提现说明：</span>
            {{config.settlement.cycle}}
         </div>
         <div class="table-title">等级权益</div>
         <div class="table-wrap">
            <table class="table" border-collapse="collapse">
               <tr>
                  <th class="t-header">会员身份</th>
                  <th class="t-header">直推业绩</th>
                  <th class="t-header">好友消费</th>
                  <th class="t-header">您的佣金</th>
               </tr>
               <tr>
                  <td>体验推广员</td>
                  <td>1.5%</td>
                  <td>¥10000</td>
                  <td>¥150</td>
               </tr>
               <tr>
                  <td>初级推广员</td>
                  <td>3.0%</td>
                  <td>¥10000</td>
                  <td>¥300</td>
               </tr>
               <tr>
                  <td>中级推广员</td>
                  <td>3.6%</td>
                  <td>¥10000</td>
                  <td>¥360</td>
               </tr>
               <tr>
                  <td>高级推广员</td>
                  <td>4.0%</td>
                  <td>¥10000</td>
                  <td>¥400</td>
               </tr>
            </table>
         </div>
         <div class="table-title">相关管理奖励</div>
         <div class="table-wrap">
            <table class="table" border-collapse="collapse">
               <tr>
                  <th class="t-header">会员身份</th>
                  <th class="t-header">管理体验推广员</th>
                  <th class="t-header">管理初级推广员</th>
                  <th class="t-header">管理中级推广员</th>
                  <th class="t-header">管理高级推广员</th>
               </tr>
               <tr>
                  <td>体验推广员</td>
                  <td>业绩5%协助提成</td>
                  <td>/</td>
                  <td>/</td>
                  <td>/</td>
               </tr>
               <tr>
                  <td>初级推广员</td>
                  <td>业绩60%的管理提成</td>
                  <td>业绩5%的协助提成</td>
                  <td>/</td>
                  <td>/</td>
               </tr>
               <tr>
                  <td>中级推广员</td>
                  <td>业绩80%的管理提成</td>
                  <td>业绩15%的管理提成</td>
                  <td>业绩5%的协助提成</td>
                  <td>/</td>
               </tr>
               <tr>
                  <td>高级推广员</td>
                  <td>业绩90%的管理提成</td>
                  <td>业绩20%的管理提成</td>
                  <td>业绩12%的管理提成</td>
                  <td>业绩5%的协助提成</td>
               </tr>
            </table>
         </div>
         <div class="table-title">等级任务</div>
         <div class="table-wrap">
            <table class="table" border-collapse="collapse">
               <tr>
                  <th class="t-header">会员身份</th>
                  <th class="t-header">升级要求</th>
               </tr>
               <tr>
                  <td>体验推广员</td>
                  <td>注册即成为本平台体验推广员</td>
               </tr>
               <tr>
                  <td>初级推广员</td>
                  <td>
                     邀请6位
                     <a-tooltip placement="topLeft" title="产生了推广收益即为有效推广员">
                        <span class="question">有效推广员</span>
                     </a-tooltip>或 总返利订单数大于10单
                  </td>
               </tr>
               <tr>
                  <td>中级推广员</td>
                  <td>邀请12位初级推广员</td>
               </tr>
               <tr>
                  <td>高级推广员</td>
                  <td>邀请20位中级推广员</td>
               </tr>
               <tr>
                  <td>城市合伙人</td>
                  <td>敬请期待</td>
               </tr>
            </table>
         </div>
      </div>
   </div>
</template>
<script>
import GoldTitle from "@/components/GoldTitle";
import { config } from "../../apis/user";
export default {
   name: "rules",
   data() {
      return {
         config: {
            withdrawal: { cycle: "" },
            settlement: { cycle: "" },
         }
      };
   },
   components: {
      GoldTitle
   },
   async mounted() {
      const { data } = await config();
      this.config = data.data;
   }
};
</script>