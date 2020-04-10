import Vue from 'vue'
import {
   Button, Form, Input, Icon
   , Row,
   Col,
   message,
   Progress,
   Carousel,
   Modal,
   InputNumber,
   Drawer,
   Tabs,
   Popconfirm,
   FormModel,
   Tooltip,
   Spin
} from 'ant-design-vue'

Vue.use(Spin)
Vue.use(Tooltip)
Vue.use(Modal)
Vue.use(FormModel)
Vue.use(Button)
Vue.use(Popconfirm)
Vue.use(Drawer)
Vue.use(Progress)
Vue.use(Tabs)
Vue.use(Form)
Vue.use(Input)
Vue.use(Icon)
Vue.use(InputNumber)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$destroyAll = Modal.destroyAll;
Vue.prototype.$message = message
Vue.prototype.$message = message
