<style lang="scss">
#page404 {
   position: relative;
   //  min-height: 100vh;
   padding-top: 1.2rem;
   background-color: rgb(255, 255, 255);
   color: rgb(47, 73, 94);
   max-width: 6.67rem;
   margin-left: auto;
   margin-right: auto;
   padding-left: 0.16rem;
   padding-right: 0.16rem;
   display: -webkit-box;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   flex-direction: column;
   flex-wrap: wrap;
   -webkit-box-align: center;
   align-items: center;
   -webkit-box-pack: center;
   justify-content: center;
   font-size: 0.2rem;
   font-weight: 500;
   line-height: 1.5;

   .p404__content__title {
      margin-bottom: 0.16rem;
      text-align: center;
      font-size: 0.32rem;
      letter-spacing: 0.016rem;
      color: rgb(47, 73, 94);
   }
   .p404__content__illustration {
      max-width: 7.2rem;
      .p404__content__illustration__img {
         display: block;
         width: 100%;
         margin: 0 auto;
      }
   }
   .p404__content__link {
      margin-bottom: 0.16rem;
      text-decoration: underline;
   }
}
</style>
<template>
   <div id="page404">
      <h1 class="p404__content__title">There's nothing here</h1>
      <p class="p404__content__description">The page you were looking for appears to have been moved, deleted, or does not exist.</p>
      <div class="p404__content__illustration" style="max-width: 45rem;">
         <img src="~/assets/image/404.png" alt="There's nothing here" class="p404__content__illustration__img" />
      </div>
      <nuxt-link class="p404__content__link" v-if="error.statusCode==404" to="/">click here to return to home</nuxt-link>
      <nuxt-link class="p404__content__link" v-else-if="error.statusCode==403" to="/login">click here to relogin</nuxt-link>

      <!-- <div class="p404__content__link">
            <a href="/">Click here to return to home.</a>
      </div>-->
   </div>
</template>

<script>
export default {
   props: ["error"]
   // layout: 'blog' // 你可以为错误页面指定自定义的布局
};
</script>