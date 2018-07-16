let app = getApp()
let https = require("../../https/https.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // inputValue:'',
    inTheaters:{},
    comingSoon:{},
    top:{}
  },
  fromData:function(data,key){
    let setSource = {}
    setSource[key] = data.subjects;
    this.setData(setSource)
  },
  toDetails:function(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../details/details?id=movie/subject/'+id,
    })
  },
  toMore: function (e) {
    let api = e.currentTarget.dataset.api
    wx.navigateTo({
      url: '../more/more?api='+api
    })
  },
  outFocus:function(e){
    console.log(e.detail.value)
    let val = e.detail.value
    wx.navigateTo({
      url: '../more/more?val=' + val
    })
    this.setData({
      inputValue:''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    https.toData("movie/in_theaters", "inTheaters", this.fromData)
    https.toData("movie/coming_soon", "comingSoon", this.fromData)
    https.toData("movie/top250", "top", this.fromData)
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