<style lang="scss" scoped>
#giaogiao {
   width: 100%;
   height: calc(100vh - .44rem);
}
</style>
<template>
   <div id="rules">
      <GoldTitle title="帮助中心" />
      <iframe
         id="giaogiao"
         src="//player.bilibili.com/player.html?aid=22682119&bvid=BV1JW411V7js&cid=37643106&page=1"
         scrolling="no"
         border="0"
         frameborder="no"
         framespacing="0"
         allowfullscreen="true"
      ></iframe>
   </div>
</template>
<script>
import GoldTitle from "@/components/GoldTitle";
export default {
   name: "rules",
   components: {
      GoldTitle
   }
};
</script>