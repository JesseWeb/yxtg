<style lang="scss" scoped>
#forgetPwd {
   height: 100vh;
   overflow-y: auto;
   // min-height: 800px;
   background: rgba(243, 213, 167, 1);
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
   .main-wrap {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-top: 0.2rem;
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

            font-weight: bold;
            border-radius: 0.4rem;
            font-size: 0.16rem;
            line-height: 150%;
            text-align: center;
            outline: #f0d19e;
            border: none;
         }
      }
   }
}
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
</style>
<template>
   <div id="forgetPwd">
      <GoldTitle title="忘记密码" bg-color="rgba(243, 213, 167, 1)" />
      <div class="main-wrap">
         <div class="main">
            <div class="m-pc-title">
               <h3 class="title">重置密码</h3>
            </div>
            <div class="form">
               <a-form-model :rules="rules" ref="form" layout="vertical" :model="form">
                  <a-form-model-item prop="mobile">
                     <a-input placeholder="请输入手机号码" v-model="form.mobile"></a-input>
                  </a-form-model-item>
                  <a-form-model-item prop="sms_code">
                     <div class="sms-code-wrap">
                        <a-input v-model="form.sms_code" class="sms-code-input" placeholder="请输入验证码" />
                        <countDownBtn ref="countDownBtn" class="sms-code-btn" @send-verification-code="getCaptcha" defText="获取验证码"></countDownBtn>
                     </div>
                  </a-form-model-item>
                  <a-form-model-item prop="password">
                     <a-input placeholder="请输入新密码" type="password" v-model="form.password" />
                  </a-form-model-item>
                  <a-form-model-item prop="confirm">
                     <a-input type="password" placeholder="请确认密码" v-model="form.confirm" />
                  </a-form-model-item>
                  <!-- <a-form-model-item>
                  <a-checkbox v-decorator="['agreement', {valuePropName: 'checked'}]">
                     我已阅读且同意以下协议内容
                     <a href>用户协议</a>
                  </a-checkbox>
                  </a-form-model-item>-->
                  <a-form-model-item>
                     <a-button class="login-form-button" type="primary" @click="handleSubmit">重置密码</a-button>
                  </a-form-model-item>
               </a-form-model>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import countDownBtn from "@/components/count-down-btn.vue";
import GoldTitle from "@/components/GoldTitle";
import { resetPwd, getCaptcha } from "@/apis/user";
export default {
   name: "ForgetPwd",
   data() {
      return {
         redirectURL: "/",
         form: {
            mobile: "",
            sms_code: "",
            password: "",
            confirm: ""
         },
         captchaText: "获取验证码",
         captchaDisabled: true,
         captchaTimer: 0,
         validate_token: "",
         rules: {
            mobile: [
               {
                  required: true,
                  message: "请输入手机号",
                  trigger: "blur"
               },

               {
                  validator: this.checkPhoneNumber,
                  trigger: "change"
               }
            ],
            sms_code: [{ required: true, message: "请输入手机验证码" }],
            password: [
               {
                  required: true,
                  message: "请输入您的新密码"
               },
               {
                  validator: this.validateToNextPassword,
                  trigger: "change"
               }
            ],
            confirm: [
               {
                  required: true,
                  message: "请确认您的密码"
               },
               {
                  validator: this.compareToFirstPassword,
                  trigger: "change"
               }
            ]
         }
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
         if (!flag) {
            callback("手机号码不正确!");
         }
         callback();
      },
      async getCaptcha() {
         let mobile = this.form.mobile;
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
               type: 2
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
         if (value && value !== this.form.password) {
            callback("两次密码不一致");
         } else {
            callback();
         }
      },
      validateToNextPassword(rule, value, callback) {
         if (this.form.confirm !== "") {
            this.$refs.form.validateField("confirm");
         }
         callback();
      },
      handleSubmit(e) {
         e.preventDefault();
         this.$refs.form.validate(async valid => {
            if (valid) {
               let { mobile, password, sms_code } = this.form;
               try {
                  await resetPwd({
                     mobile,
                     password,
                     sms_code,
                     validate_token: this.validate_token
                  });
                  this.$message.success("重置成功");
                  setTimeout(() => {
                     this.$router.push("/login");
                  }, 1000);
               } catch (error) {}
               // console.log("Received values of form: ", values);
            }
         });
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