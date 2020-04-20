<style lang="scss" scoped>
#authorizeTaobao {
   background: #ededed;
   margin: 0 auto;
   border: 0;
   left: 0;
   right: 0;
   overflow-x: hidden;
   overflow-y: hidden;
   width: 100%;
   height: 100vh;
}
#frame {
   width: 100%;
   margin: 0 auto;
   border: 0;
   left: 0;
   right: 0;
   overflow-x: hidden;
   overflow-y: hidden;
   background: #ededed;
   height: 38vh;
   > html {
      overflow: hidden;
   }
}
.login-info {
   width: 100%;
   height: 150px;
   overflow-y: scroll;
   ul {
      padding-left: 0.2rem;
   }
   li {
      background: url(https://img.alicdn.com/tps/i3/TB1HgYqFVXXXXayXpXXMqSxTXXX-200-800.png)
         no-repeat;
      -webkit-background-size: 100px 400px;
      background-size: 100px 400px;
      list-style: none;
      background-position: 0 -150px;
      padding-left: 20px;
      line-height: 30px;
      font-size: 14px;
   }
}
.modal-footer {
   display: flex;
   padding: 0;
   height: 60px;
   .modal-btn {
      width: 50%;
      height: 100%;
      margin: 0;
      border-top: 1px solid #d0d0d0;
      background-color: #f2f2f2;
      outline: none;
      cursor: pointer;
   }
   .ignore {
      border-right: 1px solid #d0d0d0;
      border-radius: 0 0 0 5px;
   }
   .taobao {
      color: #fff;
      background: #ff5500;
   }
}
.img-wrap {
   display: flex;
   justify-content: center;
   align-items: center;
}
.mask {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.7);
   .arror {
      width: 2rem;
      height: 2rem;
      position: absolute;
      right: 0.3rem;
      top: 0;
   }
   .steps {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      padding-top: 1.5rem;
      .step {
         font-size: 0.22rem;
         width: 100%;
         display: flex;
         margin-top: 0.2rem;
         color: #fff;
         padding-left: 0.7rem;
         .icon {
            border-radius: 50%;
            width: 0.3rem;
            height: 0.3rem;
            line-height: 0.3rem;
            text-align: center;
            background-color: #3277df;
            margin-right: 0.1rem;
         }
         .desc {
            display: flex;
            align-items: center;
         }
      }
   }
   .safari-icon {
      height: 0.2rem;
      width: 0.2rem;
   }
   .more-icon {
      height: 0.3rem;
      width: 0.3rem;
   }
}
</style>

