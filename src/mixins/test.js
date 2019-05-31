import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }

  onShow() {
    console.log(JSON.stringify(this.getCurrentPages().map(i => i.route).reverse()[0]))
  }

  onLoad() {
    // console.log(JSON.stringify(this.getCurrentPages()[0].__route__))
  }
}
