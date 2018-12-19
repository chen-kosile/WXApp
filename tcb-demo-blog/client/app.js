//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'jackchen-51fdd8',
      traceUser: true
    });
  },
  globalData: {
    blog: {}
  }
});
