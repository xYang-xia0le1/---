Page({
  data: {
    post: {},
    replies: [],      // 回复列表
    replyInput: ''    // 回复框内容
  },

  onLoad: function(options) {
    const postId = options.id;  // 获取传递的帖子ID
    // 根据帖子ID模拟获取帖子内容（可以根据ID从数据库获取）
    this.setData({
      post: {
        id: postId,
        title: `求你了把钱还我 `,
        content: `不换我钱我真跳了 。`,
      },
    });
    // 模拟一些回复数据
    this.setData({
      replies: [`回复1:糖成啥了`, `回复2:啥年代了还会上当啊？？？？`]
    });
  },

  // 处理输入框内容
  onReplyInput: function(e) {
    this.setData({
      replyInput: e.detail.value
    });
  },

  // 提交回复
  onReplySubmit: function() {
    const reply = this.data.replyInput.trim();
    if (reply) {
      const updatedReplies = [...this.data.replies, reply];
      this.setData({
        replies: updatedReplies,
        replyInput: ''  // 清空输入框
      });
      // 这里你可以将回复数据保存到本地或后台数据库
    } else {
      wx.showToast({
        title: '回复不能为空',
        icon: 'none'
      });
    }
  }
});
