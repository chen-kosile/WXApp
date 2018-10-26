const db = wx.cloud.database();
const userInfo = db.collection('userInfo')
Page({
  data: {
    userList: []
  },
  getUserInfo: function(result) {
    // console.log(result);
    // openId 用户独有的， 拿不到，云函数可以拿到， 经过好几个接口
    // 云函数权限就是超级管里员
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: function(res) {
        // 用户来了
        // 一个用户生成了多条记录 错误
        // userinfo mysql _openid unique
        // userInfo 不要重复插入
        // _openif 到userinfo里先查一下, where
        let openid = res.result.openId;
        userInfo.where({
          _openid: openid
        }).count().then(res => {
          console.log(res);
          if(res.total == 0){
            userInfo.add({
              data: result.detail.userInfo
            }).then(res => {
              console.log(res);
            })
          }else{
            wx.showToast({
              title: '不能重复添加',
              icon: 'fail'
            })
          }
        })
        // userInfo.add({
        //   data: res.result.userInfo
        // }).then(res => {
        //   console.log(res);
        // })
        // console.log(res)
      }
    })
  },
  onShareAppMessage: function(res) {
    console.log(res)
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
  },
  onLoad: function() {
    
    userInfo.get().then(res => {
      // console.log(res.data)
      this.setData({
        userList: res.data
      })
    })
  },
})