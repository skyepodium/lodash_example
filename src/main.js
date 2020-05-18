// 파일 위치: /root/src/main.js

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// lodash를 불러옵니다.
import 'lodash'

new Vue({
  render: h => h(App),
}).$mount('#app')
