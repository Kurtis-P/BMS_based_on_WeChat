const app = getApp()

Page({
  data: {
    title: '123',
    id:'',
    bookDetail: {}
  },
  onLoad:function(options) {
    this.setData({
      id: options.id,
    })
    this.getBookDetail(options.id)
  },
  getBookDetail(id) {
    const _this = this
    wx.request({
      url: 'https://douban.uieee.com/v2/book/isbn/' + id,
      header: {
        "Content-Type": "json"
      },
      success(res) {
        if (true) {
          _this.setData({
            bookDetail: res.data
          })
          console.log(res)
        }
      }
    })
  }
})