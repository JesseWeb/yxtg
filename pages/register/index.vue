<style lang="scss" scoped>
.m-goBack {
   height: 0.4rem;
   padding: 0.15rem 0.1rem 0;
   box-sizing: border-box;
   .iconfanhui {
      position: relative;
      display: inline-block;
      font-size: 0.26rem;
      font-family: "iconography";
      font-style: normal;
      font-weight: normal;
      line-height: 1;
      color: #40a9ff;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
}
.main-wrap {
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: .2rem;
   .main {
      width: 3.24rem;
      height: auto;
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
      }
      #components-form-demo-normal-login .login-form {
         max-width: 300px;
      }
      #components-form-demo-normal-login .login-form-forgot {
         float: right;
      }
      .login-form-button {
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
}
#register {
   height: 100vh;
   background: rgba(243, 213, 167, 1);
   overflow-y: auto;
   padding-bottom: 0.2rem;
   /deep/ .ant-input {
      width: 2.4rem;
      height: 0.44rem;
      color: rgba(11, 11, 11, 1);
      box-shadow: rgba(233, 224, 211, 1) solid 2px;
      border-radius: 0.4rem;
      font-size: 0.16rem;
      line-height: 150%;
      padding-left: 0.3rem;
      border: 1px solid rgba(243, 213, 167, 1);
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
.sms-code-wrap {
   position: relative;
   .sms-code-input {
      padding-right: 1rem;
   }
   .sms-code-btn {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-33.5%, -50%);
      width: 0.86rem;
      height: 0.34rem;
      color: rgba(255, 255, 255, 1);
      background-color: rgb(243, 213, 167);
      border-radius: 0.3rem;
      font-size: 0.13rem;
      line-height: 150%;
      text-align: center;
      padding: 0;
      outline: #f0d19e;
      border: none;
   }
}
</style>
<template>
   <div id="register">
      <GoldTitle title="注册" bg-color="rgba(243, 213, 167, 1)" />
      <div class="main-wrap">
         <div class="main">
            <div class="m-pc-title">
               <h3 class="title">注册悦享推广会员</h3>
            </div>
            <div class="form">
               <a-form :form="form" @submit="handleSubmit">
                  <!-- <a-form-item>
                  <span slot="label">昵称</span>
                  <a-input
                     v-decorator="[
                        'nickname',
                        {
                           rules: [{ required: true, message: '请输入昵称', whitespace: true }]
                        }
                     ]"
                  />
                  </a-form-item>-->
                  <a-form-item>
                     <a-input
                        v-decorator="[
                        'mobile',
                        {
                           rules: [{ required: true, message: '手机号不能为空' },{validator:this.checkPhoneNumber.bind(this)}],
                        }
                     ]"
                        placeholder="请输入手机号"
                     ></a-input>
                  </a-form-item>
                  <a-form-item>
                     <div class="sms-code-wrap">
                        <a-input
                           v-decorator="[
                           'sms_code',
                           {rules: [{ required: true, message: '请输入手机验证码' ,}]}
                           ]"
                           class="sms-code-input"
                           placeholder="请输入验证码"
                        />
                        <countDownBtn ref="countDownBtn" class="sms-code-btn" @send-verification-code="getCaptcha" defText="获取验证码"></countDownBtn>
                     </div>
                     <!-- <send-verification-code :count-down-parent="30" ="sendVerificationCode"></send-verification-code> -->

                     <!-- <a-button type="primary" :loading="!captchaStatus" @click="getCaptcha">获取验证码{{captchaTimer}}</a-button> -->
                  </a-form-item>
                  <a-form-item>
                     <a-input
                        v-decorator="[
                        'password',
                        {
                           rules: [{
                           required: true, message: '请输入您的密码',
                           }, {
                           validator: validateToNextPassword,
                           }],
                        }
                     ]"
                        type="password"
                        placeholder="请输入密码"
                     />
                  </a-form-item>
                  <a-form-item>
                     <a-input
                        v-decorator="[
                        'confirm',
                        {
                           rules: [{
                           required: true, message: '请确认您的密码',
                           }, {
                           validator: compareToFirstPassword,
                           }],
                        }
                     ]"
                        type="password"
                        @blur="handleConfirmBlur"
                        placeholder="请确认密码"
                     />
                  </a-form-item>
                  <!-- <a-form-item>
                  <a-checkbox v-decorator="['agreement', {valuePropName: 'checked'}]">
                     我已阅读且同意以下协议内容
                     <a href>用户协议</a>
                  </a-checkbox>
                  </a-form-item>-->
                  <a-form-item>
                     <a-input
                        v-decorator="[
                        'inviter_id',
                        { initialValue: inviter_id },
                        {
                           rules: [{ required: false, message: '输入邀请码', whitespace: false }]
                        }
                     ]"
                        placeholder="邀请码（选填）"
                        :disabled="hasInviter"
                     />
                  </a-form-item>
                  <a-form-item>
                     <a-button class="login-form-button" :loading="btnloading" type="primary" html-type="submit">注册</a-button>
                  </a-form-item>
               </a-form>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import countDownBtn from "@/components/count-down-btn.vue";
