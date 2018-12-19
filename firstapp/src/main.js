import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    pages: [
      'pages/index/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '第一个小程序',
      navigationBarTextStyle: 'black'
    },
    'tabBar': {
      'color': '#999999',
      'selectedColor': '#ff6a3c',
      'backgroundColor': '#ffffff',
      'borderStyle': 'black',
      'list': [{
        'pagePath': 'pages/home',
        'text': '首页'
      }
      ]
    }
  }
}