<style>
.taobao-modal .ant-modal-footer {
   padding: 0 !important;
}
.taobao-modal .ant-modal-title {
   text-align: center;
}
</style>
<template>
   <div v-if="!is_weixin()" id="authorizeTaobao">
      <div id="frame-wrap">
         <iframe :src="src" id="frame" frameborder="0" class="taobao-iframe" height="126.5"></iframe>
      </div>
      <div class="login-info">
         <ul>
            <div id="scopePermissionDiv" style="width:100%;height:150px;overflow-y:scroll;">
               <li>应淘宝官方要求</li>
               <li>需授权并登陆后绑定您的账号</li>
               <li>正确绑定后您可享受全部返佣</li>
            </div>
         </ul>
      </div>
      <a-modal class="taobao-modal" centered v-model="modalVisible" title="-操作提示-">
         <div slot="footer" class="modal-footer">
            <button class="modal-btn ignore" @click="handleCancel">忽略</button>
            <button class="modal-btn taobao" type="primary" @click="handleTaobaoClick">唤醒手淘</button>
         </div>
         <div class="img-wrap">
            <img src="@/assets/image/qd_tip.gif" style="width: 90%;border-radius:5px;padding-bottom:8px;" />
         </div>
      </a-modal>
   </div>
   <div v-else class="mask">
      <img src="~/assets/image/wechat_open.png" alt class="arror" />
      <div class="steps">
         <div class="step">
            <div class="icon">1</div>
            <div class="desc">
               点击右上角的
               <img src="~/assets/image/dotdotdot.jpeg" alt class="more-icon" />按钮
            </div>
         </div>
         <div class="step" v-if="is_ios()">
            <div class="icon">2</div>
            <div class="desc">
               选择
               <img src="~/assets/image/safari.png" alt class="safari-icon" />在safari中打开
            </div>
         </div>
         <div class="step" v-if="is_android()">
            <div class="icon">2</div>
            <div class="desc">
               选择
               <img src="~/assets/image/browser.png" alt class="safari-icon" />在浏览器打开
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   name: "authorize_taobao",
   data() {
      return {
         src: "",
         modalVisible: false,
         tbUrl: ""
      };
   },
   methods: {
      handleCancel(e) {
         this.modalVisible = false;
      },
      setIframeHeight(iframe) {
         if (iframe) {
            var iframeWin =
               iframe.contentWindow || iframe.contentDocument.parentWindow;
            if (iframeWin.document.body) {
               iframe.height =
                  iframeWin.document.documentElement.scrollHeight ||
                  iframeWin.document.body.scrollHeight;
               iframe.height = iframe.height / 2;
            }
         }
      },
      iosIframeWidthBug() {
         if (!navigator.userAgent.match(/iPad|iPhone/i)) return false;
         var iframebody = document.querySelector("#frame").contentWindow
            .document.body;
         iframebody.style.width = document.body.clientWidth + "px";
      },
      fix() {
         $("#frame").attr("scrolling", "yes");
         $("#frame").attr("style", "height:50vh;");
         layer.open({
            content: "页面已展开",
            skin: "msg",
            time: 2 //2秒后自动关闭
         });
      },

      is_weixin() {
         var ua = navigator.userAgent.toLowerCase();
         if (
            ua.match(/MicroMessenger/i) == "micromessenger" ||
            ua.match(/qq\//i) == "qq/"
         ) {
            return true;
         } else {
            return false;
         }
      },
      is_android() {
         var ua = navigator.userAgent.toLowerCase();
         if (ua.match(/(Android|SymbianOS)/i)) {
            return true;
         } else {
            return false;
         }
      },
      is_ios() {
         var ua = navigator.userAgent.toLowerCase();
         if (/iphone|ipad|ipod/.test(ua)) {
            return true;
         } else {
            return false;
         }
      },
      is_mobile() {
         return /Android|webOS|iPhone|iPod|BlackBerry/i.test(
            navigator.userAgent
         );
      },
      handleTaobaoClick() {
         this.$nextTick(() => {
            if (this.is_android()) {
               window.location.href = this.tbUrl;
            } else {
               window.location.href = this.tbUrl;
            }
         });
      }
   },
   mounted() {
      // window.location.href = "https://www.baidu.com"
      var ifm_url = this.$route.query.iframe_url;
      if (ifm_url) {
         if (!this.is_weixin()&&this.is_mobile()) {
            this.modalVisible = true;
         }
         ifm_url = decodeURIComponent(ifm_url);
         this.src = ifm_url;
         if (this.is_weixin() == false) {
            let tb_url = ifm_url.replace("http://", "").replace("https://", "");
            tb_url =
               "tbopen://m.taobao.com/tbopen/index.html?action=ali.open.nav&module=h5&h5Url=" +
               encodeURIComponent(tb_url);
            this.tbUrl = tb_url;
         }
      } else {
         this.$message.error("授权参数错误，即将返回");
         setTimeout(() => {
            this.$router.back();
         }, 500);
      }
      if (!this.is_weixin()) {
         this.$nextTick(() => {
            let frame = document.querySelector("#frame");
            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
               frame.attributes;
               frame.setAttribute("scrolling", "no");
            }
         });
      }
   }
};
</script>