// pages/movies/movies.js
var util = require('../../utils/util.js');
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

    onMoreTap:function(event){
      var category = event.currentTarget.dataset.category;
      wx.navigateTo({
          url:"more-movie/more-movie?category="+category
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getMovieListData(app.globalData.inTheatersUrl+"&start=0&count=3","inTheaters","正在热映");
      this.getMovieListData(app.globalData.comingSoonUrl+"&start=0&count=3","comingSoon","即将上映");
      this.getMovieListData(app.globalData.top250Url+"&start=0&count=3","top250","Top 250")
  },
    getMovieListData:function(url,settedKey, categoryTitle){
        wx.request({
            url:url,
            header:{
                "Content-Type":"application/text"
            },
            method: "GET",
            success:res=>{

                this.processMovieData(res.data,settedKey, categoryTitle)
            }
        })
    },

    processMovieData:function(moviesData,settedKey, categoryTitle){
        var movies = [];
        for (var idx in moviesData.subjects){
            var subject = moviesData.subjects[idx]
            var title = subject.title
            if (title.length > 6){
                title = title.substring(0,6)+"..."
            }
            var temp = {

                stars:util.convertToStarsArray(subject.rating.stars),
                title:title,
                average:subject.rating.average,
                coverageUrl:subject.images.large,
                movieId:subject.id
            };
            movies.push(temp)
        }
        var readyData = {};
        readyData[settedKey] = {
            categoryTitle:categoryTitle,
            movies:movies
        };
        this.setData(readyData);
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
