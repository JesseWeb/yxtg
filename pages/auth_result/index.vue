<style lang="scss" scoped>
</style>
<template>
   <div id="authResult"></div>
</template>
<script>
export default {
   name: "auth_result",
   data() {
      return {};
   },
   mounted() {
      let authResult = this.$route.query.result;
      if (authResult) {
         this.$message.success("授权成功");
         setTimeout(() => {
            this.$router.push('home')
         }, 1000);
      }else{
         this.$message.error("授权不成功，请重试");
         setTimeout(() => {
            this.$router.push('home')
         }, 1000);
      }
   }
};
</script>