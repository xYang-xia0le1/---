// pages/user/reports/update/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reportId: '',
    content: '',
    images: [],
    maxImages: 3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.id) {
      this.setData({ reportId: options.id })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 内容输入
  onContentInput(e) {
    this.setData({ content: e.detail.value })
  },

  // 选择图片
  chooseImage() {
    const remaining = this.data.maxImages - this.data.images.length
    if (remaining <= 0) return

    wx.chooseMedia({
      count: remaining,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFiles = res.tempFiles
        const images = this.data.images.concat(tempFiles.map(file => file.tempFilePath))
        this.setData({ images })
      }
    })
  },

  // 删除图片
  deleteImage(e) {
    const index = e.currentTarget.dataset.index
    const images = this.data.images
    images.splice(index, 1)
    this.setData({ images })
  },

  // 提交补充
  submitUpdate() {
    if (!this.data.content.trim()) {
      wx.showToast({
        title: '请输入补充内容',
        icon: 'none'
      })
      return
    }

    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000,
      success: () => {
        setTimeout(() => {
          wx.navigateBack()
        }, 2000)
      }
    })
  }
})