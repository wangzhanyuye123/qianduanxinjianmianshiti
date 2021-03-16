Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:true,
    isshow1:false,
    isshow2:false,
    isshow3:false,
    isshow4:false
  },
click:function(e ) {
  var that=this
   var curTime = e.timeStamp
   if (curTime<2) {
     this.setData({
      isshow:false,
      isshow1:true,
      isshow2:false,
      isshow3:false,
      isshow4:false
     })
   }
   if (2<=curTime<=4) {
    this.setData({
      isshow:false,
      isshow1:false,
      isshow2:true,
      isshow3:false,
      isshow4:false
    })
   }
   if (4<curTime<=6) {
    this.setData({
      isshow:false,
      isshow1:false,
      isshow2:false,
      isshow3:true,
      isshow4:false
    })
   }
   if (6<curTime<=9) {
    this.setData({
      isshow:false,
      isshow1:false,
      isshow2:false,
      isshow3:false,
      isshow4:true
    })
   }
   if (9<curTime) {
      this.setData({
        isshow:false,
        isshow1:true,
        isshow2:false,
        isshow3:false,
        isshow4:false
      })

    var er=setTimeout(function () {
      that.setData({
        isshow:false,
        isshow1:false,
        isshow2:true,
        isshow3:false,
        isshow4:false
      })
    }, 3000)

    var san=setTimeout(function () {
      that.setData({
        isshow:false,
        isshow1:false,
        isshow2:false,
        isshow3:true,
        isshow4:false
      })
    }, 6000)

    var si=setTimeout(function () {
      that.setData({
        isshow:false,
        isshow1:false,
        isshow2:false,
        isshow3:false,
        isshow4:true
      })
    }, 9000)

  }
},
click1:function () {
  this.setData({
    isshow:true,
    isshow1:false,
    isshow2:false,
    isshow3:false,
    isshow4:false
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    
  }
})