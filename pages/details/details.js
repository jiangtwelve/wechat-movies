// pages/details/details.js
let https = require("../../https/https.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theDetails:{}
  },
  gainData:function(data, key){
        let setSource = {}
        setSource[key] = data;
        this.setData(setSource)
        this.setData({
          writersLength: this.data.theDetails.writers.length,
          directorsLength: this.data.theDetails.directors.length,
          genresLength: this.data.theDetails.genres.length
        })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      itemId: options.id
    })
    https.toData(options.id, "theDetails", this.gainData)
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