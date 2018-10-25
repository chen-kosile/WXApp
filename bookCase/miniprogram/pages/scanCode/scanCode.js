// miniprogram/pages/scanCode/scanCode.js
Page({
  scanCode:function(){
    wx.scanCode({
      onlyFromCamera:true,
      scanType: ['barCode'],
      success:res=>{
        console.log(res)
        wx.cloud.callFunction({ //加载云函数 云函数修改后需要重新上传
          name: 'bookinfo',
          data: {
            isbn: res.result
          },
          success: res=>{
            console.log(res);
            const bookString = res.result;
            const db = wx.cloud.database();
            const book = db.collection('mybook');
            book.add({
              data: JSON.parse(bookString)
            }).then(res => {
              console.log(res)
            }).catch(err => {
              console.log(err);
            })
          }
        })
      }
    })
  }

})