import { register, getCaptcha } from "@/apis/user";
import { setToken } from "../../tools/token";
import GoldTitle from "@/components/GoldTitle";

export default {
   name: "register",
   data() {
      return {
         btnloading: false,
         redirectURL: "/",
         form: this.$form.createForm(this),
         captchaText: "获取验证码",
         captchaDisabled: true,
         captchaTimer: 0,
         inviter_id: "",
         resource_from: "",
         openid: "",
         resource_tag: "",
         validate_token: "",
         hasInviter:false
      };
   },
   components: {
      countDownBtn,
      GoldTitle
   },
   methods: {
      checkPhoneNumber(rule, value, callback) {
         var reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
         var flag = reg.test(value);
         if (!value) {
            callback();
         }
         if (!flag) {
            callback("手机号码不正确!");
         }
         callback();
      },
      async getCaptcha() {
         // console.log(this.form.getFieldValue(`mobile`))
         let mobile = this.form.getFieldValue("mobile");
         var reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
         var flag = reg.test(mobile);
         if (!mobile) {
            this.$message.error("手机号码未填写");
            return;
         }
         if (!flag) {
            this.$message.error("手机号码不正确!");
            return;
         }
         try {
            let { data } = await getCaptcha({
               mobile,
               type: 1
            });
            let validate_token = data.data.validate_token;
            this.validate_token = validate_token;
            this.$refs.countDownBtn.startCountDown();
            this.$message.success("发送成功");
         } catch (error) {
            console.log(error);
         }

         // console.log(data)
      },
      handleConfirmBlur(e) {
         const value = e.target.value;
         this.confirmDirty = this.confirmDirty || !!value;
      },
      compareToFirstPassword(rule, value, callback) {
         const form = this.form;
         if (value && value !== form.getFieldValue("password")) {
            callback("确认密码不正确");
         } else {
            callback();
         }
      },
      validateToNextPassword(rule, value, callback) {
         const form = this.form;
         if (value && this.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
         }
         callback();
      },
      handleSubmit(e) {
         e.preventDefault();
         this.form.validateFields((err, values) => {
            if (!err) {
               this.btnloading = true;
               register({ ...values, validate_token: this.validate_token,resource_from:this.resource_from,openid:this.openid,resource_tag:this.resource_tag })
                  .then(res => {
                     this.$router.push("home");
                  })
                  .finally(() => {
                     this.btnloading = false;
                  });
            }
         });
      },
      goBack() {
         this.$router.go(-1);
      }
   },
   mounted() {
      this.redirectURL = this.$route.query.redirect_url || "/";
      if(this.$route.query.inviter_id){
         this.hasInviter = true
      }
      this.resource_from = this.$route.query.resource_from || "";
      this.openid = this.$route.query.openid || "";
      this.resource_tag = this.$route.query.resource_tag || "";
      this.inviter_id = this.$route.query.inviter_id || "";
   }
   // asyncData(){
   //    register().then((res) => {
   //       console.log(1);
   //       console.log(res);
   //    }).catch((error) => {
   //       console.log(2);
   //       console.log(error);
   //    })
   // }
};
</script>