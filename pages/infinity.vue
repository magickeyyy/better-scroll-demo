<template>
    <div class="infinity">
        <div class="template">
            <li ref="message"
                class="infinity-item">
                <div class="box">
                    <img class="infinity-avatar">
                    <div class="infinity-bubble">
                        <h3></h3>
                        <p></p>
                        <div class="first"></div>
                        <div class="second"></div>
                        <div class="third"><span>&yen;</span></div>
                    </div>
                </div>
            </li>
            <li ref="tombstone"
                class="infinity-item tombstone">
                <div class="box">
                    <img class="infinity-avatar"
                        :src="require('../assets/public_img/no_img320-430.png')">
                    <div class="infinity-bubble">
                        <h3></h3>
                        <p></p>
                        <div class="first"></div>
                        <div class="second"></div>
                        <div class="third"><span>&yen;</span></div>
                    </div>
                </div>
            </li>
        </div>
        <div ref="chat"
             class="infinity-timeline">
            <ul>
            </ul>
        </div>
    </div>
</template>

<script>
import { API_HOTEL } from "~/assets/api/hotel";
const defimg = require("../assets/public_img/no_img320-430.png");
export default {
    data() {
        return {
            hotelList: [],
            pageNo: 1,
            total: 0,
            totalPage: 0,
            scroll: null
        };
    },
    mounted() {
        this.getHotelList().then(res => {
            if (res) {
                this.$nextTick(() => {
                    this.createInfinityScroll();
                });
            }
        });
    },
    methods: {
        createInfinityScroll() {
            this.$scroll(this.$refs.chat, {
                scrollX: false,
                scrollY: true,
                infinity: {
                    render: (item, div) => {
                        console.dir(div);
                        div = div || this.$refs.message.cloneNode(true);
                        div.dataset.id = item.hotelId;
                        let img = div.querySelector(".infinity-avatar");
                        img.onerror = function() {
                            let n = img.getAttribute("error");
                            n
                                ? img.setAttribute("error", n++)
                                : img.setAttribute("error", 1);
                            img.src = defimg;
                            if (n > 2) {
                                img.onerror = null;
                            }
                        };
                        img.src = item.hotelImageUrl || "error";
                        div.querySelector(".infinity-bubble h3").textContent =
                            item.hotelName;
                        div.querySelector(".infinity-bubble p").textContent =
                            item.addressChn;
                        div.querySelector(".first").textContent =
                            item.supportFacilities;
                        div.querySelector(".second").textContent =
                            item.addressEng;
                        div.querySelector(".third").textContent =
                            item.lowestPrice;
                        return div;
                    },
                    createTombstone: () => {
                        return this.$refs.tombstone.cloneNode(true);
                    },
                    fetch: count => {
                        // Fetch at least 30 or count more objects for display.
                        count = Math.max(100, count);
                        return new Promise((resolve, reject) => {
                            // Assume 50 ms per item.
                            setTimeout(() => {
                                if (++this.pageNo > this.totalPage) {
                                    resolve(false);
                                } else {
                                    resolve(Promise.all(this.hotelList));
                                }
                            }, 2000);
                        });
                    }
                }
            });
        },
        getHotelList() {
            return this.$axios({
                ...API_HOTEL.searchHotel,
                data: {
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
                    pageSize: 100,
                    order: "asc",
                    sidx: ""
                }
            }).then(res => {
                if (res.success) {
                    this.hotelList = res.data.records.map(v => {
                        v["supportFacilities"] =
                            v.supportFacilities &&
                            v.supportFacilities.length > 0
                                ? v.supportFacilities.split(",").slice(0, 2)
                                : [];
                        v.ratings = (v.ratings / 10).toFixed(1);
                        v.star = Number(v.star);
                        this.mapMarks =
                            this.mapMarks +
                            v.latitude +
                            "," +
                            v.longitude +
                            "|";
                        return v;
                    });
                    this.pageNo = res.data.pageNo * 1 || 1;
                    this.total = res.data.total * 1;
                    this.totalPage = res.data.totalPage * 1;
                    return this.hotelList.length;
                } else {
                    return 0;
                }
            });
        },
        formatForm(data) {
            // 按接口格式化参数
            let form = {};
            Object.keys(data).map(v => {
                if (v !== "destination") {
                    form[v] = data[v];
                }
                if (v === "childAge") {
                    form[v] = data[v].join(",");
                }
            });
            form["countryId"] = data.destination[0] * 1;
            form["cityId"] = data.destination[1] * 1;
            return form;
        },
    }
};
</script>

<style scoped lang="less">
* {
    box-sizing: border-box;
}
.infinity {
    height: 100vh;
}
.template {
    display: none;
}
.infinity-timeline {
    height: 100%;
    overflow: hidden;
    will-change: transform;
    position: relative;
    >ul{
        position: relative;
        -webkit-backface-visibility: hidden;
        -webkit-transform-style: flat;
    }
}
.infinity-item {
    width: 100%;
    padding-bottom: 6*@rpx;
    will-change: transform;
    .box{
        padding: 16*@rpx;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        will-change: transform;
    }
    .infinity-avatar {
        width: 120 * @rpx;
        height: 110 * @rpx;
        border: none;
    }
    .infinity-bubble {
        width: 100%;
        padding-left: 10 * @rpx;
        > h3 {
            margin-bottom: 6 * @rpx;
        }
        > p {
            margin-bottom: 6 * @rpx;
        }
        .first,
        .second,
        .third {
            margin-bottom: 6 * @rpx;
        }
        .third {
            color: #ec0286;
            font-size: 18 * @rpx;
            font-family: OswaldMedium;
            text-align: right;
            line-height: 20*@rpx;
            span {
                font-size: 12*@rpx;
            }
        }
    }
}
.tombstone.infinity-item {
    .infinity-bubble{
        >h3,>p,.first,.second,.third {
            background-color: #efeff5;
            width: 100%;
        }
        >h3{
            height: 34 * @rpx;
        }
        >p{
            height: 10 * @rpx;
        }
        .first,
        .second,
        .third {
            height: 20 * @rpx;
        }
    }
}
</style>
