// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // var post_content1={
      //   date:"Sep 18 2016",
      //   title:"正是虾肥蟹壮时",
      //   post_image:"/images/post/crab.png",
      //   content:"菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；",
      //   comment_num:"112",
      //   collect_num:"96",
      //   author_image:"/images/avatar/1.png"
      // }
      // this.setData(post_content1)
      var that = this
      wx.request({
        
        url: 'http://192.168.0.107:5000',
        data:{
          
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          
          that.setData(res.data)
          console.log(that.data)
        }
      })
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