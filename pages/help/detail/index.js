Page({
  data: {
    helpDetail: {
      id: '1',
      type: '诈骗求助',
      content: '遇到电信诈骗，急需帮助，对方自称是公检法人员...',
      status: '已回复',
      time: '2024-03-20 14:30',
      replies: [
        {
          content: '您好，请立即停止与对方的联系，并保存相关聊天记录...',
          time: '2024-03-20 14:45',
          admin: true
        }
      ]
    }
  },

  // 回复输入
  onReplyInput(e) {
    this.setData({
      replyContent: e.detail.value
    })
  },

  // 提交回复
  submitReply() {
    const content = this.data.replyContent
    if (!content || !content.trim()) {
      wx.showToast({
        title: '请输入回复内容',
        icon: 'none'
      })
      return
    }

    wx.showToast({
      title: '回复成功',
      icon: 'success'
    })

    // 清空输入
    this.setData({
      replyContent: ''
    })
  }
}) 