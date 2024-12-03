// 统一的请求处理
export function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(new Error(`请求失败: ${res.statusCode}`))
        }
      },
      fail: reject
    })
  })
}

// 错误处理
export function handleError(error, customMessage = '操作失败') {
  console.error(error)
  wx.showToast({
    title: customMessage,
    icon: 'none'
  })
} 