import Vue from 'vue'
import BScroll from '@better-scroll/core'
import InfinityScroll from '@better-scroll/infinity'
import ObserveDOM  from '@better-scroll/observe-dom'
import PullDown from '@better-scroll/pull-down'
import PullUp from '@better-scroll/pull-up'

BScroll.use(InfinityScroll)
BScroll.use(ObserveDOM)
BScroll.use(PullDown)
BScroll.use(PullUp)

Vue.prototype.$scroll = function (el, options = {}) {
    return new BScroll(el, options);
}