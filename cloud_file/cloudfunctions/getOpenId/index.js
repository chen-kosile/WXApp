// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => { //event 传过来的参数, 自带一个openId
    // console.log(event);
    return event
}