Page({
  data: {
    // 初始化为空
    newsData: {}
  },

  onLoad(options) {
    // 获取新闻ID
    const newsId = options.id;

    // 在这里模拟获取新闻详情数据，可以从数据库或接口中获取
    this.getNewsDetails(newsId);
  },

  getNewsDetails(newsId) {
    // 模拟从本地数据获取新闻详情
    const newsList = [
      {
        id: 1,
        title: '反诈新闻1',
        content: '这是反诈新闻1的详细内容。介绍如何防范诈骗，识别诈骗的常见手段。',
        image: '../../assets/news/news1.jpg'
      },
      {
        id: 2,
        title: '反诈新闻2',
        content: '这是反诈新闻2的详细内容。阐述了反诈的重要性以及如何自我保护。',
        image: '../../assets/news/news2.jpg'
      },
      {
        id: 3,
        title: '反诈新闻3',
        content: '这是反诈新闻3的详细内容。反诈骗小技巧和常见诈骗类型。',
        image: '../../assets/news/news3.jpg'
      },
      {
        id: 4,
        title: '反诈新闻4',
        content: '这是反诈新闻4的详细内容。如何辨别电信诈骗的技巧。',
        image: '../../assets/news/news4.jpg'
      }
    ];

    // 查找对应新闻的详情
    const news = newsList.find(item => item.id === parseInt(newsId));
    
    // 设置页面的数据
    if (news) {
      this.setData({
        newsData: news
      });
    }
  },

  // 返回按钮功能
  goBack() {
    wx.navigateBack(); // 返回上一页
  }
});
