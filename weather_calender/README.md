# 小程序

- 登录
    1. _openid
    2. getUserInfo
    3. button
    type="bindUserInfo"
    auth session cookie
- 高阶函数
    函数的参数或者返回值为函数， 这个函数就是高阶函数， 是高级js的入口
    用户授权与否， 及接下来相应处理的逻辑行为，
    wx.getSetting() 产生一个分支， 相应的事情也是函数
    this.getScope(succes， fail);
    getSocpe(){
        wx.getSetting({ // 获取是否授权，让后面的代码来判断执行相关的函数

        })
    }