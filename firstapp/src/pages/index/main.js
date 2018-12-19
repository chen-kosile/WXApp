import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    // 注意页面级可配置属性相当于src/main.js中的window部分
    'navigationBarTitleText': '文章列表页面'
  }
}
