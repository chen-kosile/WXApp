//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hiddenLoading: false,
    page: 1,
    pageSize: 4,
    totalSize: 0,
    hasMore: true,
    days: 3,
    articleList: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   this.requestArticle();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  requestArticle: function () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bca9243e6742c1bf8220bc9/ikcamp/list#!method=get',
      success: (res) => {
        // console.log(res.data);
        let page = this.data.page;
        let list = this.data.articleList;
        let data = res.data.data[page-1];
        // console.log(res.data.data.length);
        list.push(data);
        // console.log(res);
        console.log(data);
        this.setData({
          hiddenLoading: true,
          // articleList: data
          articleList: list
        })
        if (res.data.data.length == page){
          this.setData({
            hasMore: false
          }) 
        }
      }
    })
  },
  onReachBottom() {
    if (this.data.hasMore) {
      let nextPage = this.data.page + 1;
      this.setData({
        page: nextPage
      })
      this.requestArticle();
    }
    // console.log('到了页面底部');
  }
})
