Page({
  data: {
    swiperList: [
      { 
        id: 1, 
        imageUrl: '/assets/swiper/1.jpg',
        title: '防范电信诈骗专项行动'
      },
      { 
        id: 2, 
        imageUrl: '/assets/swiper/2.jpg',
        title: '安全知识讲座开讲啦'
      },
      { 
        id: 3, 
        imageUrl: '/assets/swiper/3.jpg',
        title: '反诈中心提醒您'
      }
    ],
    navItems: [
      { id: 1, icon: '/assets/icons/report.png', text: '安全举报', path: '/pages/report/index' },
      { id: 2, icon: '/assets/icons/check.png', text: '安全检测', path: '/pages/check/index' },
      { id: 3, icon: '/assets/icons/guide.png', text: '安全指南', path: '/pages/guide/index' },
      { id: 4, icon: '/assets/icons/help.png', text: '求助中心', path: '/pages/help/index' }
    ],
    newsList: [
      {
        id: '1',
        title: '如何防范电信诈骗',
        brief: '本文介绍了几种常见的电信诈骗手段及防范方法...',
        image: '/assets/news/1.png',
        time: '2024-03-20',
        views: 1234
      },
      {
        id: '2',
        title: '网络信息安全小常识',
        brief: '保护个人信息安全的十大技巧...',
        image: '/assets/news/2.png',
        time: '2024-03-19',
        views: 856
      },
      {
        id: '3',
        title: '当心这些新型诈骗手段',
        brief: '近期出现的新型诈骗手段分析...',
        image: '/assets/news/3.png',
        time: '2024-03-18',
        views: 2341
      }
    ],
    tipsList: [
      {
        id: 1,
        icon: '/assets/icons/warning.png',
        content: '收到陌生链接请勿随意点击',
        type: 'warning'
      },
      {
        id: 2,
        icon: '/assets/icons/danger.png',
        content: '不要轻易相信陌生人的转账要求',
        type: 'danger'
      },
      {
        id: 3,
        icon: '/assets/icons/info.png',
        content: '定期更新密码保护账号安全',
        type: 'info'
      }
    ]
  },

  // 导航到更多新闻
  onMoreNews() {
    wx.navigateTo({
      url: '/pages/news/list/index'
    })
  },

  // 导航到更多安全提示
  onMoreTips() {
    wx.navigateTo({
      url: '/pages/tips/list/index'
    })
  },

  // 查看新闻详情
  onNewsDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/news/detail/index?id=${id}`
    })
  },

  // 导航到功能页面
  onNavItemTap(e) {
    const { path } = e.currentTarget.dataset.item
    // 判断是否是 tabBar 页面
    const tabBarPages = ['/pages/guide/index', '/pages/help/index']
    if (tabBarPages.includes(path)) {
      wx.switchTab({ url: path })
    } else {
      wx.navigateTo({ url: path })
    }
  },

  // 轮播图点击
  onSwiperTap(e) {
    const { id } = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/news/detail/index?id=${id}`
    })
  }
})
