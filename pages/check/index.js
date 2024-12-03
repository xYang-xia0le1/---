// pages/check/index.js
import { API_CONFIG, API_URLS } from '../../utils/config'
import { request, handleError } from '../../utils/request'
import { checkText, checkImage } from '../../utils/security'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentType: 'url',
    inputValue: '',
    qrcodePath: '',
    canCheck: false,
    checkResult: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 切换检测类型
  switchType(e) {
    const type = e.currentTarget.dataset.type
    this.setData({
      currentType: type,
      inputValue: '',
      qrcodePath: '',
      canCheck: false,
      checkResult: null
    })
  },

  // 输入内容
  onInput(e) {
    const value = e.detail.value
    this.setData({
      inputValue: value,
      canCheck: value.trim().length > 0
    })
  },

  // 选择二维码图片
  chooseQRCode() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          qrcodePath: res.tempFiles[0].tempFilePath,
          canCheck: true
        })
      }
    })
  },

  // 开始检测
  async startCheck() {
    if (!this.data.canCheck) return
    
    wx.showLoading({ title: '检测中...' })
    
    try {
      let result
      switch (this.data.currentType) {
        case 'url':
          result = await this.checkUrl(this.data.inputValue)
          break
        case 'phone':
          result = await this.checkPhone(this.data.inputValue)
          break
        case 'message':
          result = await this.checkMessage(this.data.inputValue)
          break
        case 'qrcode':
          result = await this.checkQRCode(this.data.qrcodePath)
          break
      }

      this.setData({
        checkResult: {
          ...result,
          time: new Date().toLocaleString()
        }
      })
    } catch (error) {
      handleError(error, '检测失败')
    } finally {
      wx.hideLoading()
    }
  },

  // URL安全检测
  async checkUrl(url) {
    const res = await request({
      url: API_URLS.URL_CHECK,
      method: 'POST',
      data: {
        Action: 'DescribeUrlDetection',
        Version: '2020-12-28',
        Url: url
      },
      header: {
        'Authorization': this.getTencentAuth(),
        'Content-Type': 'application/json'
      }
    })

    return {
      level: this.getUrlRiskLevel(res.Data),
      levelText: this.getUrlRiskText(res.Data),
      description: res.Data.DetectResult || '检测完成'
    }
  },

  // 手机号检测
  async checkPhone(phone) {
    const res = await request({
      url: API_URLS.PHONE,
      data: {
        phone,
        key: API_CONFIG.JUHE_API_KEY
      }
    })

    if (res.error_code === 0) {
      return {
        level: 'info',
        levelText: '归属地信息',
        description: `${res.result.province} ${res.result.city} ${res.result.company}`
      }
    } else {
      throw new Error(res.reason)
    }
  },

  // 短信内容检测
  async checkMessage(content) {
    try {
      await checkText(content)
      return {
        level: 'safe',
        levelText: '安全',
        description: '未发现异常内容'
      }
    } catch (error) {
      return {
        level: 'danger',
        levelText: '危险',
        description: '发现违规内容'
      }
    }
  },

  // 二维码检测
  async checkQRCode(filePath) {
    try {
      await checkImage(filePath)
      return {
        level: 'safe',
        levelText: '安全',
        description: '未发现异常内容'
      }
    } catch (error) {
      return {
        level: 'danger',
        levelText: '危险',
        description: '发现违规内容'
      }
    }
  },

  // 获取腾讯云签名
  getTencentAuth() {
    // 实现腾讯云API签名算法
    return 'signature'
  },

  // 获取URL风险等级
  getUrlRiskLevel(data) {
    const levelMap = {
      0: 'safe',
      1: 'warning',
      2: 'danger'
    }
    return levelMap[data.RiskLevel] || 'unknown'
  },

  // 获取风险等级文本
  getUrlRiskText(data) {
    const textMap = {
      0: '安全',
      1: '需注意',
      2: '危险'
    }
    return textMap[data.RiskLevel] || '未知'
  }
})