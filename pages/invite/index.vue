<style lang="scss" scoped>
.m-vipCard-kind .title {
   font-family: "Helvetica Neue", helvetica, arial, sans-serif;
   font-size: 0.15rem;
   line-height: 0.36rem;
   padding: 0.04rem 0.12rem 0;
}
.m-vipCard-kind .list-item {
   display: flex;
   display: -webkit-flex;
   flex-wrap: wrap;
   -webkit-flex-wrap: wrap;
   padding: 0 1.534%;
   box-sizing: border-box;
}
.m-vipCard-kind .list-item li {
   display: flex;
   width: 1.1rem;
   border: 1px solid #ededed;
   box-sizing: border-box;
   border-radius: 0.04rem;
   margin: 0 1.534%;
   padding: 0.06rem 0.05rem;
   text-align: center;
   margin-bottom: 0.1rem;
   letter-spacing: -0.04rem;
   .c-icon {
      width: 0.3rem;
      height: 0.3rem;
      margin-right: 0.05rem;
      display: inline-block;
      background-repeat: no-repeat;
      background-size: cover;
   }
   .c-des {
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      box-flex: 1;
      font-size: 0.11rem;
      line-height: 0.3rem;
      vertical-align: top;
      display: block;
      letter-spacing: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
   }
}
.m-vipCard-kind .list-item li.selected {
   position: relative;
   border: 1px solid #f0d19e;
}
.m-vipCard-kind .list-item li.selected:before {
   position: absolute;
   content: "";
   top: -1px;
   right: -1px;
   width: 0.2rem;
   height: 0.13rem;
   background-image: url("~assets/image/selected-pic.png");
   background-repeat: no-repeat;
   background-size: cover;
}

