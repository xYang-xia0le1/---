Page({
  data: {
    newsDetail: null
  },

  onLoad(options) {
    const { id } = options
    if (id) {
      const newsDetail = this.getNewsDetail(id)
      if (newsDetail) {
        this.setData({ newsDetail })
      }
    }
  },

  getNewsDetail(id) {
    const newsMap = {
      '1': {
        id: '1',
        title: '如何防范电信诈骗',
        content: `
          <div class="article-paragraph">
            <h3>一、什么是电信诈骗？</h3>
            <p>电信诈骗是指犯罪分子通过电话、短信、网络等通讯工具，编造虚假信息，设置骗局，诱使受害人上当受骗，从而骗取钱财的犯罪行为。</p>
          </div>
          <div class="article-paragraph">
            <h3>二、常见的电信诈骗手段</h3>
            <p>1. 冒充公检法机关</p>
            <p>2. 虚假网络购物</p>
            <p>3. 虚假中奖信息</p>
            <p>4. 冒充熟人诈骗</p>
          </div>
          <div class="article-paragraph">
            <h3>三、防范措施</h3>
            <p>1. 不轻信陌生来电</p>
            <p>2. 不随意点击不明链接</p>
            <p>3. 不向陌生账户转账</p>
            <p>4. 遇到可疑情况及时报警</p>
          </div>
        `,
        time: '2024-03-20',
        views: 1234,
        coverImage: '/assets/news/1.png',
        source: '反诈中心',
        category: '安全提示'
      },
      '2': {
        id: '2',
        title: '网络安全防护指南',
        content: `
          <div class="article-paragraph">
            <h3>一、密码安全</h3>
            <p>1. 使用复杂密码</p>
            <p>2. 定期更换密码</p>
            <p>3. 不同平台使用不同密码</p>
          </div>
          <div class="article-paragraph">
            <h3>二、上网安全</h3>
            <p>1. 使用安全网络</p>
            <p>2. 安装防病毒软件</p>
            <p>3. 及时系统更新</p>
          </div>
        `,
        time: '2024-03-19',
        views: 856,
        coverImage: '/assets/news/2.png'
      },
      '3': {
        id: '3',
        title: '当心这些新型诈骗手段',
        content: `
          <div class="article-paragraph">
            <h3>一、新型诈骗手段</h3>
            <p>1. 虚假投资理财</p>
            <p>2. 网络刷单诈骗</p>
            <p>3. 冒充客服诈骗</p>
          </div>
          <div class="article-paragraph">
            <h3>二、防范建议</h3>
            <p>1. 不轻信高回报承诺</p>
            <p>2. 不参与刷单活动</p>
            <p>3. 主动核实客服身份</p>
          </div>
        `,
        time: '2024-03-18',
        views: 2341,
        coverImage: '/assets/news/3.png'
      }
    }
    return newsMap[id]
  }
}) 