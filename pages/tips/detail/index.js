Page({
  data: {
    tipDetail: null
  },

  onLoad(options) {
    const { id } = options
    if (id) {
      const tipDetail = this.getTipDetail(id)
      if (tipDetail) {
        this.setData({ tipDetail })
      }
    }
  },

  getTipDetail(id) {
    const tipsMap = {
      '1': {
        id: '1',
        title: '保护个人信息安全小贴士',
        content: `
          <div class="tip-section">
            <h3>个人信息保护要点</h3>
            <p>1. 不轻易泄露个人信息</p>
            <p>2. 设置复杂密码</p>
            <p>3. 定期更换密码</p>
            <p>4. 开启双重认证</p>
          </div>
        `,
        time: '2024-03-20',
        coverImage: '/assets/tips/1.png'
      },
      '2': {
        id: '2',
        title: '网络安全防护指南',
        content: `
          <div class="tip-section">
            <h3>网络安全防护要点</h3>
            <p>1. 安装防病毒软件</p>
            <p>2. 及时系统更新</p>
            <p>3. 使用安全网络</p>
            <p>4. 谨慎下载软件</p>
          </div>
        `,
        time: '2024-03-19',
        coverImage: '/assets/tips/2.png'
      }
    }
    return tipsMap[id]
  }
}) 