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
.ant-carousel /deep/ .slick-dots {
   height: auto;
}
.ant-carousel /deep/ .slick-slide img {
   border: 0.05rem solid #fff;
   display: block;
   margin: auto;
   width: 2rem;
   height: 2rem;
}
.ant-carousel /deep/ .slick-thumb {
   bottom: -0.45rem;
}
.ant-carousel /deep/ .slick-thumb li {
   width: 0.6rem;
   height: 0.45rem;
}
.ant-carousel /deep/ .slick-thumb li img {
   width: 100%;
   height: 100%;
   filter: grayscale(100%);
}
.ant-carousel /deep/ .slick-thumb li.slick-active img {
   filter: grayscale(0%);
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
      margin-top: 0.6rem;
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
      <GoldTitle title="分享红包" />
      <div class="m-vipCard-kind">
         <div class="title">选择售卖卡种</div>
         <ul class="list-item">
            <li @click="changeType(entity)" :class="{'selected':entity.type==type}" v-for="entity in typeEentities" :key="entity.type">
               <img class="c-icon" :src="entity.img" />
               <span class="c-des">{{entity.name}}</span>
            </li>
         </ul>
         <div class="title">选择海报图</div>
         <div class="m-slideShow-cont">
            <a-carousel :afterChange="magazineChange" ref="carousel" dotsClass="slick-dots slick-thumb">
               <a slot="customPaging" slot-scope="props">
                  <img :src="magazines[props.i]" />
               </a>
               <div class="img-wrap" v-for="(item,index) in magazines" :key="index">
                  <img :src="item" />
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
                  v-clipboard:copy="promoteText"
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
               <button id="make-poster" @click="sharing" class="tab-item-btn c-darkGold" style="cursor: pointer;">生成海报</button>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import GoldTitle from "@/components/GoldTitle";
import {
   getMaterialImages,
   getQrCode,
   getRandomPromoteText
} from "@/apis/user";
import MC from "mcanvas";
export default {
   name: "popularize",
   components: {
      GoldTitle
   },
   data() {
      return {
         type: 1,
         typeEentities: [
            {
               name: "饿了么",
               img: require("@/assets/image/ele.png"),
               type: 1
            },
            {
               name: "美   团",
               img: require("@/assets/image/meituan.png"),
               type: 2
            }
         ],
         magazines: [],
         magazineIndex: 0,
         mergedImgBase64: null,
         qrcodeImage: null,
         promoteText: ""
      };
   },
   methods: {
      onError() {
         this.$message.error("复制失败");
      },
      onCopy() {
         this.$message.success("复制成功");
      },
      mergeImg(backgroundImage, qrcodeImage) {
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
                  width: 190 * 1.5,
                  height: 190 * 1.5,
                  pos: {
                     y: 500,
                     x: 236 - 43
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
      async getQrCode() {
         let { data } = await getQrCode();
         return data.data.channel;
      },
      async authorize() {},
      async sharing() {
         let src = this.magazines[this.magazineIndex];
         let channel = await this.getQrCode();
         let { elem_url, mt_url, elem_auth_url } = channel;
         if (this.type == 1) {
            if (!elem_url) {
            this.$message.error("请先授权");
            let iframe_url = `${elem_auth_url}`;
            setTimeout(() => {
               this.$router.push({
                  path: "authorize_taobao",
                  query: {
                     iframe_url
                  }
               });
            }, 500);
            return;
            }
            this.qrcodeImage = elem_url;
            if (!src) {
               this.$message.error("请选择一张海报");
               return;
            }
            this.mergedImgBase64 = await this.mergeImg(src, elem_url);
            this.success(this.mergedImgBase64);
         } else if (this.type == 2) {
            this.qrcodeImage = mt_url;
            this.mergedImgBase64 = await this.mergeImg(src, mt_url);
            this.success(this.mergedImgBase64);
         }
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
         let { data } = await getRandomPromoteText({ type: this.type });
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
            console.log(error)
         }
      },
      async getMaterialImages() {
         let { data } = await getMaterialImages({ type: this.type });
         this.magazines = data.data;
      }
   },
   mounted() {
      this.getMaterialImages();
      this.getRandomPromoteText();
   }
};
</script>