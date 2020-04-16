<style lang="scss" scoped>
#authResult {
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 100vh;
}
.btn-wrap {
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0.1rem 0.12rem;
   margin-top: 0.4rem;
}
.btn {
   width: 100%;
   height: 0.5rem;
   border-radius: 0.07rem;
   box-shadow: 0 0 0.1rem 0.01rem #e9e9e9;
   background-image: linear-gradient(to right, #f0d19e 0, #e7bb77 100%);
   background-repeat: repeat-x;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
}
.main {
   display: flex;
   align-items: center;
   flex-direction: column;
   padding-top: 0.6rem;
   .iconchenggong {
      color: #e7bb77;
      font-size: 1rem;
   }
   .iconshibai {
      color: #E84436;
      font-size: 1rem;
   }
   .desc {
      font-size: 0.24rem;
   }
   .sub-desc{
      color: #999;
   }
}
</style>
<template>
   <div id="authResult">
      <div class="main">
         <i v-if="result" class="iconfont iconchenggong"></i>
         <span v-if="result" class="desc">授权成功</span>
         <i v-if="!result" class="iconfont iconshibai"></i>
         <span v-if="!result" class="desc">授权失败</span>
         <span v-if="!result" class="sub-desc">由于您在淘宝中未授权，授权结果为失败</span>
         <span v-if="!result" class="sub-desc">请在淘宝App中确认授权哟</span>
      </div>
      <div class="btn-wrap">
         <n-link v-if="result" tag="button" to="/home" class="btn btn-success">返回首页</n-link>
         <n-link v-if="!result" tag="button" to="/home" class="btn btn-success">重新授权</n-link>
      </div>
   </div>
</template>
<script>
export default {
   name: "auth_result",
   data() {
      return {
         result: false
      };
   },
   mounted() {
      let authResult = this.$route.query.result;
      try {
         this.result = JSON.parse(authResult);
      } catch (error) {
         this.$message.error(`获取授权状态失败，请重试`)
      }
   }
};
</script>