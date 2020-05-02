<style lang="scss" scope>
#introduce {
   background-color: rgb(243, 243, 243);
}
.login-top {
   position: relative;
   .login-top-bg {
      width: 100%;
      height: 1.81rem;
      overflow: hidden;
      background: url("~assets/image/index-top-bg.png");
      background-size: cover;
      position: relative;
      border: none;
      padding-top: 0.13rem;
      .login-slogan {
         display: flex;
         justify-content: center;
         .logo {
            height: 0.26rem;
            width: 1.21rem;
         }
      }
      .login-wrap {
         display: flex;
         position: absolute;
         top: 0.14rem;
         right: 0.17rem;

         .login-box-login {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 0.47rem;
            height: 0.2rem;
            color: rgba(143, 96, 25, 1);
            background-color: rgba(255, 236, 206, 1);
            border-radius: 0.16rem;
            font-size: 0.12rem;
            // line-height: 0.2rem;
            // text-align: center;
         }
         .login-box {
            line-height: 0.24rem;
            font-size: 0.14rem;
            color: #68400b;
            width: 1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
            display: inline-block;
            .user-pic {
               width: 0.16rem;
               height: 0.16rem;
               border-radius: 100%;
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
   .login-top-banner {
      width: 100%;
      padding: 0 0.175rem;
      height: 1.14rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      top: 0.54rem;
      left: 0;
      z-index: 100;
   }
   .login-top-btn {
      width: 100%;
      padding: 0 0.175rem;
      margin-top: 0.27rem;

      .login-top-btn-main,
      .login-top-btn-join-us {
         width: 3.4rem;
         height: 0.4rem;
         color: rgba(255, 255, 255, 1);
         background-color: rgba(231, 197, 144, 1);
         border-radius: 0.06rem;
         font-size: 0.16rem;
         line-height: 0.4rem;
         text-align: center;
         font-weight: bold;
      }
      .login-top-btn-join-us {
         margin-top: 0.1rem;
      }
      .self-get-rp-btn {
         color: rgba(143, 96, 25, 1);
         font-size: 0.14rem;
         text-align: center;
         height: 0.4rem;
         line-height: 0.4rem;
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
   // margin-top: 0.15rem;
   .rake-back-main {
      border-radius: 0.07rem;
      -webkit-box-shadow: 0 0 0.3rem 0.01rem #e9e9e9;
      box-shadow: 0 0 0.3rem 0.01rem #e9e9e9;
      background: #fff;
      padding: 0.1rem;
      padding-top: 0.2rem;
      padding-bottom: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      overflow: hidden;
      .rake-back-main-title {
         font-size: 0.14rem;
         line-height: 0.455rem;
         color: #333;
         margin-left: 0.065rem;
         font-weight: 600;
      }
      .detail-rules {
         // padding: 0.15rem 0;
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
   display: flex;
   justify-content: center;
   margin: 0 0.17rem;
   width: calc(100% - 0.34rem);
   // height: 6.54rem;
   border-radius: 0.11rem;
   line-height: 150%;
   box-shadow: 0px 0.11rem 0.25rem 0px rgba(0, 0, 0, 0.1);
   background-color: #fff;
   // background-image: url("/login-bottom-img.png");
   // background-repeat: no-repeat;
   // background-size: contain;
   background-position: 0 0.3rem;
   margin-top: 0.2rem;
   .income {
      margin-top: 0.11rem;
      height: 0.29rem;
      width: 1.24rem;
   }
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
      max-width: 1024px;
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
#introduce {
   .ant-carousel /deep/ .slick-slide {
      text-align: center;
      height: 1.47rem;
      line-height: 1.47rem;
      background: #ccc;
      overflow: hidden;
   }

   .ant-carousel /deep/ .custom-slick-arrow {
      width: 0.25rem;
      height: 0.25rem;
      font-size: 0.25rem;
      opacity: 0.8;
      color: #999;
   }
   .ant-carousel /deep/ .custom-slick-arrow:before {
      display: none;
   }
   .ant-carousel /deep/ .custom-slick-arrow:hover {
      opacity: 1;
   }

   .ant-carousel /deep/ .slick-slide h3 {
      color: #fff;
   }
}
.title {
   text-align: center;
   color: rgba(143, 96, 25, 1);
   margin: 0.2rem 0 0.1rem 0;
}
.wrap {
   padding: 0.2rem;
   margin: 0 auto;
   width: calc(100% - 0.35rem);
   background-color: #fff;
   border-radius: 0.07rem;
   box-shadow: 0 0 0.3rem 0.01rem #e9e9e9;
   margin-bottom: 0.1rem;
   .item {
      margin-bottom: 0.2rem;
      &:last-child {
         margin-bottom: 0;
      }
      .question {
         color: #8f6019;
         font-size: 0.14rem;
         font-weight: bold;
         line-height: 2;
      }
      .answer {
         color: #848484;
         font-size: 0.13rem;
      }
   }
}
</style>
<template>
   <div id="introduce">
      <div class="login-top">
         <div class="login-top-bg">
            <div class="login-slogan">
               <img class="logo" src="~/assets/image/logo_2.png" alt />
            </div>
            <div class="login-wrap">
               <!-- <div class="login-top-logo"></div> -->
               <nuxt-link to="userinfo" tag="div" v-if="userLogin" class="login-box">
                  <img class="user-pic" src="/male-130.png" />
                  {{userInfo.user.username}}
               </nuxt-link>
               <nuxt-link v-else class="login-box-login cursor-pointer" :to="`login?inviter_id=${inviterId||''}`" tag="div">登录</nuxt-link>
            </div>
            <div v-if="inviterId&&inviterInfo" class="login-invite-title">
               <span class="top-title-inviter">{{inviterInfo.username}}</span>
               <span>邀请您加入悦享推广</span>
            </div>
         </div>
         <div class="login-top-banner">
            <a-carousel>
               <!-- <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
                  <a-icon type="left" />
               </div>
               <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
                  <a-icon type="right" />
               </div>-->
               <img src="@/assets/image/banner-1.jpg" alt />
               <img src="@/assets/image/banner-2.jpg" alt />
            </a-carousel>
         </div>
         <div class="login-top-btn">
            <div tag="div" @click="getRP" :to="`home`" id="join-party-1" class="login-top-btn-main">领取外卖大红包</div>
            <nuxt-link v-if="userLogin" :to="`home`" class="login-top-btn-join-us" tag="div">进入首页</nuxt-link>
            <div tag="div" v-else @click="bePromoter" :to="`home`" id="join-party-1" class="login-top-btn-join-us">成为推广</div>
            <!-- <div class="self-get-rp-btn" ></div> -->
         </div>
         <!-- <div class="login-top-agreement">
            <p class="login-top-agreement-text">
               <i class="agreement-title">加入即表明您同意</i>
               <nuxt-link to="/commission" class="vip-rake-back-agreement">《爱奇艺i联盟成员佣金与行为规则》</nuxt-link>
            </p>
         </div>-->
      </div>
      <div class="m-flow">
         <img src="/login-bottom-img.png" alt />
      </div>
      <div class="title">———— 反佣策略 ————</div>
      <div class="rake-back">
         <div class="rake-back-main">
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
      <div class="title">———— 常见问题 ————</div>
      <div class="wrap">
         <div class="item">
            <div class="question">领取的红包每天都有吗？</div>
            <div class="answer">是的，我们是美团/饿了么的合作平台，红包真实可用，每天都能够领取5-9元的大包！</div>
         </div>
         <div class="item">
            <div class="question">分享好友返现是什么意思呢？</div>
            <div class="answer">我们平台与美团/饿了么深度合作，让利给平台的推广者，只要分享给好友领取红包或者邀请成为推广者，有关联的使用红包订单，您就会有相关返现。</div>
         </div>
         <div class="item">
            <div class="question">分享好友能挣多少钱呢？</div>
            <div class="answer">因为领红包点外卖是一个强需求，频次很高，好友点单100元，资深的推广者就能获得4元返现，自己带领推广团队也能让您获益颇丰，积少成多，月入万元零花钱的推广者也不在少数！</div>
         </div>
         <div class="item">
            <div class="question">平台真实可信吗？</div>
            <div class="answer">平台作为美团/饿了么的合作方，仅收取部分技术服务费（5%以内），作为一个长期平台，不用担心相关安全性问题，如使用过程中有任何问题可与平台客服联系！</div>
         </div>
      </div>
      <div class="flow-join-btn">
         <nuxt-link v-if="userInfo.user.userid" :to="`home`" class="flow-join-btnMain" tag="div" :class="showJoin2?'am-up':'am-down'">进入首页</nuxt-link>
         <div v-else class="flow-join-btnMain" tag="div" @click="bePromoter" :class="showJoin2?'am-up':'am-down'">现在加入</div>
      </div>
      <a-modal centered :bodyStyle="{padding:0}" :title="isWechat()?'长按识别二维码':'长按保存，微信扫码关注'" v-model="saveImageModalVisible" :footer="null">
         <img :src="mergedImgBase64" class="promote-img" />
      </a-modal>
   </div>
</template>

<script>
import isLogin from "@/tools/isLogin";
import {
   getUserDetail,
   visitorGetInviterInfoById,
   getGrabInfo,
   getNonPermissionMaterialImages
} from "@/apis/user";
import jrQrcode from "jr-qrcode";
import MC from "mcanvas";
export default {
   name: "ground",
   components: {},
   mounted() {
      this.getMaterialImages();
      if (this.userLogin) {
         this.getUserInfo();
      }
      this.getGrabInfo();
      this.inviterId = this.$route.query.inviter_id || "";
      this.resourceFrom = this.$route.query.resource_from || "";
      this.openid = this.$route.query.openid || "";
      this.resourceTag = this.$route.query.resource_tag || "";
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
         magazines: [],
         userLogin: isLogin(),
         userInfo: {
            user: {
               username: "",
               userid: ""
            },
            channel: {
               elem_share_url: "",
               mt_url: "",
               rid: "",
               elem_shop_url: "",
               elem_auth_url: "",
               promote_share_url: "",
               customer_share_url: ""
            }
         },
         grabInfo: null,
         showJoin2: false,
         redirectUrl: "",
         inviterId: "",
         inviterInfo: null,
         resourceFrom: "",
         openid: "",
         resourceTag: "",
         mergedImgBase64: "",
         saveImageModalVisible: false
      };
   },
   computed: {},
   methods: {
      isWechat() {
         var ua = navigator.userAgent.toLowerCase();
         if (
            String(ua.match(/MicroMessenger/i)) == "micromessenger" ||
            String(ua.match(/qq\//i)) == "qq/"
         ) {
            return true;
         } else {
            return false;
         }
         return false;
      },
      async bePromoter() {
         // console.log(this.magazines);
         // let qrcode = jrQrcode.getQrBase64(this.inviterInfo.invite_qrcode);
         let { url, img_x, img_y, img_w, img_h } = this.magazines[
            Math.ceil(Math.random() * this.magazines.length - 1)
         ];
         this.mergedImgBase64 = await this.mergeImg(
            url,
            this.inviterInfo.invite_qrcode,
            img_x,
            img_y,
            img_w,
            img_h
         );
         this.saveImageModalVisible = true;
      },
      getImageSizeFromUrl(src) {
         let img = new Image();
         img.src = src;
         return new Promise((res, rej) => {
            img.onload = () => {
               res({
                  width: img.width,
                  height: img.height
               });
            };
            img.onerror = () => {
               rej(new Error("获取图像尺寸失败"));
            };
         });
      },
      async mergeImg(backgroundImage, qrcodeImage, x, y, w, h) {
         try {
            let wh = await this.getImageSizeFromUrl(backgroundImage);
            return new Promise((res, rej) => {
               const mc = new MC({
                  width: wh.width,
                  height: wh.height,
                  backgroundColor: "#fff"
               });
               mc.background(backgroundImage, {
                  left: 0,
                  top: 0,
                  color: "#000000",
                  type: "crop",
                  width: wh.width,
                  height: wh.height
               })
                  .add(qrcodeImage, {
                     width: w,
                     height: h,
                     pos: {
                        y: y,
                        x: x
                     }
                  })
                  .draw(b64 => {
                     res(b64);
                  });
            });
         } catch (error) {
            this.$message.error(error.message);
         }
      },
      async getMaterialImages() {
         let { data } = await getNonPermissionMaterialImages({ type: 1 });
         this.magazines = data.data;
      },
      async getGrabInfo() {
         try {
            let { data } = await getGrabInfo(this.openid);
            this.grabInfo = data.data;
         } catch (error) {
            console.log(error);
         }
      },
      async getRP() {
         this.$vactionsheet.show({
            menus: {
               elem: `饿了么`,
               elem_gs: `饿了么果蔬`,
               mt: `美团`
            },
            onConfirm: index => this.onConfirm(index)
         });
      },
      onConfirm(index) {
         let guoshu, elem, mt;
         if (!this.userInfo.channel.rid) {
            this.$message.error("您还未授权，授权后才能获得返佣哟～");
            setTimeout(() => {
               this.$router.push("/authorize_v2");
            }, 500);
            return;
         }
         if (!this.grabInfo) {
            this.$message.error("获取红包链接失败");
            return;
         }
         guoshu = this.grabInfo.channel.elem_shop_origin_url;
         elem = this.grabInfo.channel.elem_origin_url;
         mt = this.grabInfo.channel.mt_url;
         if (index == `饿了么`) {
            location.href = elem;
         } else if (index == "饿了么果蔬") {
            location.href = guoshu;
         } else if (index == "美团") {
            location.href = mt;
         }
      },
      async getInviterInfo() {
         try {
            let inviterId = this.inviterId;
            let { data } = await visitorGetInviterInfoById(this.inviterId);
            this.inviterInfo = data.data;
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
