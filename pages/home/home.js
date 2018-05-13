// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isText: 0,
    // isFabulous: 0,
    tabs: ["推荐", "附近", "视频", "美食", "旅行", "男士穿搭", "健身", "影视", "读书", "明星", "时尚", "护肤", "家居", "音乐", "数码", "宠物", "萌娃", "母婴", "婚礼", "彩妆"],
    datas: {},
    dataLeft: [],
    dataRight: [],
    imgSrc: '../../assets/icon/click.svg',
    noImgSrc: '../../assets/icon/noclick.svg',
    isBol: true,
    lists: [
      {
        "type": "food",
        "data": [{
          "name": "名字1",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/foods/img1.jpg"
        }, {
          "name": "名字2",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/foods/img2.jpg"
        }, {
          "name": "名字3",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/foods/img3.jpg"
        }, {
          "name": "名字4",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/foods/img4.jpg"
        }]
      }, {
        "type": "landscape",
        "data": [{
          "name": "名字1",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/landscape/img1.jpg"
        }, {
          "name": "名字2",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/landscape/img2.jpg"
        }, {
          "name": "名字3",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/landscape/img3.jpg"
        }, {
          "name": "名字4",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/landscape/img4.jpg"
        }, {
          "name": "名字5",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/landscape/img5.jpg"
        }, {
          "name": "名字6",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/landscape/img6.jpg"
        }, {
          "name": "名字7",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/landscape/img7.jpg"
        }, {
          "name": "名字8",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/landscape/img8.jpg"
        }, {
          "name": "名字9",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/landscape/img9.jpg"
        }]
      }, {
        "type": "pets",
        "data": [{
          "name": "名字1",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/pets/img1.jpg"
        }, {
          "name": "名字2",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/pets/img2.jpg"
        }, {
          "name": "名字3",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/pets/img3.jpg"
        }, {
          "name": "名字4",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/pets/img4.jpg"
        }, {
          "name": "名字5",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          "imgUrl": "../../assets/image/pets/img5.jpg"
        }, {
          "name": "名字6",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/pets/img6.jpg"
        }, {
          "name": "名字7",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/pets/img7.jpg"
        }, {
          "name": "名字8",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/pets/img8.jpg"
        }, {
          "name": "名字9",
          "dirsction": "可爱",
          "number": "200",
          "imageHeight": 0,
          imgUrl: "../../assets/image/pets/img9.jpg"
        }]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getImgHeight(this.data.lists);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  itemSelect: function (event) {
    let num = (Math.random() * 2).toFixed();
    this.getList(this.data.lists[num].data);
    this.setData({
      datas: this.data.lists[num],
      isText: event.currentTarget.dataset.index
    });
  },
  getList: function (arr) {
    let dataLeft = [];
    let dataRight = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        dataLeft.push(arr[i]);
      } else {
        dataRight.push(arr[i]);
      }
    };
    this.setData({
      dataLeft: dataLeft,
      dataRight: dataRight
    })
  },
  getImgHeight: function (obj) {
    let arrs = [];
    let arr = [];
    let that = this;
    obj.forEach(val => {
      val.data.forEach(v => {
        // arrs.push(v);
        wx.getImageInfo({
          src: v.imgUrl,
          success: function (res) {
            let num = res.width / 170;
            arr.push((res.height / num) * 2);
            length = arr.length;
            that.setData({
              lists: [
                {
                  "type": "food",
                  "data": [{
                    "name": "名字1",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[length - 22],
                    imgUrl: "../../assets/image/foods/img1.jpg"
                  }, {
                    "name": "名字2",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[length - 21],
                    imgUrl: "../../assets/image/foods/img2.jpg"
                  }, {
                    "name": "名字3",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[length - 20],
                    imgUrl: "../../assets/image/foods/img3.jpg"
                  }, {
                    "name": "名字4",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[length - 19],
                    imgUrl: "../../assets/image/foods/img4.jpg"
                  }]
                }, {
                  "type": "landscape",
                  "data": [{
                    "name": "名字1",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[length - 18],
                    imgUrl: "../../assets/image/landscape/img1.jpg"
                  }, {
                    "name": "名字2",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[length - 17],
                    imgUrl: "../../assets/image/landscape/img2.jpg"
                  }, {
                    "name": "名字3",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[length - 16],
                    imgUrl: "../../assets/image/landscape/img3.jpg"
                  }, {
                    "name": "名字4",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 15],
                    imgUrl: "../../assets/image/landscape/img4.jpg"
                  }, {
                    "name": "名字5",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 14],
                    imgUrl: "../../assets/image/landscape/img5.jpg"
                  }, {
                    "name": "名字6",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 13],
                    imgUrl: "../../assets/image/landscape/img6.jpg"
                  }, {
                    "name": "名字7",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 12],
                    imgUrl: "../../assets/image/landscape/img7.jpg"
                  }, {
                    "name": "名字8",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 11],
                    imgUrl: "../../assets/image/landscape/img8.jpg"
                  }, {
                    "name": "名字9",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 10],
                    imgUrl: "../../assets/image/landscape/img9.jpg"
                  }]
                }, {
                  "type": "pets",
                  "data": [{
                    "name": "名字1",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 9],
                    imgUrl: "../../assets/image/pets/img1.jpg"
                  }, {
                    "name": "名字2",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 8],
                    imgUrl: "../../assets/image/pets/img2.jpg"
                  }, {
                    "name": "名字3",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 7],
                    imgUrl: "../../assets/image/pets/img3.jpg"
                  }, {
                    "name": "名字4",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 6],
                    imgUrl: "../../assets/image/pets/img4.jpg"
                  }, {
                    "name": "名字5",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 5],
                    "imgUrl": "../../assets/image/pets/img5.jpg"
                  }, {
                    "name": "名字6",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 4],
                    imgUrl: "../../assets/image/pets/img6.jpg"
                  }, {
                    "name": "名字7",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 3],
                    imgUrl: "../../assets/image/pets/img7.jpg"
                  }, {
                    "name": "名字8",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 2],
                    imgUrl: "../../assets/image/pets/img8.jpg"
                  }, {
                    "name": "名字9",
                    "dirsction": "可爱",
                    "number": "200",
                    "imageHeight": arr[arr.length - 1],
                    imgUrl: "../../assets/image/pets/img9.jpg"
                  }]
                }
              ]
            });
            that.setData({
              datas: that.data.lists[2]
            });
          },
          fail: function (res) {
          },
          complete: function (res) { },
        })
      })
    });
  },
  fabulous: function (event) {
    let isFabulous = event.currentTarget.dataset.num;
    this.setData({
      isFabulous: isFabulous
    })
    // console.log('event', event.currentTarget.dataset.num)
    // // console.log('num', this.data.datas);
    // let arr = [];
    // this.data.datas.data.forEach((val, index) => {
    //   if (index == event.currentTarget.dataset.num) {
    //     this.setData({
    //       imgSrc: '../../assets/icon/click.svg',
    //     })
    //   } else {
    //     this.setData({
    //       imgSrc: '../../assets/icon/noclick.svg',
    //     })
    //   }
    // })
  }
})