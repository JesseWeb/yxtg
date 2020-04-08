<style lang="scss" scoped>
#settling {
   height: 100vh;
}
.wrap {
   padding: 0 0.2rem;
   text-align: right;
}
.settling-input {
   text-align: left;
   width: 100%;
}
/deep/ .ant-form-item-children {
   width: 100%;
}
.settling-btn {
   margin-top: 0.2rem;
}
.main-wrap {
   display: flex;
   justify-content: center;
   margin-top: 0.47rem;
   .main {
      box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 0.05rem;
      overflow: hidden;
      width: 3.08rem;
      background-color: #fff;
      padding-bottom: 0.1rem;
      text-align:left;
      .settle-account-wrap {
         background: rgba(243, 213, 167, 1);
         padding: 0.1rem;
         .account-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.1rem;
            font-size: 0.14rem;
            .desc {
               font-weight: bold;
            }
            .set-account {
               color: #1890ff;
            }
         }
         .income-delay {
            font-size: 0.13rem;
         }
      }
      .form {
         padding: 0.1rem;
         .title {
            font-size: 0.14rem;
            font-weight: bold;
         }
         .money-wrap {
            padding: 0.1rem 0;
            padding-bottom: 0;
            margin: 0 0.1rem;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #bbb;
            .digit {
               font-size: 0.37rem;
               font-weight: bold;
            }
            .input-wrap {
               height: 0.35rem;
               margin-left: 0.2rem;
               input {
                  border: none;
                  outline: none;
                  font-size: 0.16rem;
                  height: 100%;
                  &::placeholder {
                     color: #848484;
                  }
               }
            }
         }
         .money-desc {
            margin-top: 0.1rem;
            padding-left: 0.1rem;
            display: flex;
            align-items: center;
            font-size: 0.13rem;
            .surplus {
               color: #a8a8a8;
            }
            .settle-all {
               color: #1890ff;
               cursor: pointer;
            }
         }
         .settle-btn-wrap {
            margin-top: 0.2rem;
            width: 100%;
            display: flex;
            justify-content: center;
            .settle-btn {
               width: 2.66rem;
               height: 0.37rem;
               border-radius: 0.05rem;
               background-image: linear-gradient(
                  to right,
                  #f0d19e 0,
                  #e7bb77 100%
               );
               color: rgba(255, 254, 254, 1);
               outline: none;
               border: none;
               font-size: 0.16rem;
               text-align: center;
            }
         }
      }
   }
}
</style>
<template>
   <div id="settling">
      <GoleTitle title="结算" />
      <div class="main-wrap">
         <div class="main">
            <div class="settle-account-wrap">
               <div class="account-info">
                  <div class="desc">到账账号</div>
                  <div class="set-account" v-if="userDetail.user.ali_account" @click="openBindZfbModal">支付宝账号（{{corpAccount(userDetail.user.ali_account||'')}}）</div>
                  <div class="set-account" @click="openBindZfbModal" v-else>填写结算账号</div>
               </div>
               <div class="income-delay">7个工作日内到账</div>
            </div>
            <div class="form">
               <div class="title">结算金额</div>
               <div class="money-wrap">
                  <div class="digit">¥</div>
                  <div class="input-wrap">
                     <input type="number" pattern="number" onkeyup="value=value.replace(/[^\d\.]/g,'')" step="0.01" placeholder="请输入结算金额" v-model="num" />

                  </div>
               </div>
               <div class="money-desc">
                  <div class="surplus">当前可结算金额{{userDetail.account.price}}元，</div>
                  <div class="settle-all" @click="settleAll">全部结算</div>
               </div>
               <div class="settle-btn-wrap">
                  <button class="settle-btn" @click="handleSubmit">结算</button>
               </div>
            </div>
         </div>
      </div>
      <a-modal title="填写结算账号" cancelText="取消" okText="确定" v-model="changeZfbModalVisible" @ok="bindZfb">
         <a-form-model ref="form" :rules="rules" layout="vertical" :model="form">
            <a-form-model-item label="支付宝账号" prop="ali_account">
               <a-input type="primary" v-model="form.ali_account" />
            </a-form-model-item>
            <a-form-model-item prop="realname" label="支付宝姓名">
               <a-input type="primary" v-model="form.realname" />
            </a-form-model-item>
         </a-form-model>
      </a-modal>
      <!-- <div class="wrap"></div> -->
   </div>
</template>
<script>
import Vue from "vue";
import GoleTitle from "@/components/GoldTitle";
import { drawal, getUserDetail,updateUserInfo } from "@/apis/user";
export default {
   name: "settling",
   components: {
      GoleTitle
   },
   data() {
      return {
         num: "",
         userDetail: {
            user: {
               ali_account: ""
            },
            account: {
               price: ""
            }
         },
         form: {
            ali_account: "",
            realname: ""
         },
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
         changeZfbModalVisible: false
      };
   },
   methods: {
      corpAccount(str){
         return str.substring(str.length-4,str.length)
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
      async getUserDetail() {
         try {
            let { data } = await getUserDetail();
            this.userDetail = data.data;
            this.form = {
               ali_account: this.userDetail.user.ali_account,
               realname: this.userDetail.user.realname
            };
         } catch (error) {
            console.error(error)
         }
      },
      validateForm() {},
      handleSubmit(e) {
         this.drawal(this.num);
      },
      async settleAll() {
         this.num = this.userDetail.account.price;
      },
      async drawal(num) {
         try {
            let { data } = await drawal(num);
            this.$message.success(data.msg);
            this.num = "";
         } catch (error) {
            console.log(num);
         }
      }
   },
   mounted() {
      this.getUserDetail();
   }
};
</script>
