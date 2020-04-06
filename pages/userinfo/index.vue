<style lang="scss" scoped>
.mes-newBox {
   input {
      outline: none;
      border: none;
   }
   width: 100%;
   height: auto;
   padding: 0.1rem 0.12rem 0;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   .c-link-btn {
      display: block;
      // width: 0.77rem;
      height: 0.22rem;
      border-radius: 0.02rem;
      padding: 0 0.05rem;
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
         color: #333;
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
         color: #333;
         background: transparent;
      }
   }
}
.m-outbox {
   width: 100%;
   padding: 0.8rem 0.12rem 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   .btn-modify {
      margin-bottom: 0.2rem;
   }
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
               <div class="c-txt">微信号</div>
               <input type="text" v-model="wechat" disabled="disabled" class="c-newInfo" />
            </li>
            <li>
               <div class="c-txt">邀请人</div>
               <input type="text" disabled="disabled" v-model="inviterUsername" class="c-newInfo" />
            </li>
            <li>
               <div class="c-txt">实名收款账号</div>
               <div class="c-newInfo">
                  {{userDetail?userDetail.user.ali_account:""}}
                  <button class="c-link-btn" @click="openBindZfbModal">
                     {{userDetail.user.ali_account?"更改绑定":"绑定支付宝"}}
                     <i class="arrow"></i>
                  </button>
               </div>
            </li>
         </ul>
      </div>
      <div class="m-outbox">
         <a-button type="primary" size="large" class="btn-modify" @click="changeInfo">修改个人信息</a-button>

         <a href class="m-outbox-btn" @click="removeToken">退出登录</a>
      </div>
      <a-modal title="绑定信息" cancelText="取消" okText="确定" v-model="changeZfbModalVisible" @ok="bindZfb">
         <a-form-model ref="form" :rules="rules" layout="vertical" :model="form">
            <a-form-model-item label="支付宝账号" prop="ali_account">
               <a-input type="primary" v-model="form.ali_account" />
            </a-form-model-item>
            <a-form-model-item prop="realname" label="支付宝姓名">
               <a-input type="primary" v-model="form.realname" />
            </a-form-model-item>
         </a-form-model>
      </a-modal>

      <a-modal title="修改信息" cancelText="取消" okText="确定" v-model="changeInfoModalVisible" @ok="saveInfo">
         <a-form-model ref="infoForm" :rules="infoRules" layout="vertical" :model="form">
            <a-form-model-item label="昵称" prop="username">
               <a-input type="primary" v-model="infoForm.username" />
            </a-form-model-item>
            <a-form-model-item prop="wechat" label="微信号">
               <a-input type="primary" v-model="infoForm.wechat" />
            </a-form-model-item>
         </a-form-model>
      </a-modal>
   </div>
</template>

<script>
import GoldTitle from "@/components/GoldTitle";
import { removeToken } from "../../tools/token";
import { getUserDetail, updateUserInfo } from "@/apis/user";
export default {
   name: "userInfo",
   data() {
      return {
         userDetail: {
            user: {
               ali_account: "",
               username: "",
               realname: "",
               wechat: ""
            },
            inviter: { username: "" }
         },
         changeInfoModalVisible: false,
         form: {
            ali_account: "",
            realname: ""
         },
         changeZfbModalVisible: false,
         rules: {
            realname: [
               {
                  required: true,
                  message: "请输入支付宝姓名",
                  trigger: "blur"
               }
            ],
            ali_account: [
               {
                  required: true,
                  message: "请输入支付宝账号",
                  trigger: "blur"
               }
            ]
         },
         infoForm: {
            username: "",
            wechat: ""
         },
         infoRules: {}
      };
   },
   components: {
      GoldTitle
   },
   computed: {
      username: {
         get() {
            return this.userDetail ? this.userDetail.user.username : "";
         },
         set(username) {
            this.userDetail = {
               ...userDetail,
               ...{ user: { username: username } }
            };
         }
      },
      wechat: {
         get() {
            return this.userDetail ? this.userDetail.user.wechat : "";
         },
         set(username) {
            this.userDetail = {
               ...userDetail,
               ...{ user: { wechat } }
            };
         }
      },
      inviterUsername: {
         get() {
            return this.userDetail ? this.userDetail.inviter.username : "";
         },
         set(username) {
            this.userDetail = {
               ...userDetail,
               ...{ inviter: { username: username } }
            };
         }
      }
   },
   methods: {
      async changeInfo() {
         this.changeInfoModalVisible = true;
      },
      async saveInfo() {
         this.$refs.infoForm.validate(async valid => {
            if (valid) {
               try {
                  let { data } = await updateUserInfo({
                     username: this.infoForm.username,
                     wechat: this.infoForm.wechat
                  });
                  this.$message.success("修改成功");
                  this.getUserDetail();
                  this.changeInfoModalVisible = false;
               } catch (error) {
                  console.log(error);
               }
            } else {
               return false;
            }
         });
      },
      async bindZfb() {
         this.$refs.form.validate(async valid => {
            if (valid) {
               try {
                  let { data } = await updateUserInfo({
                     ali_account: this.form.ali_account,
                     realname: this.form.realname
                  });
                  this.$message.success("修改成功");
                  this.getUserDetail();
                  this.changeZfbModalVisible = false;
               } catch (error) {
                  console.log(error);
               }
            } else {
               return false;
            }
         });
      },
      openBindZfbModal() {
         this.changeZfbModalVisible = true;
      },
      removeToken() {
         removeToken();
         this.$router.push("login");
      },
      async getUserDetail() {
         try {
            let { data } = await getUserDetail();
            this.userDetail = data.data;
            this.form = {
               ali_account: this.userDetail.user.ali_account,
               realname: this.userDetail.user.realname
            };
            this.infoForm = {
               username: this.userDetail.user.username,
               wechat: this.userDetail.user.wechat
            };
         } catch (error) {}
      }
   },
   mounted() {
      this.getUserDetail();
   }
};
</script>