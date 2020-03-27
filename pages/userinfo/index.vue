<style lang="scss" scoped>
input {
   outline: none;
   border: none;
}
.mes-newBox {
   width: 100%;
   height: auto;
   padding: 0.1rem 0.12rem 0;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   .c-link-btn {
      display: block;
      width: 0.77rem;
      height: 0.22rem;
      border-radius: 0.02rem;
      background: #f5f5f5;
      line-height: 0.225rem;
      text-align: center;
      font-size: 0.11rem;
      color: #bb8b51;
      float: right;
      font-weight: bold;
      outline: none;
      border: none;
      .arrow {
         display: inline-block;
         width: 0.035rem;
         height: 0.035rem;
         background: transparent;
         border-top: 1px solid #bb8b51;
         border-right: 1px solid #bb8b51;
         -webkit-transform: rotate(45deg);
         -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
         transform: rotate(45deg);
         vertical-align: 10%;
         margin-left: 0.02rem;
      }
   }
   .mes-newList li {
      position: relative;
      .c-txt {
         width: 28.494%;
         font-size: 0.13rem;
         line-height: 0.5rem;
         color: #222;
         position: absolute;
         left: 0;
      }
      .c-newInfo {
         display: block;
         width: 100%;
         height: 0.5rem;
         font-size: 0.15rem;
         color: #222;
         font-weight: bold;
         padding-left: 28.494%;
         padding-top: 0.14rem;
         padding-bottom: 0.14rem;
         line-height: 0.21rem;
         box-sizing: border-box;
         border-bottom: 1px solid #e5e5e5;
         font-family: "DIN-Regular";
      }
      .c-newInfo:disabled {
         background: transparent;
      }
   }
}
.m-outbox {
   width: 100%;
   padding: 0.8rem 0.12rem 0;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   .m-outbox-btn {
      display: block;
      width: 100%;
      height: 0.45rem;
      background: #f5f5f5;
      border-radius: 0.05rem;
      text-align: center;
      font-size: 0.16rem;
      color: #bb8b51;
      line-height: 0.45rem;
      font-weight: bold;
   }
}
</style>

<template>
   <div id="user-info">
      <gold-title title="个人信息"></gold-title>
      <div class="mes-newBox">
         <ul class="mes-newList">
            <li>
               <div class="c-txt">昵称</div>
               <input type="text" v-model="username" disabled="disabled" class="c-newInfo" />
            </li>
            <li>
               <div class="c-txt">邀请人</div>
               <input type="text" v-model="inviterUsername" class="c-newInfo" />
            </li>
            <li>
               <div class="c-txt">实名收款账号</div>
               <div class="c-newInfo">
                  {{userDetail?userDetail.user.ali_account:""}}
                  <button class="c-link-btn" v-if="userDetail&&!userDetail.user.ali_account">
                     绑定支付宝
                     <i class="arrow"></i>
                  </button>
               </div>
            </li>
         </ul>
      </div>
      <div class="m-outbox">
         <a href class="m-outbox-btn" @click="removeToken">退出登录</a>
      </div>
   </div>
</template>

<script>
import GoldTitle from "@/components/GoldTitle";
import { removeToken } from "../../tools/token";
import { getUserDetail } from "@/apis/user";
export default {
   name: "userInfo",
   data(){
      return {userDetail:null}
   },
   components:{
      GoldTitle
   },
   computed:{
      username:{
         get(){
            return this.userDetail?this.userDetail.user.username:""
         },
         set(username){
            this.userDetail = {...userDetail,...{user:{username:username}}}
         }
      },
      inviterUsername:{
         get(){
            return this.userDetail?this.userDetail.inviter.username:""
         },
         set(username){
            this.userDetail = {...userDetail,...{inviter:{username:username}}}
         }
      }
   },
   methods: {
      removeToken() {
         removeToken();
         this.$router.push('login')
      },
      async getUserDetail(){
         try {
            let {data} = await getUserDetail()
            this.userDetail = data.data
         } catch (error) {
            
         }
      }
   },
   mounted(){
      this.getUserDetail()
   }
};
</script>