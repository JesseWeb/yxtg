<style lang="scss" scoped>
.user-info {
   margin-top: 0.2rem;
   padding: 0.1rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   .header {
      display: flex;
      align-items: center;
      .header-pic {
         height: 0.4rem;
         width: 0.4rem;
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
            font-size: 0.16rem;
         }
         .role {
            border: 1px solid #f0d19e;
            background-color: #f0d19e;
            color: #fff;
            padding: 0 0.05rem;
            border-radius: 0.05rem;
            font-size: 0.12rem;
            width: auto;
            &.level1 {
            }
         }
      }
   }
   .contact {
      cursor: pointer;
      display: flex;
      align-items: center;
      background-color: #f0d19e;
      color: #fff;
      border-radius: 5rem;
      padding: 0.05rem 0.1rem;
   }
}
.progress {
   margin: 0.1rem;
   padding: 0.1rem;
   padding-bottom: 0.2rem;
   border-radius: 0.08rem;
   background-color: #f0d19e;
   // background-color: #e6d4b8
   .title {
      font-size: 0.16rem;
      text-align: center;
      font-weight: bold;
      color: #68400b;
   }
   .item {
      margin-top: 0.2rem;
      .item-desc {
         .item-desc-title {
            font-weight: 600;
         }
         display: flex;
         justify-content: space-between;
         .purpose {
            font-size: 0.12rem;
         }
      }
      .item-progress-bar {
         width: calc(100% - 0.1rem);
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
               <img src="~/assets/image/ele.png" />
            </div>
            <div class="head-desc">
               <div class="name">{{userDetail.user.username}}</div>
               <div v-if="userDetail&&userDetail.promote&&userDetail.promote.level_desc" class="role">{{userDetail.promote.level_desc}}</div>
            </div>
         </div>
         <div class="contact" v-if="inviterWechat" v-clipboard:error="onError" v-clipboard:copy="inviterWechat" v-clipboard:success="contactMaster">联系导师</div>
      </div>
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
               <a-progress strokeColor="#b98023" :percent="Math.floor((mission.num/mission.target)*100)" status="active" />
            </div>
         </div>
      </div>
      <div class="m-bottom-fixed">
         <div class="m-infoCover-btFixed">
            <div class="tab-wrap">
               <button
                  id="make-poster"
                  v-clipboard:error="onError"
                  v-clipboard:copy="promoteText"
                  v-clipboard:success="promoteCopySuccess"
                  class="tab-item-btn c-darkGold"
                  style="cursor: pointer;"
               >邀请好友</button>
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