<style lang="scss">
.login-top {
   position: relative;
   .login-top-bg {
      width: 100%;
      height: 2.09rem;
      overflow: hidden;
      background-color: #f0d3a4;
      position: relative;
      .login-slogan {
         color: #683f0b;
         position: absolute;
         top: 0.5rem;
         font-size: 0.32rem;
         font-weight: bold;
         text-align: center;
         width: 100%;
      }
      .wrap {
         display: flex;
         margin: 0.1rem 0.1rem 0;
         .login-top-logo {
            width: 1.5rem;
            height: 0.24rem;
            background: url(~assets/image/ilm-row-logo.png) no-repeat;
            background-size: contain;
         }
         .login-box {
            width: calc(100% - 1.5rem - 0.06rem);
            flex: 1;
            line-height: 0.24rem;
            font-size: 0.14rem;
            color: #68400b;
            text-align: right;
            margin-left: 0.06rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .user-pic {
               width: 0.16rem;
               height: 0.16rem;
               border-radius: 100%;
               margin-right: 0.07rem;
               display: inline-block;
               vertical-align: text-top;
               background-size: cover;
               background-repeat: no-repeat;
            }
         }
      }
      .login-invite-title {
         width: 100%;
         font-size: 0.13rem;
         line-height: 0.19rem;
         color: #b67e33;
         text-align: center;
         padding: 0 0.175rem;
         -webkit-box-sizing: border-box;
         -moz-box-sizing: border-box;
         box-sizing: border-box;
         margin-top: 0.97rem;
         display: flex;
         justify-content: center;
         .top-title-inviter {
            display: block;
            max-width: 50%;
            font-size: 0.13rem;
            text-align: end;
            color: #b67e33;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
         }
      }
   }
   .login-top-icons {
      width: 100%;
      padding: 0 0.175rem;
      height: 1.14rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      top: 1.64rem;
      left: 0;
      z-index: 100;
      .login-top-icons-main {
         height: 1.14rem;
         background: #fff;
         border-radius: 0.07rem;
         position: relative;
         -webkit-box-shadow: 0 0.01rem 0.1rem #e9e9e9;
         box-shadow: 0 0.01rem 0.1rem #e9e9e9;
         .top-icons-main-line {
            width: 100%;
            height: 0.23rem;
            background: url(//www.iqiyipic.com/common/fix/qiyimeng2.1-rotate-line02.png)
               no-repeat;
            background-size: 100% auto;
            position: absolute;
            top: 50%;
            left: 0;
            margin-top: -0.115rem;
         }
         .top-icons-list {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            display: -webkit-flex;
            display: -moz-flex;
            justify-content: space-around;
            -webkit-justify-content: space-around;
            -moz-justify-content: space-around;
            li {
               text-align: center;
               &:first-child {
                  margin-left: 0.05rem;
               }
               em {
                  font-size: 0.13rem;
                  color: #333;
                  line-height: 0.38rem;
                  font-weight: bold;
               }
               .top-icons-icon {
                  display: block;
                  width: 0.6rem;
                  height: 0.6rem;
                  margin: 0.13rem auto 0;
               }
            }
         }
      }
   }
   .login-top-btn {
      width: 100%;
      height: 0.45rem;
      padding: 0 0.175rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin-top: 0.83rem;
      .login-top-btn-main {
         display: block;
         height: 100%;
         border-radius: 0.07rem;
         -webkit-box-shadow: 0 0 0.3rem 0.01rem #e9e9e9;
         box-shadow: 0 0 0.3rem 0.01rem #e9e9e9;
         background: #0bbe06;
         text-align: center;
         line-height: 0.45rem;
         color: #68400b;
         font-size: 0.18rem;
         background-image: -webkit-linear-gradient(
            left,
            #f0d19e 0,
            #e7bc77 100%
         );
         background-image: -o-linear-gradient(left, #f0d19e 0, #e7bc77 100%);
         background-image: linear-gradient(to right, #f0d19e 0, #e7bc77 100%);
         background-repeat: repeat-x;
      }
   }
   .login-top-agreement {
      text-align: center;
      margin-top: 0.165rem;
      .login-top-agreement-text {
         text-align: center;
         width: 2.9rem;
         margin: 0 auto;
         font-size: 0.13rem;
         line-height: 0.23rem;
         color: #666;
         .agreement-title {
            display: block;
         }
         .vip-rake-back-agreement {
            color: #bb8b51;
         }
      }
   }
}
.rake-back {
   width: 100%;
   padding: 0 0.175rem;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   margin-top: 0.15rem;
   .rake-back-main {
      border-radius: 0.07rem;
      -webkit-box-shadow: 0 0 0.3rem 0.01rem #e9e9e9;
      box-shadow: 0 0 0.3rem 0.01rem #e9e9e9;
      background: #fff;
      padding: 0 0.1rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .rake-back-main-title {
         font-size: 0.14rem;
         line-height: 0.455rem;
         color: #333;
         margin-left: 0.065rem;
         font-weight: 600;
      }
      .detail-rules {
         padding: 0.15rem 0;
         text-align: center;
         display: flex;
         justify-content: center;
         align-items: center;
         .detail-rules-text {
            font-size: 0.115rem;
            color: #999;
         }
         .detail-rules-angle {
            display: block;
            width: 0.05rem;
            height: 0.05rem;
            border-top: 2px solid #c9c9c9;
            border-right: 2px solid #c9c9c9;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            margin-left: 0.06rem;
         }
      }
      .rake-back-list li.rake-back-list-item {
         width: 100%;
         background: #f9f9f9;
         border-radius: 0.07rem;
         margin-bottom: 0.03rem;
         &:first-child {
            background: #faf6f1;
         }
         ul.rake-back-row-list {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            li.row-list-item {
               font-weight: 600;
               width: 25%;
               height: 100%;
               font-size: 0.115rem;
               text-align: center;
               color: #666;
               line-height: 0.2rem;
               padding: 0.1rem 0;
               &:nth-child(3),
               &:nth-child(4) {
                  color: #bb8b51;
                  font-weight: bold;
               }
            }
         }
      }
   }
}
.m-flow {
   width: 100%;
   height: 0;
   padding-top: 175.33%;
   background-image: url("/login-buttom-img.png");
   background-repeat: no-repeat;
   background-size: 100%;
}
.flow-join-btn {
   height: 0.45rem;
   width: 100%;
   .flow-join-btnMain {
      position: fixed;
      bottom: 0;
      width: 100%;
      background-image: -webkit-linear-gradient(left, #f0d19e 0, #e7bb78 100%);
      background-image: -o-linear-gradient(left, #f0d19e 0, #e7bb78 100%);
      background-image: linear-gradient(to right, #f0d19e 0, #e7bb78 100%);
      background-repeat: repeat-x;
      font-size: 0.18rem;
      color: #68400b;
      text-align: center;
      line-height: 0.45rem;
      // height: 0;
      max-width: 640px;
      &.am-up {
         height: 0.45rem;
         transition: height 0.3s;
      }
      &.am-down {
         height: 0;
         transition: height 0.3s;
      }
   }
}
</style>
<template>
   <div id="home">
      <div class="login-top">
         <div class="login-top-bg">
            <div class="wrap">
               <!-- <div class="login-top-logo"></div> -->
               <nuxt-link to="userinfo" tag="div" v-if="userLogin" class="login-box">
                  <img class="user-pic" src="/male-130.png" />
                  {{userInfo.user.username}}
               </nuxt-link>
               <nuxt-link v-else class="login-box cursor-pointer" :to="`login?inviter_id=${inviterId||''}`" tag="div">登录</nuxt-link>
            </div>
            <div class="login-slogan">分享红包 · 分享获利</div>
            <div v-if="inviterId&&inviterName" class="login-invite-title">
               <span class="top-title-inviter">{{inviterName}}</span>
               <span>邀请您加入个人联盟</span>
            </div>
         </div>
         <div class="login-top-icons">
            <div class="login-top-icons-main">
               <div class="top-icons-main-line" style="background-image: url(/arrowbar.png); background-repeat: no-repeat no-repeat;"></div>
               <ul class="top-icons-list">
                  <li>
                     <img src="/login-icon01.png" alt class="top-icons-icon icon-cost" />
                     <em>免费加盟</em>
                  </li>
                  <li>
                     <img src="/login-icon02.png" alt class="top-icons-icon icon-way" />
                     <em>建立团队</em>
                  </li>
                  <li>
                     <img src="/login-icon03.png" alt class="top-icons-icon icon-rake-back" />
                     <em>获得佣金</em>
                  </li>
               </ul>
            </div>
         </div>
         <div class="login-top-btn">
            <nuxt-link v-if="userInfo.user.userid" tag="span" :to="`home`" id="join-party-1" class="login-top-btn-main">进入首页</nuxt-link>
            <nuxt-link tag="span" v-else :to="`login?inviter_id=${inviterId||''}`" id="join-party-1" class="login-top-btn-main">现在加入</nuxt-link>
         </div>
         <!-- <div class="login-top-agreement">
            <p class="login-top-agreement-text">
               <i class="agreement-title">加入即表明您同意</i>
               <nuxt-link to="/commission" class="vip-rake-back-agreement">《爱奇艺i联盟成员佣金与行为规则》</nuxt-link>
            </p>
         </div>-->
      </div>
      <div class="rake-back">
         <div class="rake-back-main">
            <em class="rake-back-main-title">悦享推广返佣策略</em>
            <ul class="rake-back-list">
               <li class="rake-back-list-item">
                  <ul class="rake-back-row-list">
                     <li class="row-list-item">会员身份</li>
                     <li class="row-list-item">直推业绩</li>
                     <li class="row-list-item">好友消费</li>
                     <li class="row-list-item">您的佣金</li>
                  </ul>
               </li>
               <li class="rake-back-list-item">
                  <ul class="rake-back-row-list">
                     <li class="row-list-item">体验推广员</li>
                     <li class="row-list-item">1.5%</li>
                     <li class="row-list-item">¥10000</li>
                     <li class="row-list-item">￥150</li>
                  </ul>
               </li>
               <li class="rake-back-list-item">
                  <ul class="rake-back-row-list">
                     <li class="row-list-item">初级推广员</li>
                     <li class="row-list-item">3%</li>
                     <li class="row-list-item">￥10000</li>
                     <li class="row-list-item">￥300</li>
                  </ul>
               </li>
               <li class="rake-back-list-item">
                  <ul class="rake-back-row-list">
                     <li class="row-list-item">中级推广员</li>
                     <li class="row-list-item">3.6%</li>
                     <li class="row-list-item">￥10000</li>
                     <li class="row-list-item">￥360</li>
                  </ul>
               </li>
               <li class="rake-back-list-item">
                  <ul class="rake-back-row-list">
                     <li class="row-list-item">高级推广员</li>
                     <li class="row-list-item">4%</li>
                     <li class="row-list-item">￥10000</li>
                     <li class="row-list-item">￥400</li>
                  </ul>
               </li>
            </ul>
            <p class="detail-rules">
               <nuxt-link to="rules" tag="a" class="detail-rules-text" rseat="810251_ocm_unionperson_openRules">详细返佣规则请参看帮助页面</nuxt-link>
               <span class="detail-rules-angle"></span>
            </p>
         </div>
      </div>
      <div class="m-flow"></div>
      <div class="flow-join-btn">
         <nuxt-link v-if="userInfo.user.userid" :to="`home`" class="flow-join-btnMain" tag="div" :class="showJoin2?'am-up':'am-down'">进入首页</nuxt-link>
         <nuxt-link v-else :to="`login?inviter_id=${inviterId||''}`" class="flow-join-btnMain" tag="div" :class="showJoin2?'am-up':'am-down'">现在加入</nuxt-link>
      </div>
   </div>
</template>

<script>
import isLogin from "@/tools/isLogin";
import { getUserDetail, visitorGetInviterInfoById } from "@/apis/user";
export default {
   name: "introduce",
   components: {},
   mounted() {
      if (this.userLogin) {
         this.getUserInfo();
      }
      this.inviterId = this.$route.query.inviter_id;
      if (this.inviterId) {
         this.getInviterInfo();
      }
      this.$nextTick(() => {
         this.scroll();
         window.addEventListener("scroll", this.scroll);
      });
   },
   //  async asyncData() {

   //  },
   data() {
      return {
         userLogin: isLogin(),
         userInfo: {
            user: {
               username: "",
               userid: ""
            }
         },
         showJoin2: false,
         redirectUrl: "",
         inviterId: "",
         inviterName: ""
      };
   },
   computed: {},
   methods: {
      async getInviterInfo() {
         try {
            let inviterId = this.inviterId;
            let { data } = await visitorGetInviterInfoById(this.inviterId);
            this.inviterName = data.data.username;
         } catch (error) {
            console.log(error);
         }
      },
      async getUserInfo() {
         try {
            let { data } = await getUserDetail();
            this.userInfo = data.data;
         } catch (error) {
            console.log(error);
         }
      },
      async scroll() {
         let el = document.getElementById("join-party-1");
         if (el) {
            const elOffsetTop = el.offsetTop;
            const docScrollTop =
               document.documentElement.scrollTop -
               elOffsetTop -
               el.clientHeight;
            if (docScrollTop >= 0) {
               this.showJoin2 = true;
            } else {
               this.showJoin2 = false;
            }
         }
      }
   }
};
</script>
