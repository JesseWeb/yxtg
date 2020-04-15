<style lang="scss" scoped>
.m-title-bar-wrap {
   height: 0.44rem;
   display: flex;
   .m-title-base {
      // position: fixed;
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
      height: 0.44rem;
      line-height: 0.44rem;
      .back-wrap {
         cursor: pointer;
         position: absolute;
         top: 50%;
         transform: translate(0, -50%);
         width: 0.5rem;
         display: flex;
         justify-content: center;
         align-items: center;
      }
      .c-title {
         color: rgba(80, 80, 80, 1);
         font-size: 0.17rem;
         font-weight: bold;
         text-align: center;
      }
   }
}
</style>
<template>
   <div data-v-a391f616 class="m-title-bar-wrap">
      <div data-v-a391f616 class="m-title-base" :style="{backgroundColor:bgColor}">
         <div class="back-wrap" @click="back">
            <i class="iconfont iconfanhui"></i>
         </div>
         <div data-v-a391f616 class="c-title" @click="titleClick" v-if="title">{{title}}</div>
         <div data-v-a391f616 class="c-title" @click="titleClick" v-else>
            <slot></slot>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   name: "goldTitle",
   props: {
      title: {
         required: false,
         default: "",
         type: String
      },
      titleClick: {
         required: false,
         default: function() {},
         type: Function
      },
      bgColor: {
         default: "#f0d19e",
         type: String
      },
      backUrl: {
         type: String,
         default: null
      }
   },
   methods: {
      back() {
         if (this.backUrl) {
            this.$router.push(this.backUrl)
         } else {
            this.$router.back();
         }
      }
   }
};
</script>
