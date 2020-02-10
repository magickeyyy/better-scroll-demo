<template>
    <div class="container">
        <ul class="wraper">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>    
<script>
    export default {
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            this.initscroll();
        },
        beforeDestroy() {
            this.scroll.destroy();
        },
        methods: {
            initscroll() {
                this.scroll = this.$scroll('.container')
            }
        }
    }
</script>
<style lang="less" scoped>
    .container{
        height: 100%;
        overflow: hidden;
        .wraper{
            li{
                background-color:aqua;
                height: 40*@rpx;
                margin-bottom: 10*@rpx;
            }
        }
    }
</style>