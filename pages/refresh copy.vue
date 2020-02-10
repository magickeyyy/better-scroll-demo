<template>
    <div class="refresh">
        <ul>
            <li v-for="(v,i) in hotels" :key="i+'hotel'">
                <div class="img_box">
                    <img src="" alt="" v-noimg="'320-430'">
                </div>
                <div class="describle">
                    <h3>{{v.hotelName}}</h3>
                    <p>{{v.addressChn}}</p>
                    <div class="star">
                        <div class="star">{{v.star}}</div>
                        <div class="ratings">{{v.ratings}}</div>
                    </div>
                    <div class="bottom">
                        <div class="group" v-if="v.supportGroupRooms">{{v.supportGroupRooms?`有团房(${v.groupRoomsLeastOrderingQty}间起订)`:null}}</div>
                        <div class="money">{{v.lowestPrice}}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { API_HOTEL } from '~/assets/api/hotel'
    export default {
        data() {
            return {
                hotels: [],
                form: {
                    bookingQuantity: 1,
                    checkInDate: "2020-02-06",
                    checkOutDate: "2020-02-07",
                    hotelName: "",
                    hotelId: "",
                    nationality: "CN",
                    seeOnlyGroupRooms: false,
                    adultsQuantity: 1,
                    childQuantity: 0,
                    childAge: "",
                    countryId: 16567,
                    cityId: 16568,
                    moreConditionSearchDTO: {},
                    pageNo: 1,
                    pageSize: 10,
                    order: "asc",
                    sidx: ""
                },
                total: 0,
                totalPage: 0,
                scroll: null,
            };
        },
        mounted() {
            this.getHotelList()
                .then(res => {
                    this.$nextTick(() => {
                        this.initScroll();
                    });
                })
        },
        beforeDestroy() {
            this.scroll.destroy()
        },
        methods: {
            initScroll() {
                this.scroll = this.$scroll('.refresh', {
                    pullDownRefresh: true,
                    pullUpLoad: true
                })
                this.scroll.on('pullingDown', this.getHotelList('down'))
                this.scroll.on('pullingUp', this.getHotelList('up'))
            },
            getHotelList(flag) {
                /* 
                 * @params {String} down：下拉刷新，up：上拉加载, undefined: 初始化数据
                */
               if(flag === 'up') {
                   this.form.pageNo++;
               } else {
                   this.form.pageNo = 1;
               }
                return this.$axios({
                    ...API_HOTEL.searchHotel,
                    data: this.form
                }).then(res => {
                    if (res.success) {
                        let list = res.data.records.map(v => {
                            v.ratings = (v.ratings / 10).toFixed(1);
                            return v;
                        });
                        if(flag === 'up') {
                            this.hotels = this.hotels.concat(list);
                            if(this.scroll) {
                                this.scroll.finishPullUp();
                                this.scroll.refresh();
                            }
                        } else {
                            this.hotels = list;
                            if(this.scroll) {
                                this.scroll.finishPullDown();
                            }
                        }
                        this.total = res.data.total * 1;
                        this.totalPage = res.data.totalPage * 1;
                    }
                    return flag;
                });
            },
        }
    };
</script>

<style scoped lang="less">
    .refresh{
        height: 100%;
        overflow: hidden;
        position: relative;
        ul{
            position: relative;
            li{
                display: flex;
                justify-content: space-between;
                margin-bottom: 6*@rpx;
                padding: 16*@rpx;
                background-color: #fff;
                .img_box{
                    width: 30%;
                    height: 110*@rpx;
                    flex-shrink: 0;
                }
                .describle{
                    width: 60%;
                    flex-shrink: 0;
                }
            }
        }
    }
</style>
