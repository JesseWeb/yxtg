<style lang="scss" scoped>
.wrap {
   margin-top: 0.4rem;
   padding: 0 0.2rem;
   text-align: right;
}
.info {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 0.4rem;
}
.settling-input {
   text-align: left;
   width: 100%;
}
/deep/ .ant-form-item-children {
   width: 100%;
}
.settling-btn {
   margin-top: 0.2rem;
}
</style>
<template>
   <div id="settling">
      <GoleTitle title="结算" />
      <div class="info">
         <span>结算周期为7个工作日</span>
         <span>结算完成后可在支付宝内查看</span>
      </div>
      <a-form class="wrap" :form="form" :label-col="{ xs:{span: 5} }" :wrapper-col="{ xs:{span: 12} }" @submit="(e)=>handleSubmit(e)">
         <a-form-item label="结算金额">
            <a-input-number
               class="settling-input"
               :min="1"
               :max="9999999"
               :precision="2"
               prefix="￥"
               placeholder="请输入结算金额"
               suffix="RMB"
               type="number"
               v-decorator="['num', { rules: [{ required: true, message: '请输入提现金额!' }] }]"
            />
         </a-form-item>

         <a-form-item :wrapper-col="{  span: 12, }">
            <a-button class="settling-btn" type="primary" html-type="submit">立即结算</a-button>
         </a-form-item>
      </a-form>
      <!-- <div class="wrap"></div> -->
   </div>
</template>
<script>
import Vue from "vue";
import GoleTitle from "@/components/GoldTitle";
import { drawal } from "@/apis/user";
export default {
   components: {
      GoleTitle
   },
   data() {
      return {
         form: this.$form.createForm(this, { num: "" })
      };
   },
   methods: {
      handleSubmit(e) {
         e.preventDefault();
         this.form.validateFields((err, values) => {
            if (!err) {
               let { num } = values;
               this.drawal(num);
            }
         });
      },
      async drawal(num) {
         let { data } = await drawal(num);
         this.$message.success(data.msg);
         this.form.resetFields();
      }
   }
};
</script>
