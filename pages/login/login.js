Page({
  data: {
    account: '',
    pwd: '',
    key:false
  },
  onLoad: function (options) {
    wx.getStorage({
      key: 'isLogin',
      success: function (res) {
        if (res && res.data) {
          console.log(res, 'res')
          if (res.data == '1') {
            wx.switchTab({
              url: '../bookList/bookList',
            })
          }
        }
      }
    })
  },
  bindAccountInput(res) {
    this.setData({
      account: res.detail.value
    })
  },

  bindPwdInput(res) {
    this.setData({
      pwd: res.detail.value
    })
  },

  verify() {
    if (!this.data.account) {
      wx.showToast({
        title: '账号不能为空',
        icon: 'loading',
        duration: 1800
      })
      return false
    } else if (!this.data.pwd) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'loading',
        duration: 1800
      })
      return false
    }
    return true
  },

  bildlogin() {
    console.log(this.data.account, this.data.pwd)
    const _this = this
    //console.log(this.verify())
    if (this.verify()) {

      wx.request({
        url: 'http://1.kurtis.applinzi.com/app.py',
        data: {
          code: 0,
          acc: _this.data.account,
          key: _this.data.pwd,
        },
        header: {
          "Content-Type": "json"
        },
        success(res) {
          console.log(res)
          if (res.data.sta) {
            console.log("login")
            _this.setData({
              key: true
            })
            wx.setStorage({
              key: 'isLogin',
              data: '1',
            })
            wx.setStorage({
              key: 'user',
              data: _this.data.account,
            })
            wx.switchTab({
              url: '../mine/mine',
              complete: function (e) {
                console.log(e)
              }
            })
          }
          else if (!res.data.sta) {
            wx.showToast({
              title: '账号或密码错误',
              icon: 'loading',
              duration: 1800
            })
          }
        }
      })
    }
  },
  
})