Page({
  data: {
    collectList: [
      {
        id: '1',
        title: '如何防范电信诈骗',
        brief: '本文介绍了几种常见的电信诈骗手段及防范方法...',
        image: '/assets/news/1.png',
        time: '2024-03-20'
      },
      {
        id: '2',
        title: '网络安全防护指南',
        brief: '保护个人信息安全的十大技巧...',
        image: '/assets/news/2.png',
        time: '2024-03-19'
      }
    ]
  },

  onItemTap(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/news/detail/index?id=${id}`
    })
  }
}) 