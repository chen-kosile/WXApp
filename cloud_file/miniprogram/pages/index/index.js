const db = wx.cloud.database();
const userInfo = db.collection('userInfo')
Page({
  data: {
    userList: []
  },
  getUserInfo: function(result) {
    // console.log(result);
    // openId 用户独有的， 拿不到，云函数可以拿到， 好几个接口
    // 云函数权限就是超级管里员
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: function(res) {
        userInfo.add({
          data: res.result.userInfo
        }).then(res => {
          console.log(res);
        })
        console.log(res)
      }
    })
  },
  onShareAppMessage: function(res) {
    return {
      title: '唐唐的产品',
      path: '/pages/index/index',
      imageUrl: 'cloud://jackchen-51fdd8.6a61-jackchen-51fdd8/267688.png',
      success: function(res) {
        console.log('转发成功')
      },
      fail: function() {
        console.log('转发失败')
      }
    }
  }
})