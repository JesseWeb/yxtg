<style lang="scss">
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
.main {
   .m-pc-title {
      height: 0.65rem;
      padding-top: 0.14rem;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      .title {
         font-size: 0.22rem;
         color: #333;
         text-align: center;
         font-weight: normal;
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
      width: 100%;
   }
}
</style>
<template>
   <div id="forgetPwd">
      <section class="m-goBack" @click="goBack">
         <a data-node="goBack" class="c-link" href="javascript:void(0);">
            <i class="iconfont iconfanhui"></i>
         </a>
      </section>
      <div class="main">
         <div class="m-pc-title">
            <h3 class="title">重置密码</h3>
         </div>
         <div class="form">
            <a-form :form="form" @submit="handleSubmit">
               <a-form-item label="手机号">
                  <a-input
                     v-decorator="[
                        'mobile',
                        {
                           rules: [{ required: true, message: '手机号不能为空' },{validator:this.checkPhoneNumber.bind(this)}],
                        }
                     ]"
                     style="width: 100%"
                  ></a-input>
               </a-form-item>
               <a-form-item label="验证码">
                  <a-row :gutter="8">
                     <a-col :span="12">
                        <a-input
                           v-decorator="[
                           'sms_code',
                           {rules: [{ required: true, message: '请输入手机验证码' }]}
                           ]"
                        />
                     </a-col>
                     <a-col :span="12">
                        <countDownBtn @send-verification-code="getCaptcha" defText="获取验证码"></countDownBtn>
                        <!-- <send-verification-code :count-down-parent="30" ="sendVerificationCode"></send-verification-code> -->

                        <!-- <a-button type="primary" :loading="!captchaStatus" @click="getCaptcha">获取验证码{{captchaTimer}}</a-button> -->
                     </a-col>
                  </a-row>
               </a-form-item>
               <a-form-item label="新密码">
                  <a-input
                     v-decorator="[
                        'password',
                        {
                           rules: [{
                           required: true, message: '请输入您的新密码',
                           }, {
                           validator: validateToNextPassword,
                           }],
                        }
                     ]"
                     type="password"
                  />
               </a-form-item>
               <a-form-item label="确认密码">
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
                  />
               </a-form-item>
               <!-- <a-form-item>
                  <a-checkbox v-decorator="['agreement', {valuePropName: 'checked'}]">
                     我已阅读且同意以下协议内容
                     <a href>用户协议</a>
                  </a-checkbox>
               </a-form-item>-->
               <a-form-item>
                  <a-button class="login-form-button" type="primary" html-type="submit">重置密码</a-button>
               </a-form-item>
            </a-form>
         </div>
      </div>
   </div>
</template>
<script>
import countDownBtn from "@/components/count-down-btn.vue";
import { resetPwd } from "@/apis/user";
export default {
   name: "ForgetPwd",
   data() {
      return {
         redirectURL: "/",
         form: this.$form.createForm(this),
         captchaText: "获取验证码",
         captchaDisabled: true,
         captchaTimer: 0
      };
   },
   components: {
      countDownBtn
   },
   methods: {
      checkPhoneNumber(rule, value, callback) {
         var reg = /^1[3|4|5|7|8][0-9]{9}$/;
         var flag = reg.test(value);
         if (!flag) {
            callback("手机号码不正确!");
         }
         callback();
      },
      getCaptcha() {},
      handleConfirmBlur(e) {
         const value = e.target.value;
         this.confirmDirty = this.confirmDirty || !!value;
      },
      compareToFirstPassword(rule, value, callback) {
         const form = this.form;
         if (value && value !== form.getFieldValue("password")) {
            callback("Two passwords that you enter is inconsistent!");
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
         this.form.validateFields(
            async (err, { mobile, password, sms_code }) => {
               if (!err) {
                  await resetPwd({
                     mobile,
                     password,
                     sms_code,
                     validate_token: "sb"
                  });
                  // console.log("Received values of form: ", values);
               }
            }
         );
      },
      goBack() {
         this.$router.go(-1);
      }
   },
   mounted() {
      this.redirectURL = this.$route.query.redirect_url || "/";
   }
};
</script>