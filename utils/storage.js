// 获取阅读次数
export function getViewCount(id) {
  const viewCounts = wx.getStorageSync('article_views') || {}
  return viewCounts[id] || 0
}

// 增加阅读次数
export function incrementViewCount(id) {
  const viewCounts = wx.getStorageSync('article_views') || {}
  viewCounts[id] = (viewCounts[id] || 0) + 1
  wx.setStorageSync('article_views', viewCounts)
  return viewCounts[id]
} 