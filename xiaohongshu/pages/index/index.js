// import { loadNotes } from '../../utils/util';

// let col1H = 0,
//   col2H = 0;

// Page({
//   data: {
//     test_url: '',
//     col1: [],
//     col2: [],
//   },
//   onLoad () {
//     loadNotes((data) => {
//       // console.log(data);
//       this.setData({
//         test_url: data.data[0].pic,
//         col1: [data.data[0]]
//       })
//     })
//   },
//   onImageLoad (event) {
//     let oImgW = event.detail.width;
//     let oImgH = event.detail.height;
//     // console.log(oImgW, oImgH);
//     const col1 = this.data.col1;
//     // 容器宽度 整个宽度 * 0.455
//     wx.getSystemInfo({
//       success: (res) => {
//         let ww = res.windowWidth;
//         let imgWidth = ww * 0.465;
//         col1[0].height = imgWidth * oImgH/oImgW;
//         this.setData({
//           // trueH: oImgH,
//           // trueW: oImgW,
//           col1: col1
//         })
//       }
//     })
      
    
//   },
//   upper () {},
//   lower () {}
// })
import { loadNotes } from '../../utils/util'

let col1H = 0,
  col2H = 0;

Page({
  data: {
    col1: [],
    col2: [],
    page: 1,
    imgWidth: 0, //轨道的宽度，图片显示时的宽度
    notes: [], // 数据 
    images: [],
    loadingCount: 0
  },
  onLoad () {
    // 1. 设备宽度信息 
    // 2. loadNotes 依赖于 1 height 
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.465;
        this.setData({
          imgWidth: imgWidth
        }, () => {
          console.log('可以去取数据了');
          loadNotes(this.addNotes);
        })
      }
    })
  },
  addNotes (res) {
    const total = res.total;
    let notes = res.data;
    console.log(total, notes);
    // notes height 0 数据里有height概念， 
    notes = notes.map(note => {
      return {
        height: 0,
        ...note
      }
    })
    const images = notes.map(note => {
      return {
        pic: note.pic,
        id: note._id
      }
    });
    this.setData({
      total,
      notes,
      images,
      loadingCount: notes.length
    })
    // console.log(images);
    // console.log(notes)
    // pic => images  onload notes height 改成真正的高度
    // _id images notes 关系
    // 显示notes
  },
  onImageLoad (e) {
    const imageId = e.currentTarget.dataset.id;
    let oImgW = e.detail.width; // 原图的宽度
    let oImgH = e.detail.height; // 原图的高度
    // console.log(oImgW, oImgH);
    let imgWidth = this.data.imgWidth;  // 显示宽度，
    let imgHeight = oImgH * (imgWidth / oImgW) // 通过显示宽度和原图宽度和高度来求出需要显示的高度
    // 图片显示的高度写入notes 
    let notes = this.data.notes;
    let noteObj = null;
    for (let note of notes) {  // 找出当前加载的图片对应的数据
      if (note._id === imageId) {
        noteObj = note;
        break;
      }
    }
    noteObj.height = imgHeight; // 将当前加载图片的高度给加载图片对应的数据
    // console.log(notes);
    // notes分发给col们
    let loadingCount = this.data.loadingCount - 1;// 加载剩余图片
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    if (col1H <= col2H) { // 来判断哪个col高度更小，将加载的图片放到更短的col
      col1H += imgHeight;
      col1.push(noteObj);
    } else {
      col2H += imgHeight;
      col2.push(noteObj);
    }
    this.setData({ // 将整理完的数据赋给data
      loadingCount,
      col1,
      col2
    })
  },
  lower () {// 向下滑动加载下一页
    this.data.page++;
    loadNotes(this.addNotes, this.data.page);
  },
  upper () {

  }
})