.ant-carousel /deep/ .custom-slick-arrow {
   width: 0.35rem;
   height: 0.35rem;
   font-size: 0.35rem;
   color: #fff;
   opacity: 1;
   color: #999;
}
.ant-carousel /deep/ .custom-slick-arrow:before {
   display: none;
}
.ant-carousel /deep/ .custom-slick-arrow:hover {
   opacity: 1;
}
.ant-carousel /deep/ .slick-slide img {
   border: 0.05rem solid #fff;
   display: block;
   margin: auto;
   width: 3.3rem;
   height: 4.2rem;
}
.ant-carousel /deep/ .slick-dots-bottom {
   bottom: 0.2rem;
}
.m-sameSize-picList {
   width: 100%;
   white-space: nowrap;
   letter-spacing: -0.04rem;
   -webkit-transform: translateX(-18%);
   transform: translateX(-18%);
   li {
      position: relative;
      width: 40%;
      height: auto;
      display: inline-block;
      margin: 0 0.1rem;
      vertical-align: top;
      letter-spacing: 0;
      &:before {
         content: "";
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         z-index: 1;
         background-color: rgba(0, 0, 0, 0.5);
         border-radius: 0.05rem;
      }
      &.selected:before {
         display: none;
      }
      .piclist-img {
         position: relative;
         &:before {
            content: "";
            display: block;
            padding-top: 100%;
         }
         .piclist-link {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-position: center;
            background-size: cover;
            border-radius: 0.05rem;
         }
      }
   }
}
.m-vipCard-kind {
   .content {
      margin: 0 0.12rem;
      text-align: right;
      padding-bottom: 0.15rem;
      .btn-wrap {
         padding-top: 0.15rem;
         .c-btn-tab {
            font-size: 0.12rem;
            color: #666;
            width: 0.7rem;
            height: 0.22rem;
            line-height: 0.22rem;
            display: inline-block;
            border-radius: 0.1rem;
            vertical-align: top;
            text-align: center;
            border: 1px solid #f8f8f8;
            box-sizing: border-box;
         }
         .c-btn-tab.c-btn-copy {
            border: 0;
            background: #f5f5f5;
            outline: none;
            border: none;
         }
         .c-btn-tab {
            font-size: 0.12rem;
            color: #666;
            width: 0.7rem;
            height: 0.22rem;
            line-height: 0.22rem;
            display: inline-block;
            border-radius: 0.1rem;
            vertical-align: top;
            text-align: center;
            border: 1px solid #f8f8f8;
            box-sizing: border-box;
         }
      }
      .cont {
         padding: 0.02rem 0.1rem 0.06rem;
         line-height: 0.21rem;
         border: 1px solid #ededed;
         box-sizing: border-box;
         text-align: justify;
         border-radius: 0.06rem;
         height: 0.78rem;
         overflow-y: scroll;
      }
   }
   .recommend {
      margin-top: 0.2rem;
      font-size: 0.15rem;
      line-height: 0.36rem;
      padding: 0.04rem 0.12rem 0;
      .c-des-info {
         color: #999;
         font-size: 0.12rem;
         vertical-align: top;
      }
   }
}
.m-bottom-fixed {
   height: 0.45rem;
   .m-infoCover-btFixed {
      position: fixed;
      // left: 0;
      // right: 0;
      bottom: 0;
      width: 100%;
      z-index: 999;
      height: 0.45rem;
      background: #fff;
      max-width: 640px;
      // left
      .tab-wrap {
         display: flex;
         line-height: 0.45rem;
         .tab-item-btn {
            flex: 1;
            width: 50%;
            text-align: center;
            display: block;
            font-size: 0.18rem;
            color: #bb8b51;
            line-height: 0.45rem;
         }
         .c-darkGold {
            font-family: "Helvetica Neue", helvetica, arial, sans-serif;
            color: #68400b;
            font-size: bold;
            background-image: -moz-linear-gradient(
               180deg,
               #e7bb78 1%,
               #f0d19e 99%
            );
            background-image: -webkit-linear-gradient(
               180deg,
               #e7bb78 1%,
               #f0d19e 99%
            );
            background-image: -ms-linear-gradient(
               180deg,
               #e7bb78 1%,
               #f0d19e 99%
            );
            background-image: -webkit-linear-gradient(
               180deg,
               #e7bb78 1%,
               #f0d19e 99%
            );
            outline: none;
            border: none;
         }
      }
   }
}
</style>
<template>
   <div id="popularize">
      <GoldTitle title="邀请推广" />
      <div class="m-vipCard-kind">
         <div class="title">选择海报图</div>
         <div class="m-slideShow-cont">
            <a-carousel :afterChange="magazineChange" arrows ref="carousel">
               <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
                  <a-icon type="left" />
               </div>
               <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
                  <a-icon type="right" />
               </div>
               <div class="img-wrap" v-for="(item,index) in magazines" :key="index">
                  <img :src="item.url" />
               </div>
            </a-carousel>
         </div>
         <div class="title recommend">
            推荐文案
            <span class="c-des-info">（点击去生成海报自动复制）</span>
         </div>
         <div class="content">
            <div class="cont">{{promoteText}}</div>
            <div class="btn-wrap">
               <a href="javascript:;" @click="getRandomPromoteText" class="c-btn-tab">换一换</a>
               <button
                  id="word-copy"
                  v-clipboard:error="onError"
                  v-clipboard:copy="promoteTextWithUrl"
                  v-clipboard:success="onCopy"
                  class="c-btn-tab c-btn-copy"
                  style="cursor: pointer;"
               >复制文案</button>
            </div>
         </div>
      </div>
      <div class="m-bottom-fixed">
         <div class="m-infoCover-btFixed">
            <div class="tab-wrap">
               <button
                  id="make-poster"
                  @click="sharing"
                  class="tab-item-btn c-darkGold"
                  style="cursor: pointer;"
                  v-clipboard:error="onError"
                  v-clipboard:copy="promoteTextWithUrl"
                  v-clipboard:success="onCopy"
               >生成海报并复制文案</button>
            </div>
         </div>
      </div>
      <a-modal :bodyStyle="{padding:0}" title="长按保存图片" v-model="saveImageModalVisible" :footer="null">
         <img :src="mergedImgBase64" class="promote-img" />
      </a-modal>
   </div>
