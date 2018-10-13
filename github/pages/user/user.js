Page({
    data: {
        username: ''
    },
    userNameInput (e) {
        // console.log(e.detail.value);
        this.setData({
            username: e.detail.value
        });
    },
    toInfo () {
        // console.log(this.data.username);
        // let isNav = false;
        if (this.data.username) {
            wx.showToast({
                title: '数据加载中...',
                icon: 'loading',
                duration: 1000
            })
        } else {
            wx.showModal({
                title: '请输入用户名',
                showCancel: false,
                success: function (res) {

                } 
            })
        }

        wx.setStorage({
            key: 'username',
            data: this.data.username,
            success: function(res){
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })

        setTimeout(() => wx.switchTab({
            url: '../index/index',
            success: function(res){
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        }), 1000)
    }
});