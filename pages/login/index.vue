<style lang="scss" scoped>
#login {
   height: 100vh;
   overflow-y: auto;
   padding-bottom: 0.2rem;
   background: rgba(243, 213, 167, 1);
   /deep/ .ant-input {
      width: 2.4rem;
      height: 0.44rem;
      color: rgba(11, 11, 11, 1);
      box-shadow: rgba(233, 224, 211, 1) solid 2px;
      border-radius: 0.4rem;
      font-size: 0.16rem;
      line-height: 150%;
      padding-left: 0.3rem;
      &:hover {
         border-color: rgba(243, 213, 167, 1);
         border-right-width: 1px !important;
      }
      &:focus {
         border-color: rgba(243, 213, 167, 1);
         border-right-width: 1px !important;
         outline: 0;
         box-shadow: 0 0 0 2px rgba(243, 213, 167, 0.2);
      }
   }
   /deep/ .has-error .ant-input:not([disabled]) {
      &:hover {
         border-color: #f5222d;
      }
      &:focus {
         border-color: #ff4d4f;
         border-right-width: 1px !important;
         outline: 0;
         box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
      }
   }
}
.main-wrap {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin-top: 0.8rem;
}
.main {
   width: 3.24rem;
   height: auto;
   min-height:3.15rem;
   overflow: hidden;
   color: rgba(74, 56, 56, 1);
   background-color: rgba(255, 255, 255, 1);
   border-radius: 0.11rem;
   font-size: 0.12rem;
   line-height: 150%;
   text-align: center;
   font-weight: bold;
   .m-pc-title {
      height: 0.65rem;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      padding-top: 0.26rem;
      .title {
         color: rgba(143, 96, 25, 1);
         font-size: 0.18rem;
         line-height: 150%;
         text-align: center;
         font-weight: bold;
      }
   }
   .form {
      padding: 0.2rem;
      padding-bottom: 0.05rem;
      min-height: 2.4rem;
   }
   #components-form-demo-normal-login .login-form {
      max-width: 300px;
   }
   #components-form-demo-normal-login .login-form-forgot {
      float: right;
   }
   #components-form-demo-normal-login .login-form-button {
      width: 2.4rem;
      height: 0.44rem;
      color: rgba(255, 255, 255, 1);
      background-color: rgba(207, 176, 128, 1);
      border-radius: 0.4rem;
      font-size: 0.16rem;
      line-height: 150%;
      text-align: center;
      outline: #f0d19e;
      border: none;
   }
}
.extra-operation {
   margin: 0.2rem;
   color: #fff;
   a {
      color: #fff;
      font-weight: bold;
      text-decoration: underline;
   }
}
</style>
<template>
   <div id="login">
      <GoldTitle title="登录" bg-color="rgba(243, 213, 167, 1)" />
      <!-- <section class="m-goBack" @click="goBack">
         <div data-node="goBack" class="c-link">
            <i class="iconfont iconfanhui"></i>
         </div>
      </section>-->
      <div class="main-wrap">
         <div class="main">
            <div class="m-pc-title">
               <h3 class="title">登录悦享推广会员</h3>
            </div>
            <div class="form">
               <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
                  <a-form-item>
                     <a-input
                        v-decorator="[
                        'mobile',
                        { rules: [{ required: true, message: '手机号不能为空!'},{validator:this.checkPhoneNumber.bind(this)}] }
                  ]"
                        placeholder="请输入手机号"
                     ></a-input>
                  </a-form-item>
                  <a-form-item>
                     <a-input
                        v-decorator="[
                     'password',
                     { rules: [{ required: true, message: '请输入您的密码' }] }
                  ]"
                        type="password"
                        placeholder="请输入密码"
                     ></a-input>
                  </a-form-item>
                  <a-form-item class="btn-wrap">
                     <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
                  </a-form-item>
               </a-form>
            </div>
         </div>
         <div class="extra-operation">
            <n-link to="/forgetpwd">忘记密码</n-link>Or
            <n-link :to="`/register?inviter_id=${inviterId||''}&resource_from=${resourceFrom}&openid=${openid}&resource_tag=${resourceTag}`" href="javascript:void(0);">注册新用户</n-link>
         </div>
      </div>
   </div>
</template>
<script>
import { login } from "../../apis/user";
import GoldTitle from "@/components/GoldTitle";
import { message } from "ant-design-vue";
import { getToken, setToken } from "../../tools/token";
export default {
   name: "login",
   components: {
      GoldTitle
   },
   data() {
      return {
         url: "/login",
         redirectURL: "/",
         form: this.$form.createForm(this),
         inviterId: "",
         inviterId: "",
         resourceFrom: "",
         openid: "",
         resourceTag: ""
      };
   },
   methods: {
      backClick() {
         this.$router.push("/");
      },
      checkPhoneNumber(rule, value, callback) {
         var reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
         var flag = reg.test(value);
         if (value == "") {
            callback();
         }
         if (!flag) {
            callback("手机号码不正确!");
         }
         callback();
      },
      async handleSubmit(e) {
         e.preventDefault();
         this.form.validateFields(async (err, values) => {
            if (!err) {
               try {
                  await login(values);
                  await message.success("登录成功", 1);
                  this.$router.push("home");
               } catch (error) {
                  console.log(error);
                  // message.error(error.message)
               }
            }
         });
      },
      goBack() {
         this.$router.back();
      }
   },
   async mounted() {
      this.redirectURL = this.$route.query.redirect_url || "/";
      this.url = this.$route.path;
      this.inviterId = this.$route.query.inviter_id || "";
      this.resourceFrom = this.$route.query.resource_from || "";
      this.openid = this.$route.query.openid || "";
      this.resourceTag = this.$route.query.resource_tag || "";
      if (getToken()) {
         await message.loading("您已登录", 1);
         this.$router.push("home");
      }
   }
};
</script>