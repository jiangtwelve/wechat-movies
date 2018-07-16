// pages/more/more.js
let https = require("../../https/https.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisListArr:{},
    star:0,
    total:0,
    theInput:false
  },
  fromData: function (data, key) {
    let that = this
    that.setData({
      total:data.total
    })
    let setSource = {}
    setSource[key] = data.subjects;
    this.setData(setSource)
  },
  toDetails: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../details/details?id=movie/subject/' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.api == "movie/in_theaters"){
      wx.setNavigationBarTitle({
        title: '正在热映'
      })
    } else if (options.api == "movie/coming_soon"){
      wx.setNavigationBarTitle({
        title: '即将上映'
      })
    } else if (options.api == "movie/top250"){
      wx.setNavigationBarTitle({
        title: 'Top250'
      })
    }else{
      wx.setNavigationBarTitle({
        title: options.val
      })
    }

    if (options.val != undefined){
      this.setData({
        ApiUrl: "movie/search?q="+options.val,
        theInput:true
      })
      https.toData(this.data.ApiUrl, "thisListArr", this.fromData)
    }else{
      this.setData({
        ApiUrl: options.api,
        theInput: false
      })
      https.toData(this.data.ApiUrl, "thisListArr", this.fromData)
    }
    
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  getMoreData:function(data,key){
    let that = this
    let moment_list_all = that.data.thisListArr
    data.subjects.forEach((res)=>{
      moment_list_all.push(res)
    })
    that.setData({
      thisListArr: moment_list_all
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
    let that = this
    let star = that.data.star
    that.setData({
      star:star + 20
    })
    let url = this.data.ApiUrl + '?start=' + that.data.star + "&count=10"
    if(that.data.theInput){
      url = this.data.ApiUrl + '&start=' + that.data.star + "&count=10"
    }

    if(that.data.star + 10 < that.data.total){
      https.toData(url, "moment_list", this.getMoreData)
    } 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})