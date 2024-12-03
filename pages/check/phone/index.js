const JUHE_API_KEY = 'your_api_key'

Page({
  checkPhoneLocation(phone) {
    wx.request({
      url: 'http://apis.juhe.cn/mobile/get',
      data: {
        phone: phone,
        key: JUHE_API_KEY
      },
      success: (res) => {
        if(res.data.error_code === 0) {
          // 显示手机归属地信息
        }
      }
    })
  }
}) 