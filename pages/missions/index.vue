<style lang="scss" scoped>
.user-info {
   padding: 0.1rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #f0d19e;
   .header {
      display: flex;
      align-items: center;
      .header-pic {
         height: 0.43rem;
         width: 0.43rem;
         img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
         }
         margin-right: 0.1rem;
      }
      .head-desc {
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: flex-start;
         .name {
            font-size: 0.14rem;
            font-weight: bold;
         }
         .role {
            padding: 0 0.05rem;
            border-radius: 0.3rem;
            font-size: 0.12rem;
            width: auto;
            color: rgba(74, 56, 56, 1);
            background-color: rgba(255, 241, 219, 1);
            &.level1 {
            }
         }
      }
   }
   .contact {
      cursor: pointer;
      display: flex;
      align-items: center;
      border-radius: 5rem;
      padding: 0.05rem 0.1rem;
      font-size: 0.12rem;
      font-weight: bold;
      color: rgba(74, 56, 56, 1);
      background-color: rgba(255, 241, 219, 1);
   }
}
.progress-wrap {
   background-color: #f0d19e;
   overflow: hidden;
   padding: 0.1rem;
}
.progress {
   padding: 0.1rem;
   padding-bottom: 0.2rem;
   border-radius: 0.08rem;
   background-color: #fff;
   // background-color: #e6d4b8
   .title {
      color: rgba(143, 96, 25, 1);
      line-height: 150%;
      font-weight: bold;
      font-size: 0.14rem;
      text-align: center;
   }
   .item {
      margin-top: 0.2rem;
      .item-desc {
         .item-desc-title {
            font-size: 0.12rem;
            color: rgba(56, 56, 56, 1);
            font-weight: normal;
         }
         display: flex;
         justify-content: space-between;
         .purpose {
            font-size: 0.12rem;
            font-size: 0.12rem;
            color: rgba(56, 56, 56, 1);
            font-weight: normal;
         }
      }
      .item-progress-bar {
         width: calc(100% - 0.1rem);
      }
   }
}
.rules {
   padding: 0.1rem;
   padding-top: 0.2rem;
   padding-bottom: 0.2rem;
   color: rgba(134, 134, 134, 1);
   .main-title {
      text-align: center;
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
.m-bottom-fixed {
   height: 0.45rem;
   .m-infoCover-btFixed {
      position: fixed;
      // left: 0;
      // right: 0;
      bottom: 0;
      width: 100%;
      z-index: 999;
      height: 0.45rem;
      background: #fff;
      max-width: 640px;
      // left
      .tab-wrap {
         display: flex;
         line-height: 0.45rem;
         .tab-item-btn {
            flex: 1;
            width: 50%;
            text-align: center;
            display: block;
            font-size: 0.18rem;
            color: #bb8b51;
            line-height: 0.45rem;
         }
         .c-darkGold {
            font-family: "Helvetica Neue", helvetica, arial, sans-serif;
            color: #68400b;
            font-size: bold;
            background-image: -moz-linear-gradient(
               180deg,
               #e7bb78 1%,
               #f0d19e 99%
            );
            background-image: -webkit-linear-gradient(
               180deg,
               #e7bb78 1%,
               #f0d19e 99%
            );
            background-image: -ms-linear-gradient(
               180deg,
               #e7bb78 1%,
               #f0d19e 99%
            );
            background-image: -webkit-linear-gradient(
               180deg,
               #e7bb78 1%,
               #f0d19e 99%
            );
            outline: none;
            border: none;
         }
      }
   }
}
</style>
<template>
   <div id="missions">
      <goldTitle title="我的任务"></goldTitle>
      <div class="user-info">
         <div class="header">
            <div class="header-pic">
               <img src="/male-130.png" />
            </div>
            <div class="head-desc">
               <div class="name">{{userDetail.user.username}}</div>
               <div v-if="userDetail&&userDetail.promote&&userDetail.promote.level_desc" class="role">{{userDetail.promote.level_desc}}</div>
            </div>
         </div>
         <div class="contact" v-if="inviterWechat" v-clipboard:error="onError" v-clipboard:copy="inviterWechat" v-clipboard:success="contactMaster">联系导师</div>
      </div>
      <div class="progress-wrap">
         <div class="progress">
            <div class="title">升级进度</div>
            <div class="item" v-for="mission in missions" :key="mission.type">
               <div class="item-desc">
                  <div class="item-desc-title">{{mission.name}}</div>
                  <div class="item-desc-schedule">
                     {{mission.num}}{{mission.unit}}
                     <span class="purpose">/目标{{mission.target}}{{mission.unit}}</span>
                  </div>
               </div>
               <div class="item-progress-bar">
                  <a-progress strokeColor="rgba(243, 213, 167, 1)" :percent="Math.floor((mission.num/mission.target)*100)" status="active" />
               </div>
            </div>
         </div>
      </div>
      <div class="rules">
         <div class="main-title">-推广员可通过完成任务获得更高的收益-</div>
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
      <div class="m-bottom-fixed">
         <div class="m-infoCover-btFixed">
            <div class="tab-wrap">
               <n-link
                  tag="button"
                  to="invite"
                  id="make-poster"
                  v-clipboard:error="onError"
                  v-clipboard:copy="promoteText"
                  v-clipboard:success="promoteCopySuccess"
                  class="tab-item-btn c-darkGold"
               >邀请好友</n-link>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import { getUpgradeProgress, getUserDetail } from "@/apis/user";
import goldTitle from "../../components/GoldTitle";
export default {
   components: {
      goldTitle
   },
   name: "missions",
   data() {
      return {
         title: "我的任务",
         missions: [],
         userDetail: {
            user: {
               username: ""
            },
            promote: {
               level_desc: ""
            },
            inviter: {
               wechat: ""
            }
         }
      };
   },
   computed: {
      toFixed(num) {
         if (num == 0) {
            return 0;
         } else {
            return Number(num.toFixed(2));
         }
      },
      inviterWechat() {
         return this.userDetail.inviter.wechat;
      },
      promoteText() {
         return `${window.location.host}/#/register?inviter_id=${this.userDetail.user.userid}`;
      }
   },
   methods: {
      experience() {},
      promoteCopySuccess() {
         this.$message.success("已复制微推广文案，粘贴分享即可");
      },
      onError() {
         this.$message.success("复制失败");
      },
      contactMaster() {
         if (this.promoteText) {
            this.$message.success("已复制微信号，在微信中添加即可");
         } else {
            this.$message.success("获取导师微信失败");
         }
      },
      async getUserDetail() {
         try {
            let { data } = await getUserDetail();
            this.userDetail = data.data;
         } catch (error) {}
      },
      async getUpgradeProgress() {
         try {
            let { data } = await getUpgradeProgress();
            this.missions = data.data.progress;
         } catch (error) {}
      }
   },
   head() {
      return {
         title: this.title
      };
   },
   mounted() {
      this.getUpgradeProgress();
      this.getUserDetail();
   }
};
</script>