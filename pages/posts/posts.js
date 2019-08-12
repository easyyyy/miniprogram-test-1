// pages/posts/posts.js

var postsData = require("../../data/posts-data.js")

Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    hello:"hello",
    
    postList:postsData.postList
    
  },

  // test:function(){
  //   wx.cloud.init({
  //     env: 'first-jslv6'
  //   })
  //   const testDB = wx.cloud.database()
  //   testDB.collection('test').get({
  //     success: function (res) {
  //       // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
  //       console.log(res.data)
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    // wx.clearStorage()
    
      // var that = this
      // wx.request({
        
      //   url: 'http://192.168.0.107:5000',
      //   data:{
          
      //   },
      //   header: {
      //     'content-type': 'application/json' // 默认值
      //   },
      //   success(res) {
      //     that.test()
      //     that.setData(res.data)
      //     console.log(that.data)
      //   }
      // })

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

  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postId
    
    wx.navigateTo({
      url: 'post-detail/post-detail?postId='+postId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  onSwiperTap: function (event) {
    var postId = event.target.dataset.postId

    wx.navigateTo({
      url: 'post-detail/post-detail?postId=' + postId,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})