Page({
  data: {
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
    ]
  },

  // 查看新闻详情
  onNewsDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/news/detail/index?id=${id}`
    })
  }
}) 