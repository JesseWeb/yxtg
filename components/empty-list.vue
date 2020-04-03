<!-- 
   空列表组件，已在全局注册。 组件自动检测list内容是否为空
   @param {Array} list 需要检测的list
   @param {offsetTop} string 距离父容器顶部的位置，默认为0.1rem
   @example 使用方式：<empty-list :list="someList"/>
 -->

<style lang="scss" scoped>
.list-empty{
   color: #ccc;
   display: flex;
   justify-content: center;
   ;
}
</style>
<template>
   <div class="list-empty" :style="{paddingTop:offsetTop}" v-if="!list.length">-列表空空如也-</div>
</template>
<script>
/**
 * @props {Array}
 */
export default {
   name: "empty_list",
   props: {
      list: {
         type: Array,
         default: [],
         required: true
      },
      offsetTop:{
         type:String,
         default:".1rem",
      }
   }
};
</script>