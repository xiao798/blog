

export default {
  install(Vue) {
    // 这里的Appid是腾讯工作台配置
    let Captcha = new TencentCaptcha('2038488304', res => {
      new Vue().$bus.$emit('getTicket', res)
    });
    Vue.prototype.$Captcha = Captcha
  }
}


