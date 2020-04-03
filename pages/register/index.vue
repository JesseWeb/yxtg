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
   <div id="register">
      <section class="m-goBack" @click="goBack">
         <a data-node="goBack" class="c-link" href="javascript:void(0);">
            <i class="iconfont iconfanhui"></i>
         </a>
      </section>
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
                           {rules: [{ required: true, message: '请输入手机验证码' ,}]}
                           ]"
                        />
                     </a-col>
                     <a-col :span="12">
                        <countDownBtn ref="countDownBtn" @send-verification-code="getCaptcha"  defText="获取验证码"></countDownBtn>
                        <!-- <send-verification-code :count-down-parent="30" ="sendVerificationCode"></send-verification-code> -->

                        <!-- <a-button type="primary" :loading="!captchaStatus" @click="getCaptcha">获取验证码{{captchaTimer}}</a-button> -->
                     </a-col>
                  </a-row>
               </a-form-item>
               <a-form-item label="密码">
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
                  <span slot="label">邀请码(选填)</span>
                  <a-input
                     v-decorator="[
                        'inviter_id',
                        { initialValue: inviter_id },
                        {
                           rules: [{ required: false, message: '输入邀请码', whitespace: false }]
                        }
                     ]"
                  />
               </a-form-item>
               <a-form-item>
                  <a-button class="login-form-button" :loading="btnloading" type="primary" html-type="submit">注册</a-button>
               </a-form-item>
            </a-form>
         </div>
      </div>
   </div>
</template>
<script>
import countDownBtn from "@/components/count-down-btn.vue";
import { register, getCaptcha } from "@/apis/user";
import { setToken } from "../../tools/token";

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
         validate_token:""
      };
   },
   components: {
      countDownBtn
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
         let mobile = this.form.getFieldValue("mobile")
         var reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
         var flag = reg.test(mobile);
         if (!mobile) {
            this.$message.error("手机号码未填写");
            return
         }
         if (!flag) {
            this.$message.error("手机号码不正确!");
            return
         }
         try {
            let { data } = await getCaptcha({
               mobile,
               type: 1
            });
            let validate_token = data.data.validate_token
            this.validate_token = validate_token
            this.$refs.countDownBtn.startCountDown()
            this.$message.success("发送成功");
         } catch (error) {
            console.log(error)
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
         this.form.validateFields((err, values) => {
            if (!err) {
               this.btnloading = true;
               register({ ...values, validate_token: this.validate_token })
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