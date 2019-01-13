var app = getApp()

Page({
    data: {
        user: '',
        userInfo: {},
        showBorrowInf: false,
        showInfo:false,
        showActivities:false,
        showAdminSet:false,
        records: {}
    },
    onLoad() {
        const user = 
        this.setData({
            user: wx.getStorageSync('user')
        })
    },
    onShow() {
        this.getRecords()
    },
    getRecords() {
        const _this = this
        wx.request({
            url: 'http://1.kurtis.applinzi.com',
            data: {
                user: _this.data.user
            },
            success(res) {
                if (res.data.result) {
                    const data = res.data.data
                    data.forEach(item => {
                        item.date = date.formatTime(item.date).substring(0, 10)
                        item.day = Math.ceil((Date.now() - new Date(item.date).getTime()) / 1000 / 60 / 60 / 24)
                    })
                    _this.setData({
                        records: data
                    })
                }
            }
        })
    },
    returnBack(option) {
        const _this = this
        wx.request({
            url: 'http://1.kurtis.applinzi.com/app.py',
            data: {
                code:4,
                user: app.globalData.userId
            },
            success(res) {
                if (res.data.result) {
                    wx.showToast({
                        title: '续借成功',
                    })
                    _this.getRecords()
                } else {
                    wx.showToast({
                        title: `续借失败:${res.data.msg}`,
                    })
                }
            }
        })
    },
    toggleShowBorrow() {
      const _this=this
      wx.getStorage({
        key: 'user',
        success: function(res) {
          if(res.data!='')
            {
              _this.setData({
              user:res.data
            })
            }
          if(res.data==''){
            wx.navigateTo({
              url:'../login/login'
            })
          }
        },
        fail:function(res){
          wx.navigateTo({
            url: '../login/login',
          })
        }
      })
      console.log('there')
      console.log(this.data.user)
      wx.request({
        url: 'http://1.kurtis.applinzi.com/app.py',
        data: {
          code: 3,
          acc: this.data.user
        },
        header: {
          "Content-Type": "json"
        },
        success(res) {
          if (true) {
            _this.setData({
              records: res.data
            })
          }
        }
      })
        this.setData({
            showHistory: !this.data.showBorrow
        })
    },
    toggleShowActivities() {
      const _this = this
      wx.getStorage({
        key: 'user',
        success: function (res) {
          if (res.data != '') {
            _this.setData({
              user: res.data
            })
          }
          if (res.data == '') {
            wx.navigateTo({
              url: '../login/login'
            })
          }
        },
        fail: function (res) {
          wx.navigateTo({
            url: '../login/login',
          })
        }
      })
      console.log('there')
      console.log(this.data.user)
      wx.request({
        url: 'http://1.kurtis.applinzi.com/app.py',
        data: {
          code: 5,
          acc: this.data.user
        },
        header: {
          "Content-Type": "json"
        },
        success(res) {
          if (true) {
            _this.setData({
              records: res.data
            })
          }
        }
      })
      this.setData({
        showHistory: !this.data.showBorrow
      })
    },
    cancelActivities(){
      const _this = this
      wx.request({
        url: 'http://1.kurtis.applinzi.com/app.py',
        data: {
          code:6,
          userId: app.globalData.userId
        },
        success(res) {
          if (res.data.result) {
            wx.showToast({
              title: '取消成功',
            })
            _this.getRecords()
          } else {
            wx.showToast({
              title: `取消失败:${res.data.msg}`,
            })
          }
        }
      })
    }
})
