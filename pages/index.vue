<template fucntional>
    <div class="container">
        使用better-scroll2.x做的demo
        <ul>
            <li><nuxt-link to="/test">简单测试</nuxt-link></li>
            <li><nuxt-link to="/infinity">无限滚动</nuxt-link></li>
            <li><nuxt-link to="/refresh">上拉加载下拉刷新</nuxt-link></li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.container{
	font-size: 10*@rpx;
}
</style>