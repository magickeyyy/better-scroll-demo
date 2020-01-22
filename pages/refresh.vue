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
                    if(res) {
                        this.$nextTick(() => {
                            this.initScroll();
                        });
                    }
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
                this.scroll.on('pullingDown', this.getHotelList(true))
                this.scroll.on('pullingUp', this.getHotelList(false))
            },
            getHotelList(flag) {
                /* 
                 * @params {Boolean} true：下拉刷新，false：上拉加载
                */
               if(flag === true) {
                   this.form.pageNo = 1;
               } else if(flag === false) {
                   this.form.pageNo++;
               }
                return this.$axios({
                    ...API_HOTEL.searchHotel,
                    data: this.form
                }).then(res => {
                    if (res.success) {
                        let list = res.data.records.map(v => {
                            v["supportFacilities"] =
                                v.supportFacilities &&
                                v.supportFacilities.length > 0
                                    ? v.supportFacilities.split(",").slice(0, 2)
                                    : [];
                            v.ratings = (v.ratings / 10).toFixed(1);
                            v.star = Number(v.star);
                            return v;
                        });
                        if(flag === true) {
                            this.hotels = list;
                        } else if(1) {

                        }
                        this.total = res.data.total * 1;
                        this.totalPage = res.data.totalPage * 1;
                        if(this.scroll) this.scroll.finishPullDown();
                    }
                    return this.hotels.length>0?true:false;
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
