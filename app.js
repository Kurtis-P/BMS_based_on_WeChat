App({
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.getStorage({
      key: 'isLogin',
      success: res => {
        if (res && res.data !== '1') {
          wx.navigateTo({
            url: './pages/login/login',
            success(e) {
              console.log(e)
            }
          })
        } else{
          wx.navigateTo({
            url:'./pages/bookList/bookList',
            success(e){
              console.log(e)
            }
          })
        }
      },
      fail(res) {
        wx.navigateTo({
          url: './pages/login/login',
          success(e) {
            console.log(e)
          }
        })
      }
    })
    wx.setStorage({
      key: 'user',
      data: ''
    })
    wx.setStorage({
      key: 'isLogin',
      data: '0',
    })
    wx.setStorage({
      key: 'userName',
      data: '',
    })
  },
  globalData: {
    userName: '',
    isUserExist:false,
    userId: '111',
    user:null
  }
})