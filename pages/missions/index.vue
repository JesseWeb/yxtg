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
      margin-top: 0.1rem;
      .item-desc {
         display: flex;
         justify-content: space-between;
      }
      .item-progress-bar {
         width: calc(100% - 0.1rem);
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
         <div class="contact" @click="contactMaster">联系导师</div>
      </div>
      <div class="progress">
         <div class="title">升级进度</div>
         <div class="item">
            <div class="item-desc">
               <div class="item-desc-title">直邀有效</div>
               <div class="item-desc-schedule">
                  0人/
                  <span class="purpose">目标150人</span>
               </div>
            </div>
            <div class="item-progress-bar">
               <a-progress strokeColor="#b98023" :percent="100" status="active" />
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
         userDetail: {
            user: {
               username: ""
            },
            promote: {
               level_desc: ""
            }
         }
      };
   },
   methods: {
      contactMaster() {
         
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
            console.log(data);
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