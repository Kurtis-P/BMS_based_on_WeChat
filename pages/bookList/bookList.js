const date = require('../../utils/util.js')

Page({
    data: {
        activeIndex: 1,
        searchKey: '',
        bookList: [],
        orderList: [],
        activitiesdata: {},
    },
    onLoad() {
        this.getBookList()
        this.getActivities()
    },
    onShow() {
        this.setData({
            searchKey: ''
        })
        this.getBookList()
        this.getActivities()
    },
    switchTab(event) {
        this.setData({ activeIndex: +event.target.dataset.index })
    },
    bindKeyInput(e) {
        this.setData({
            searchKey: e.detail.value
        })
    },
    search() {
        if (!this.data.searchKey) {
            return
        }
        const _this = this
        wx.showLoading({
            title: 'loading',
        })
        wx.request({
            url: 'https://douban.uieee.com/v2/book/search?q='+this.data.searchKey,
            header: {
              "Content-Type": "json"
            },
            success(res) {
                console.log(res),
                _this.setData({
                  bookList:res.data.books
                })
            },
            complete() {
                wx.hideLoading()
            }
        })
        console.log(this.data.searchKey)
    },
    resetList() {
        this.setData({
            searchKey: ''
        })
        this.getBookList()
    },
    toBookDetail(item) {
        const id = item.currentTarget.dataset.id
        const title = item.currentTarget.dataset.title
        console.log(id+title)
        wx.navigateTo({
            url: `/pages/bookDetail/bookDetail?id=${id}`
        })
        console.log(`/pages/bookDetail/bookDetail?id=${id}&title=${title}`)
    },
    getBookList() {
        wx.showLoading({
            title: 'loading',
        })
        const _this = this
        wx.request({
            url: 'http://1.kurtis.applinzi.com/app.py',
            data: {
                code: 2
            },
            success(res) {
              const data = res.data
              _this.setData({
                bookList: data
              })
              console.log('ojbk')
              console.log(data)
            },
            complete() {
                wx.hideLoading()
            }
        })
    },
    getActivities() {
      const _this = this
      wx.request({
        url: 'http://1.kurtis.applinzi.com/app.py',
        data: {
          code: 1,
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