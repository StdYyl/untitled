import Vue from 'vue'
import App from './App'
import router from './router'

import {
  FormItem,
  Form,
  Button,
  Link,
  Upload,
  Input,
  Radio,
  Tabs,
  TabPane,
  Loading,
  Pagination
} from 'element-ui'

Vue.use(FormItem)
Vue.use(Form)
Vue.use(Button)
Vue.use(Link)
Vue.use(Upload)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Radio)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Pagination)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // components: { App },
  // template: '<App/>'
})
