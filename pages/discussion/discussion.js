Page({
  data: {
    posts: [
      {
        id: 1,
        title: "昨天在半亩塘被骗了20w",
        date: "2024-12-02 10:30",
        content: "求你了把钱还我吧，真吃不起饭了",
        image: "https://example.com/image1.jpg"
      },
      {
        id: 2,
        title: "今天下午刚刚骗个傻子20w",
        date: "2024-12-01 18:45",
        content: "糖成啥了~",
        image: "https://example.com/image2.jpg"
      }
    ]
  },

  onPostClick: function (e) {
    const postId = e.currentTarget.dataset.id;  // 获取点击的帖子ID
    wx.navigateTo({
      url: `/pages/postdetail/postdetail?id=${postId}`  // 跳转到帖子详情页
    });
  }
});
