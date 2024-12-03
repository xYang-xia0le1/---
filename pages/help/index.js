// pages/help/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 常用电话列表
    phoneList: [
      { name: '反诈中心', number: '96110', icon: '/assets/icons/police.png' },
      { name: '警察报警', number: '110', icon: '/assets/icons/emergency_police.png' },
      { name: '紧急救援', number: '120', icon: '/assets/icons/emergency_medical.png' }
    ],
    // 求助类型
    helpTypes: [
      { id: 1, name: '诈骗求助', icon: '/assets/icons/help_fraud.png' },
      { id: 2, name: '账号问题', icon: '/assets/icons/help_account.png' },
      { id: 3, name: '资金问题', icon: '/assets/icons/help_money.png' },
      { id: 4, name: '安全咨询', icon: '/assets/icons/help_consult.png' },
      { id: 5, name: '举报建议', icon: '/assets/icons/help_report.png' },
      { id: 6, name: '其他问题', icon: '/assets/icons/help_other.png' }
    ],
    selectedType: null,
    content: '',
    phone: '',
    canSubmit: false,
    // 静态记录数据
    records: [
      {
        id: '1',
        type: '诈骗求助',
        content: '遇到电信诈骗，急需帮助',
        status: '已回复',
        time: '2024-03-20'
      },
      {
        id: '2',
        type: '账号问题',
        content: '账号被盗，请求协助',
        status: '处理中',
        time: '2024-03-19'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  // 紧急求助
  callEmergency() {
    wx.showModal({
      title: '紧急求助',
      content: '确定要拨打110报警电话吗？',
      success: (res) => {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: '110'
          })
        }
      }
    })
  },

  // 拨打电话
  makeCall(e) {
    const number = e.currentTarget.dataset.number
    wx.makePhoneCall({
      phoneNumber: number
    })
  },

  // 选择求助类型
  selectType(e) {
    const type = e.currentTarget.dataset.type
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

  // 检查是否可以提交
  checkCanSubmit() {
    const { selectedType, content, phone } = this.data
    const canSubmit = selectedType && 
                     content.trim().length > 0 && 
                     /^1\d{10}$/.test(phone)
    this.setData({ canSubmit })
  },

  // 提交求助
  submitHelp() {
    if (!this.data.canSubmit) return

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