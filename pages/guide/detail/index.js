Page({
  data: {
    guide: null
  },

  onLoad(options) {
    if (!options.id) {
      wx.showToast({
        title: '参数错误',
        icon: 'none'
      })
      setTimeout(() => wx.navigateBack(), 1500)
      return
    }

    const guideDetail = this.getGuideDetail(options.id)
    if (!guideDetail) {
      wx.showToast({
        title: '内容不存在',
        icon: 'none'
      })
      setTimeout(() => wx.navigateBack(), 1500)
      return
    }

    this.setData({ guide: guideDetail })
  },

  getGuideDetail(id) {
    const guides = {
      '1': {
        id: 1,
        title: '电信诈骗防范指南',
        content: `
          <h1>电信诈骗防范指南</h1>
          <p>电信诈骗是指犯罪分子通过电话、短信、网络等通讯工具，编造虚假信息，设置骗局，诱使受害人上当受骗，从而骗取钱财的犯罪行为。</p>
          
          <h2>一、常见诈骗手段</h2>
          <p>1. 冒充公检法机关</p>
          <p>2. 虚假网络购物</p>
          <p>3. 虚假中奖信息</p>
          <p>4. 冒充熟人诈骗</p>

          <h2>二、防范措施</h2>
          <p>1. 不轻信陌生来电</p>
          <p>2. 不随意点击不明链接</p>
          <p>3. 不向陌生账户转账</p>
          <p>4. 遇到可疑情况及时报警</p>
        `,
        time: '2024-03-21',
        views: 1234,
        likes: 88
      }
    }
    return guides[id]
  }
}) 