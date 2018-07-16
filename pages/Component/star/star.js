Component({
  properties: {
    rating:Number
  },
  data: {
    havStarNum:0,
    ratings:0
  }, // 私有数据，可用于模版渲染
  attached: function () {
    let havStar = parseInt(this.data.rating/2)
    let ratingsNum = this.data.rating
    this.setData({
      havStarNum: havStar,
      ratings: ratingsNum
    })
   },
  ready:function(){
    // console.log(this.data.rating)
    // let havStar = parseInt(this.data.rating / 2)
    // let ratingsNum = this.data.rating
    // this.setData({
    //   havStarNum: havStar,
    //   ratings: ratingsNum
    // })
  },
  created:function(){
    // console.log(this.data.rating)
  }

})