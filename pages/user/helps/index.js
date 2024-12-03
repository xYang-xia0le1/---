// pages/user/helps/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    helpList: [
      {
        id: '1',
        type: '账号问题',
        content: '账号被盗用，需要帮助',
        status: '已回复',
        time: '2024-03-20'
      },
      {
        id: '2',
        type: '安全咨询',
        content: '如何防范网络诈骗',
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

  onHelpDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/help/detail/index?id=${id}`
    })
  }
})