</template>
<script>
import GoldTitle from "@/components/GoldTitle";
import {
   getMaterialImages,
   getQrCode,
   getRandomPromoteText,
   getUserDetail
} from "@/apis/user";
import MC from "mcanvas";
import jrQrcode from "jr-qrcode";
export default {
   name: "invite",
   components: {
      GoldTitle
   },
   data() {
      return {
         type: 0,
         magazines: [],
         magazineIndex: 0,
         mergedImgBase64: null,
         qrcodeImage: null,
         saveImageModalVisible: false,
         promoteText: "",
         userDetail: {
            user: {
               userid: ""
            }
         }
      };
   },
   methods: {
      getOrigin() {
         return location.origin;
      },
      onError() {
         this.$message.error("复制失败");
      },
      onCopy() {
         this.$message.success("复制文案成功，记得分享哟～");
      },
      mergeImg(backgroundImage, qrcodeImage, x, y, w, h) {
         return new Promise((res, rej) => {
            const mc = new MC({
               width: 660,
               height: 840,
               backgroundColor: "#fff"
            });
            mc.background(backgroundImage, {
               left: 0,
               top: 0,
               color: "#000000",
               type: "crop",
               width: 660,
               height: 840
            })
               .add(qrcodeImage, {
                  width: w,
                  height: h,
                  pos: {
                     y,
                     x
                  }
               })
               // .text("扫码领取红包", {
               //    width: "300px",
               //    align: "center",
               //    pos: {
               //       x: 330 - 150,
               //       y: 562 + 0
               //    }
               // })
               .draw(b64 => {
                  res(b64);
               });
         });
      },
      async authorize() {},
      async sharing() {
         let src = this.magazines[this.magazineIndex];
         let qrcode = jrQrcode.getQrBase64(
            `${this.getOrigin()}/?inviter_id=${this.userDetail.user.userid}`
         );
         let { img_x, img_y, url, img_w, img_h } = this.magazines[
            this.magazineIndex
         ];
         if (!src) {
            this.$message.error("请选择一张海报");
            return;
         }
         this.mergedImgBase64 = await this.mergeImg(
            url,
            qrcode,
            img_x,
            img_y,
            img_w,
            img_h
         );
         this.saveImageModalVisible = true;
      },
      success(src) {
         this.$success({
            title: "长按保存图片",
            centered: true,
            okText: "知道了",
            // JSX support
            content: <img src={src} />
         });
      },
      async getRandomPromoteText() {
         let { data } = await getRandomPromoteText({
            type: this.type,
            promote_type: 1
         });
         let promoteText = data.data.content;
         this.promoteText = promoteText;
      },
      magazineChange(current) {
         this.magazineIndex = current;
      },
      async changeType(entity) {
         try {
            this.type = entity.type;
            await this.getMaterialImages();
            await this.getRandomPromoteText();
            this.magazines.length
               ? this.$refs.carousel.goTo(this.magazineIndex)
               : null;
         } catch (error) {
            console.log(error);
         }
      },
      async getMaterialImages() {
         let { data } = await getMaterialImages({
            type: this.type,
            promote_type: 1
         });
         this.magazines = data.data;
      },
      async getUserDetail() {
         try {
            let { data } = await getUserDetail();
            this.userDetail = data.data;
         } catch (error) {
            console.error(error);
         }
      }
   },
   computed: {
      promoteTextWithUrl() {
         return (
            this.promoteText +
            `点击加入${this.getOrigin()}/?inviter_id=${
               this.userDetail.user.userid
            }`
         );
      }
   },
   mounted() {
      this.getMaterialImages();
      this.getUserDetail();
      this.getRandomPromoteText();
   },
   destroyed() {
      this.$destroyAll();
   }
};
</script>