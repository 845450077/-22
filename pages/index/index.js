//index.js
//获取应用实例
const app = getApp()

Page({
    onReady: function (e) {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myAudio')
      },
  data: {
    // motto: '22',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    imgUrls: [{
          img: "../../images/6899_5.jpg"
      }, {
          img: "../../images/1.jpg"
      }],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      poster: 'http://d.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=abfe5f62f3f2b211f0238d1cabe90e5d/fd039245d688d43f3c52a8e3751ed21b0ef43b23.jpg',
    name: '此时此刻',
    author: '许巍',
    src: '../../images/贝瓦儿歌 - 小星星.mp3',
    //   poster: "http://d.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=abfe5f62f3f2b211f0238d1cabe90e5d/fd039245d688d43f3c52a8e3751ed21b0ef43b23.jpg",
    //   musicSrc: "../../images/贝瓦儿歌 - 小星星.mp3",
    //   name: '小星星',
    //   author: '贝瓦儿歌',
      sliderValue: 0,
      minTime: 0,
      maxTime: 100,
      minMin: '00:00',
      maxMin: '00:00',
  },
  bindTimeUpdate: function (audio) {
    // 通过audio的属性秒数计算当前分钟和秒数
    let currentMin = Math.floor(audio.detail.currentTime / 60);
    var currentSec = Math.floor(audio.detail.currentTime % 60);
    // 异常处理
    if (currentSec < 10) {
        currentSec = "0" + currentSec;
    }
    if (currentMin < 10) {
        currentMin = "0" + currentMin;
    }
    // 拼接
    var currentTime = currentMin + ":" + currentSec;

    let maxMin = Math.floor(audio.detail.duration / 60);
    var maxSec = Math.floor(audio.detail.duration % 60);

    if (maxSec < 10) {
        maxSec = "0" + maxSec;
    }
    if (maxMin < 10) {
        maxMin = "0" + maxMin;
    }

    var maxTime = maxMin + ":" + maxSec;
    // 重新赋值data，然后小程序就会根据data读取数据，自动更新UI
    this.setData({
        minMin: currentTime,
        maxMin: maxTime,
        sliderValue: audio.detail.currentTime,
        maxTime: audio.detail.duration
    })
  },
  sliderChange: function (slider) {
    this.audio14(slider.detail.value);
},
audio14: function (time) {
    this.setData({
        action: {
            method: 'setCurrentTime',
            data: time
        }
    });
},
})
