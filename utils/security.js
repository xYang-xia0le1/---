// 检测文本内容
export function checkText(content) {
  return new Promise((resolve, reject) => {
    wx.serviceMarket.invokeService({
      service: 'wxee446d7507c68b11',
      api: 'msgSecCheck',
      data: {
        content: content
      },
      success: resolve,
      fail: reject
    })
  })
}

// 检测图片内容
export function checkImage(filePath) {
  return new Promise((resolve, reject) => {
    wx.serviceMarket.invokeService({
      service: 'wxee446d7507c68b11',
      api: 'imgSecCheck',
      data: {
        media: {
          contentType: 'image/png',
          value: wx.getFileSystemManager().readFileSync(filePath)
        }
      },
      success: resolve,
      fail: reject
    })
  })
} 