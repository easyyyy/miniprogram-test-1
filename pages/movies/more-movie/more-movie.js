// pages/movies/more-movie/more-movie.js
var app = getApp();
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    totalCount:0,
    requestUrl : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        navigateTitle:options.category,
      });
      var dataUrl = "";
      switch (options.category) {
        case "正在热映":
          dataUrl = app.globalData.inTheatersUrl;

          break;
        case "即将上映":
          dataUrl = app.globalData.comingSoonUrl;

          break;
        case "Top 250":
          dataUrl = app.globalData.top250Url;
          break;
      }
      this.data.requestUrl = dataUrl;
      util.http(dataUrl,this.processMovieData);
  },
  processMovieData:function(moviesData){
    var movies = [];
    for (var idx in moviesData.subjects){
      var subject = moviesData.subjects[idx];
      var title = subject.title;
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
    var totalMovies = {};

    if (!this.data.isEmpty){
      totalMovies = this.data.movies.concat(movies)
    }
    else {
      totalMovies = movies;
      this.data.isEmpty = false;
    }
    var readyData = {
      movies:totalMovies
    };

    this.setData(readyData);
    this.data.totalCount += 20;
  },

  onScrollLower:function(){
    console.log("加载更多")
    var nextUrl = this.data.requestUrl + "?start=" +this.data.totalCount + "&count=20";
    util.http(nextUrl,this.processMovieData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

      wx.setNavigationBarTitle({
        title:this.data.navigateTitle,
        success(res) {

        }
      })
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
