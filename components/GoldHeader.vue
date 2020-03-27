<style lang="scss" scoped>
.header {
   height: 1.475rem;
   background: url(~assets/image/index-bg.png) no-repeat;
   background-size: 100%;
   position: relative;
   .back-wrap {
      position: absolute;
      top: .1rem;
      width: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
   }
}
</style>
<template>
   <div class="header">
      <div v-if="showBackButton" class="back-wrap" @click="back">
         <i class="iconfont iconfanhui"></i>
      </div>
      <slot></slot>
   </div>
</template>
<script>
export default {
   name: "goldHeader",
   props:{
      showBackButton:{
         default:false,
         type:Boolean
      }
   },
   methods: {
      back() {
         this.$router.back();
      }
   }
};
</script>
