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
      padding-bottom: 0.05rem;
   }
   #components-form-demo-normal-login .login-form {
      max-width: 300px;
   }
   #components-form-demo-normal-login .login-form-forgot {
      float: right;
   }
   #components-form-demo-normal-login .login-form-button {
      width: 100%;
   }
}
</style>
<template>
   <div id="login">
      <section class="m-goBack" @click="goBack">
         <a data-node="goBack" class="c-link" href="javascript:void(0);">
            <i class="iconfont iconfanhui"></i>
         </a>
      </section>
      <div class="main">
         <div class="m-pc-title">
            <h3 class="title">登录同福客栈</h3>
         </div>
         <div class="form">
            <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
               <a-form-item>
                  <a-input
                     v-decorator="[
                        'userName',
                        { rules: [{ required: true, message: '手机号不能为空!'},{validator:this.checkPhoneNumber.bind(this)}] }
                  ]"
                     placeholder="请输入手机号"
                  >
                     <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                  </a-input>
               </a-form-item>
               <a-form-item>
                  <a-input
                     v-decorator="[
                     'password',
                     { rules: [{ required: true, message: '请输入您的密码' }] }
                  ]"
                     type="password"
                     placeholder="请输入密码"
                  >
                     <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                  </a-input>
               </a-form-item>
               <a-form-item>
                  <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
                  <nuxt-link to="/forgetpwd">忘记密码</nuxt-link>Or<n-link @click="goRegister" to="/register"  href="javascript:void(0);">注册新用户</n-link>
               </a-form-item>
            </a-form>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         url: "/login",
         redirectURL: "/",
         form: this.$form.createForm(this)
      };
   },
   methods: {
      goRegister() {
         this.$router.push("/register");
         // window.location.href = `/register?redirect_url=${url}`;
      },
      checkPhoneNumber(rule, value, callback) {
         var reg = /^1[3|4|5|7|8][0-9]{9}$/;
         var flag = reg.test(value);
         if (value == "") {
            callback();
         }
         if (!flag) {
            callback("手机号码不正确!");
         }
      },
      handleSubmit(e) {
         e.preventDefault();
         this.form.validateFields((err, values) => {
            if (!err) {
               console.log("Received values of form: ", values);
            }
         });
      },
      goBack() {
         this.$router.back();
      }
   },
   mounted() {
      this.redirectURL = this.$route.query.redirect_url || "/";
      this.url = this.$route.path;
   }
};
</script>