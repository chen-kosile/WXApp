// 云函数入口文件
const AppId = '1257716524';
const SecretId = 'AKIDWzIUWQBj8OVjeT9wTq24v6DFGFB2wU6c';
const SecretKey = 'cAe3ISQErJagbWJvNfomc7sUwDPRIzb5';
const cloud = require('wx-server-sdk')
const fs = require('fs') // module.exports
const path = require('path')
const {
    ImageClient
} = require('image-node-sdk');

cloud.init()

let ImgClient = new ImageClient({AppId, SecretId, SecretKey});
// 云函数入口函数
exports.main = async (event, context) => {
    return await ImgClient.imgPornDetect({
        formData: {
            card_type: 0,
            image: fs.createReadStream(path.join(__dirname, './1.jpg'))
        },
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}