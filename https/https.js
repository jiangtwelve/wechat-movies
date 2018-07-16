let api = 'https://douban.uieee.com/v2/'
function getData(url) {
  return new Promise(function (resolve, req) {
    wx:wx.showLoading({
      title: '请稍后'
    })
    console.log(api+url)
    wx.request({
      url: api + url,
      method: "GET",
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        resolve(res.data)
        wx.hideLoading()
      },
      fail: function (err) {
        req(err)
      }
    })
  })
}

function toData(url,key,func) {
  getData(url).then((res) => {
    console.log(res)
    //格式化数据
    func(res, key);
  }).catch((res) => {
    console.log(res)
  })
}

module.exports = {
  getData,
  toData
}