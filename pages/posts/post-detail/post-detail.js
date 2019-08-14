// pages/posts/post-detail/post-detail.js

var postsData = require("../../../data/posts-data.js")
const innerAudioContext = wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicPlay:false,
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    innerAudioContext.stop()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onMusicTap:function(){
    
    if(this.data.musicPlay==false){
      innerAudioContext.src = this.data.music.url
      innerAudioContext.play()
    }
    else{
      innerAudioContext.pause()
    }

    this.setData({
      musicPlay:!this.data.musicPlay
    })
    innerAudioContext.onEnded(() => {
      
      this.setData({
        musicPlay: false
      })
    })
    

  },
  

  onLoad: function (options) {
      var postId = options.postId
      var postData = postsData.postList[postId]
      this.setData(postData)
      // console.log(this.data)

      var postsCollected = wx.getStorageSync('posts_collected')
      
      if (postsCollected) {
        var postCollected = postsCollected[postId]
        
        this.setData({
          collected:postCollected,
          // postsCollected:postsCollected
        })
      }else{
        var collected = {
          
        }
        collected[postId] = false
        wx.setStorageSync("posts_collected", collected)
      }

  },

  
  onCollectionTap: function () {
    var collected = !this.data.collected
    
    this.setData({
      collected:collected
    })
    
    var postsCollected = wx.getStorageSync('posts_collected')
    postsCollected[this.data.postId] = this.data.collected
    
    wx.setStorageSync("posts_collected", postsCollected)
    wx.showToast({
      title: collected?"收藏成功":"取消成功",
      duration: 1000
    })
  },
})
