// pages/guide/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKey: '',
    currentCategory: 'all',
    guideList: [
      {
        id: 1,
        category: 'fraud',
        categoryText: '反诈指南',
        title: '电信诈骗防范指南',
        description: '详细介绍各类电信诈骗的特征和防范方法，帮助您提高警惕，远离诈骗。',
        image: '/assets/guide/fraud_1.jpg',
        time: '2024-03-21',
        views: 1234,
        likes: 88,
        collects: 45
      },
      {
        id: 2,
        category: 'account',
        categoryText: '账号安全',
        title: '账号安全防护指南',
        description: '全面的账号安全防护措施，包括密码设置、双重认证等重要内容。',
        image: '/assets/guide/account_1.jpg',
        time: '2024-03-20',
        views: 986,
        likes: 76,
        collects: 38
      },
      {
        id: 3,
        category: 'payment',
        categoryText: '支付安全',
        title: '安全支付操作指南',
        description: '介绍各类支付场景的安全注意事项，保护您的资金安全。',
        image: '/assets/guide/payment_1.jpg',
        time: '2024-03-19',
        views: 876,
        likes: 65,
        collects: 32
      },
      {
        id: 4,
        category: 'privacy',
        categoryText: '隐私保护',
        title: '个人信息保护指南',
        description: '教您如何保护个人隐私，防止信息泄露和被盗用。',
        image: '/assets/guide/privacy_1.jpg',
        time: '2024-03-18',
        views: 765,
        likes: 54,
        collects: 28
      }
    ],
    originalList: [] // 用于存储原始数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 保存原始数据
    this.setData({
      originalList: this.data.guideList
    })
    console.log('指南页面加载')  // 添加调试日志
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
    // tabBar 页面可能需要在这里处理一些逻辑
    console.log('指南页面显示')  // 添加调试日志
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
    return {
      title: '安全指南 - 半亩塘安全平台',
      path: '/pages/guide/index'
    }
  },

  // 搜索输入
  onSearchInput(e) {
    const key = e.detail.value.trim()
    this.setData({ searchKey: key })
    this.filterGuides(this.data.currentCategory, key)
  },

  // 切换分类
  switchCategory(e) {
    const category = e.currentTarget.dataset.category
    this.setData({ currentCategory: category })
    this.filterGuides(category, this.data.searchKey)
  },

  // 筛选指南
  filterGuides(category, searchKey) {
    let filteredList = this.data.originalList

    // 分类筛选
    if (category !== 'all') {
      filteredList = filteredList.filter(item => item.category === category)
    }

    // 关键词搜索
    if (searchKey) {
      filteredList = filteredList.filter(item => 
        item.title.includes(searchKey) || 
        item.description.includes(searchKey)
      )
    }

    this.setData({ guideList: filteredList })
  },

  // 查看指南详情
  onGuideDetail(e) {
    const { id } = e.currentTarget.dataset
    if (!id) {
      wx.showToast({
        title: '参数错误',
        icon: 'none'
      })
      return
    }

    
    wx.navigateTo({
      url: `/pages/guide/detail/index?id=${id}`,
      fail: (err) => {
        console.error('导航失败:', err)
        wx.showToast({
          title: '页面跳转失败',
          icon: 'none'
        })
      }
    })
  }
})