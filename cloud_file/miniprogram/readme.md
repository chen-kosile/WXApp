# 云开发

- 文件上传
    云服务器 买服务器， ip（cdn 绑定域名）， 硬盘（文件数据的存储）， cup计算， 数据存储功能(MongoDB)， node（npm node> 8.0 > koa） 运行环境及操作系统 Linux centos
    云服务 全部SDK化
    数据存储sdk wx.cloud.database
    文件存储 sdk wx.cloud.uploadFile
        文件流 出口(path)， 入口(path) 在硬盘里面
        wx.cloud.uploadFile({
            cloudPath:,
            filePath:,
        })
    云函数 远程托管CPU计算 wx.cloud.callFunction
    wx.cloud.websdk