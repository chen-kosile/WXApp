wx.cloud.init()
const db = wx.cloud.database();

Page({
  data: {
    ads: [],
    item: {
      user: {
        avatar: '',
        nickname: 'chen',
        summary: '旅游'
      }
    }
  },
  onLoad: function() {
    db.collection("ads").get({
      success: res => {
        // console.log(res)
        this.setData({
          ads: res.data
        })
        // 云函数？ 小程序的前端搞不定， openid 需要复杂计算
        // async await 三个数据库的综合查询
      // 查询 select mongodb no-sql 没有select MongoDB用find()
      // where 条件 order by 排序 limit 限制条数 skip 忽略 
      // 2 页 skip(10).limit(10)
      // 3 页 skip(20).limit(10)
        wx.cloud.callFunction({
          name: "getTravelInfo",
          data: {
            count: 5,
            startIndex: 0
          },
          success: res => {
            console.log(res);
          }
        })
      }
    })
  },
  // wx:getUserInfo({
  //   success: function(res) {
  //     console.log(res)
  //     var userInfo = res.userInfo
  //     var nickName = userInfo.nickName
  //     var avatarUrl = userInfo.avatarUrl
  //     var gender = userInfo.gender	// 性别：0：未知、1：男、2：女
  //     var province = userInfo.province
  //     var city = userInfo.city
  //     var country = userInfo.country
  //   }
  // })


})
