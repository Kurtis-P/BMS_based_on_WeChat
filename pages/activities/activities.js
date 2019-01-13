//activities.js
const app = getApp()

Page({
  data: {
    activitiesdata:{},
  },
  onLoad() {
    this.getActivities()
  },
  getActivities() {
    const _this = this
    wx.request({
      url: 'http://1.kurtis.applinzi.com/app.py',
      data: {
        code:1,
      },
      header: {
        "Content-Type": "json"
      },
      success(res) {
        _this.setData({
          activitiesdata: res.data
        })
        console.log(res)
      }
    })
  }
})