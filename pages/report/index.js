// pages/report/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    reportTypes: [
      { id: '1', name: '诈骗举报', icon: '/assets/icons/report_fraud.png' },
      { id: '2', name: '违法信息', icon: '/assets/icons/report_illegal.png' },
      { id: '3', name: '账号举报', icon: '/assets/icons/report_account.png' },
      { id: '4', name: '垃圾信息', icon: '/assets/icons/report_spam.png' },
      { id: '5', name: '侵权投诉', icon: '/assets/icons/report_rights.png' },
      { id: '6', name: '其他问题', icon: '/assets/icons/report_other.png' }
    ],
    selectedType: null,
    content: '',
    images: [],
    phone: '',
    canSubmit: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 检查登录状态
    if (!app.checkLogin()) return
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
   * 页面相事件处理函数--监听用户下拉动作
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

  // 选择举报类型
  selectType(e) {
    const { type } = e.currentTarget.dataset
    this.setData({ 
      selectedType: type 
    }, this.checkCanSubmit)
  },

  // 内容输入
  onContentInput(e) {
    this.setData({ 
      content: e.detail.value 
    }, this.checkCanSubmit)
  },

  // 手机号输入
  onPhoneInput(e) {
    this.setData({ 
      phone: e.detail.value 
    }, this.checkCanSubmit)
  },

  // 选择图片
  chooseImage() {
    const remaining = 3 - this.data.images.length
    if (remaining <= 0) {
      wx.showToast({
        title: '最多选择3张图片',
        icon: 'none'
      })
      return
    }

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

  // 预览图片
  previewImage(e) {
    const { url } = e.currentTarget.dataset
    wx.previewImage({
      current: url,
      urls: this.data.images
    })
  },

  // 删除图片
  deleteImage(e) {
    const { index } = e.currentTarget.dataset
    const images = this.data.images
    images.splice(index, 1)
    this.setData({ images })
  },

  // 检查是否可以提交
  checkCanSubmit() {
    const { selectedType, content, phone } = this.data
    const canSubmit = selectedType && 
                     content.trim().length > 0 && 
                     /^1\d{10}$/.test(phone)
    this.setData({ canSubmit })
  },

  // 提交举报
  submitReport() {
    if (!this.data.canSubmit) {
      wx.showToast({
        title: '请完善举报信息',
        icon: 'none'
      })
      return
    }

    wx.showToast({
      title: '举报成功',
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