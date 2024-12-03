Page({
  data: {
    tipsList: [
      {
        id: '1',
        title: '防范电信诈骗小贴士',
        brief: '如何识别和防范常见的电信诈骗手段...',
        image: '/assets/tips/1.png',
        time: '2024-03-20',
        views: 1234,
        type: 'warning'
      },
      {
        id: '2',
        title: '网络安全防护指南',
        brief: '日常上网安全防护的基本要点...',
        image: '/assets/tips/2.png',
        time: '2024-03-19',
        views: 856,
        type: 'info'
      },
      {
        id: '3',
        title: '个人信息保护提醒',
        brief: '保护个人隐私信息的重要提示...',
        image: '/assets/tips/3.png',
        time: '2024-03-18',
        views: 2341,
        type: 'danger'
      },
      {
        id: '4',
        title: '密码安全管理建议',
        brief: '如何设置和管理安全的密码...',
        image: '/assets/tips/4.png',
        time: '2024-03-17',
        views: 1567,
        type: 'info'
      }
    ]
  },

  onTipDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/tips/detail/index?id=${id}`
    })
  }
}) 