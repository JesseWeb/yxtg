<style lang="scss" scoped>
.view-copy-words-content {
   font-size: 0.16rem;
   width: 72%;
   margin: 0 auto;
   min-height: 50px;
   position: absolute;
   left: 14%;
   top: 72%;
   text-align: center;
}
.view-copy-word-btn {
   width: 100%;
   height: 0.45rem;
   color: #fff;
   margin-bottom: 0.15rem;
   background: #ff4a44;
   border-radius: 0.45rem;
   border: 0;
   -webkit-box-shadow: 0 1px 3px #555;
   box-shadow: 0 1px 3px #555;
   outline: none;
}
.view-copy-words-tips {
   font-size: 0.12rem;
   color: #fff;
   line-height: 1.5;
   padding: 0 10px 10px;
   opacity: 0.5;
}
</style>
<template>
   <div id="authorize">
      <div data-nb-elm class="view-copy-words" style="background: rgb(0, 112, 189);">
         <div data-nb-elm class="view-copy-words-inner">
            <img data-nb-elm src="/elm_background.png" alt class="view-copy-words-bg" />
            <div data-nb-elm class="view-copy-words-content">
               <button
                  data-nb-elm
                  class="view-copy-word-btn"
                  v-if="!userDetail.channel.rid&&authorizeStatus== AuthorizeStatus.UNAUTHORIZE"
                  v-clipboard:error="onError"
                  v-clipboard:copy="taobaoAuthCode"
                  v-clipboard:success="onCopy"
               >点击授权</button>
               <button
                  v-else-if="authorizeStatus == AuthorizeStatus.AUTHORIZING||userDetail.channel.rid"
                  data-nb-elm
                  class="view-copy-word-btn"
                  @click="checkAuthResult"
               >我已完成授权</button>
               <!-- <button data-nb-elm="" class="view-copy-word-btn" id="share" style="background: #e46111;width: 80%;display:none;" onclick='jump();'>点击领包</button> -->
               <!-- <p data-nb-elm class="view-copy-words-tips">一键复制或长按复制文案，打开[手机淘灬寳App]即可领取福利红包</p> -->
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import GoldTitle from "@/components/GoldTitle.vue";
import { getUserDetail, getTaobaoAuthCode, checkAuthResult } from "@/apis/user";
enum AuthorizeStatus {
   UNAUTHORIZE = 0,
   AUTHORIZING = 1,
   AUTHORIZED = 2
}
enum AuthTypes {
   UNCHOOSE = 0,
   APPAUTH = 1,
   CODEAUTH = 2
}
interface Data {
   authorizeStatus: AuthorizeStatus;
   isWechatEnv: boolean;
   authType: AuthTypes;
   AuthorizeStatus: AuthorizeStatus;
   AuthTypes: AuthTypes;
   userDetail: any;
}
export default Vue.extend({
   components: {
      GoldTitle
   },
   name: "authorize",
   data() {
      return {
         taobaoAuthCode: "",
         isWechatEnv: false,
         authType: AuthTypes.UNCHOOSE,
         authorizeStatus: AuthorizeStatus.UNAUTHORIZE,
         AuthorizeStatus,
         AuthTypes,
         userDetail: {
            user: {
               userid: "",
               username: "",
               mobile: "",
               wechat: "",
               gender: "",
               status: "",
               ali_account: "",
               realname: "",
               invite_qrcode: "",
               customer_qrcode: ""
            },
            account: { price: "", price_frozen: "" },
            promote: {
               level: "",
               level_desc: "",
               inviter_id: ""
            },
            inviter: [],
            channel: {
               elem_share_url: "",
               mt_url: "",
               rid: "",
               elem_shop_url: "",
               elem_auth_url: "",
               promote_share_url: "",
               customer_share_url: ""
            }
         }
      };
   },
   methods: {
      isWechat(): boolean {
         var ua = navigator.userAgent.toLowerCase();
         if (
            String(ua.match(/MicroMessenger/i)) == "micromessenger" ||
            String(ua.match(/qq\//i)) == "qq/"
         ) {
            return true;
         } else {
            return false;
         }
         return false;
      },
      async onCopy() {
         this.$message.success("复制淘口令成功，请打开手机淘宝");
         this.authorizeStatus = AuthorizeStatus.AUTHORIZING;
      },
      onError() {
         this.$message.error("复制淘口令失败，请重试");
      },
      async getUserDetail(): Promise<any> {
         try {
            let { data } = await getUserDetail();
            this.userDetail = data.data;
         } catch (error) {}
      },
      async checkAuthResult(): Promise<void> {
         try {
            await checkAuthResult();
            this.$message.success("授权成功，即将返回首页");
            this.$router.back();
         } catch (error) {
            console.log(error);
         }
      },
      is_mobile(): boolean {
         return /Android|webOS|iPhone|iPod|BlackBerry/i.test(
            navigator.userAgent
         );
      },
      async getTaobaoAuthCode(): Promise<any> {
         try {
            let { data } = await getTaobaoAuthCode();
            this.taobaoAuthCode = data.data.code;
         } catch (error) {
            console.log(error)
            // this.$message.error(error.message);
         }
      },
      backUnAuth(): void {
         this.authType = AuthTypes.UNCHOOSE;
         this.authorizeStatus = AuthorizeStatus.UNAUTHORIZE;
      }
   },
   mounted() {
      this.isWechatEnv = this.isWechat();
      this.getUserDetail();
      this.getTaobaoAuthCode();
   }
});
</script>