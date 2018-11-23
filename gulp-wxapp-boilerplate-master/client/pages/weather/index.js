Page({
  data: {
    backgroundImage: '../../images/cloud.jpg',
    backgroudColor: '',
    paddingTop: 0,
    width: 375,
    scale: 1
  },
  onLoad () {
    wx.request({
      url: 'http://localhost:3000/api/he-weather',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

    wx.getSystemInfo({
      success: (res) => {
        let width = res.windowWidth
        let scale = width / 375
        // console.log(scale * res.statusBarHeight*2+24)
        this.setData({
          width,
          scale,
          paddingTop: res.statusBarHeight + 12
        })
      }
    })

  }
})
