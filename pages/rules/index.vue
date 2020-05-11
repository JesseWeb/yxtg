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
      text-align: center;
      color: rgba(143, 96, 25, 1);
      margin: 0.2rem 0 0.1rem 0;
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
   .wrap {
      padding: 0.2rem;
      margin: 0 auto;
      width: calc(100% - 0.3rem);
      background-color: #fff;
      border-radius: 0.07rem;
      box-shadow: 0 0 0.3rem 0.01rem #e9e9e9;
      margin-bottom: 0.1rem;
      .item {
         margin-bottom: 0.2rem;
         &:last-child {
            margin-bottom: 0;
         }
         .question {
            color: #8f6019;
            font-size: 0.14rem;
            font-weight: bold;
            line-height: 2;
         }
         .answer {
            color: #848484;
            font-size: 0.13rem;
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
            <span class="label">2、申请须知：</span>用户加盟成为悦享推广员后，需确保账号为本人使用，后续提现成功的佣金将发放至此账号所绑定的钱包中。
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
         <div class="table-title">———— 常见问题 ————</div>
         <div class="wrap">
            <div class="item">
               <div class="question">领取的红包每天都有吗？</div>
               <div class="answer">是的，我们是美团/饿了么的合作平台，红包真实可用，每天都能够领取5-9元的大包！</div>
            </div>
            <div class="item">
               <div class="question">分享好友返现是什么意思呢？</div>
               <div class="answer">我们平台与美团/饿了么深度合作，让利给平台的推广者，只要分享给好友领取红包或者邀请成为推广者，有关联的使用红包订单，您就会有相关返现。</div>
            </div>
            <div class="item">
               <div class="question">分享好友能挣多少钱呢？</div>
               <div class="answer">因为领红包点外卖是一个强需求，频次很高，好友点单100元，资深的推广者就能获得4元返现，自己带领推广团队也能让您获益颇丰，积少成多，月入万元零花钱的推广者也不在少数！</div>
            </div>
            <div class="item">
               <div class="question">平台真实可信吗？</div>
               <div class="answer">平台作为美团/饿了么的合作方，仅收取部分技术服务费（5%以内），作为一个长期平台，不用担心相关安全性问题，如使用过程中有任何问题可与平台客服联系！</div>
            </div>
         </div>
         <div class="table-title">———— 等级权益 ————</div>
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
         <div class="table-title">———— 相关管理奖励 ————</div>
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
         <div class="table-title">———— 等级任务 ————</div>
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
            settlement: { cycle: "" }
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