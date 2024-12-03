// messageBoard.js

Page({
  data: {
    inputValue: '',  // 用于绑定输入框的内容
    messages: []     // 保存留言的数组
  },

  // 页面加载时模拟获取留言数据
  onLoad: function() {
    // 这里用模拟数据来替代从本地存储中读取
    const simulatedMessages = [
      "quliu19b骗了我20w！",
      "我最近遇到了一些诈骗问题，大家小心点。",
      "关于最近的诈骗案件，大家要提高警惕！",
      "希望更多的人能够参与到反诈行动中来！"
    ];

    // 将模拟数据设置到页面中
    this.setData({
      messages: simulatedMessages
    });
  },

  // 处理输入框的变化
  onInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  // 提交留言
  onSubmit: function() {
    const newMessage = this.data.inputValue.trim();
    if (newMessage) {
      // 将新留言加入到留言数组
      const updatedMessages = [...this.data.messages, newMessage];
      this.setData({
        messages: updatedMessages,
        inputValue: ''  // 清空输入框
      });

      // 这里保存留言数据到本地存储 (调试时可以注释)
      wx.setStorageSync('messages', updatedMessages);  // 保存留言数据到本地存储
    } else {
      wx.showToast({
        title: '留言不能为空',
        icon: 'none',
      });
    }
  }
});
