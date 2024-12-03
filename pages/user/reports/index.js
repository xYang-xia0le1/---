Page({
  data: {
    reportList: [
      {
        id: '1',
        type: '诈骗举报',
        content: '收到可疑短信，疑似诈骗信息',
        status: '处理中',
        time: '2024-03-20'
      },
      {
        id: '2',
        type: '违法信息',
        content: '发现一个传播违法内容的网站',
        status: '已处理',
        time: '2024-03-19'
      }
    ]
  },

  onReportDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/user/reports/detail/index?id=${id}`
    })
  }
}) 