
Page({
  data: {
    num: 110,
  },
  //事件处理函数
  onLoad: function () {
    setTimeout(() => {
      this.setData({
        num: 9
      })
    }, 3000)
  }
})
