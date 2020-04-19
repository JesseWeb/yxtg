<style lang="scss" scoped>
.main {
   height: calc(100vh - 0.44rem);
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #f0eff4;
   .img-wrap {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   .tip,
   .tip-title {
      width: 1.54rem;
   }
}
.background {
   height: 2rem;
   width: 2rem;
}
.btn {
   width: 3.4rem;
   height: 0.4rem;
   color: white;
   background-color: #e7c590;
   border-radius: 0.06rem;
   font-size: 0.16rem;
   line-height: 0.4rem;
   text-align: center;
   font-weight: bold;
   outline: none;
   border: none;
   margin-top: 0.2rem;
}
</style>
<template>
   <div id="authorize">
      <GoldTitle title="授权" />
      <div class="main" v-if="authorizeStatus == AuthorizeStatus.UNAUTHORIZE">
         <div class="img-wrap">
            <img src="~assets/image/light.svg" class="background" alt />
            <div class="img-desc">需要您的授权才能使用哦</div>
         </div>
         <button class="btn" v-clipboard:error="onError" v-clipboard:copy="taobaoAuthCode" v-clipboard:success="onCopy">淘口令授权</button>
         <button class="btn" @click="goAuth(AuthTypes.APPAUTH)">淘宝App授权</button>
      </div>
      <div class="main" v-else-if="authorizeStatus == AuthorizeStatus.AUTHORIZING">
         <div class="img-wrap">
            <img src="~assets/image/checking.svg" class="background" alt />
         </div>
         <button class="btn" @click="checkAuthResult">查询授权结果</button>
         <button class="btn" @click="backUnAuth">返回重新授权</button>
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
      async checkAuthResult():Promise<void> {
         try {
            await checkAuthResult()
            this.$message.success('授权成功，即将返回首页')
            this.$router.back()
         } catch (error) {
            console.log(error)
         }
      },
        is_mobile():boolean {
         return /Android|webOS|iPhone|iPod|BlackBerry/i.test(
            navigator.userAgent
         );
      },
      async goAuth(type: AuthTypes): Promise<void> {
         if (this.userDetail.channel.rid) {
            await this.$message.success("您已授权,即将返回首页");
            this.$router.push("/home");
            return;
         }
         this.authType = type;
         if (type === AuthTypes.APPAUTH) {
            let elem_auth_url = this.userDetail.channel.elem_auth_url
            let iframe_url = `${elem_auth_url}${
                  this.is_mobile() ? "&view=wap" : ""
               }`
            this.$router.push({
               path: "/authorize_taobao",
               query: {
                  iframe_url
               }
            });
         } else if (type === AuthTypes.CODEAUTH) {
            // do nothing
            return;
         }
      },
      async getTaobaoAuthCode(): Promise<any> {
         try {
            let { data } = await getTaobaoAuthCode();
            this.taobaoAuthCode = data.data.code;
         } catch (error) {
            this.$message.error(error.message);
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