<style lang="scss" scoped>
#giaogiao {
   width: 100%;
   height: calc(100vh - .44rem);
   margin: 0;
   padding: 0;
   overflow: hidden;
}
</style>
<template>
   <div id="commission">
      <GoldTitle title="帮助中心" />
      <iframe id="giaogiao" src="//player.bilibili.com/player.html?aid=24449942&bvid=BV1vW411A7o6&cid=41054895&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
   </div>
</template>
<script>
import GoldTitle from "@/components/GoldTitle";
export default {
   name: "commission",
   components: {
      GoldTitle
   }
};
</script>