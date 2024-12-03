// pages/user/index.js
Page({
  data: {
    userInfo: {
      nickName: '游客用户',
      avatarUrl: '/assets/icons/default_avatar.png',
      userId: 'GUEST_001'
    },
    menuList: [
      {
        title: '我的收藏',
        icon: '/assets/icons/collect.png',
        path: '/pages/user/collects/index'
      },
      {
        title: '我的举报',
        icon: '/assets/icons/report.png',
        path: '/pages/user/reports/index'
      },
      {
        title: '求助记录',
        icon: '/assets/icons/help.png',
        path: '/pages/user/helps/index'
      },
      {
        title: '设置',
        icon: '/assets/icons/settings.png',
        path: '/pages/user/settings/index'
      },
      {
        title: '关于我们',
        icon: '/assets/icons/about.png',
        path: '/pages/user/about/index'
      }
    ]
  },

  // 页面跳转
  onNavigate(e) {
    const { path } = e.currentTarget.dataset
    wx.navigateTo({ url: path })
  }
})