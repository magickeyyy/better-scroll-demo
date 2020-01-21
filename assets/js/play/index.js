// 玩乐预定错误码。需求：用户在提交订单时如果资源预定政策发生变动，要返回详情页重新进订单页，
// 因为资源政策都是从详情页通过sessionStorage传递的,所以如果报一下错误要返回重新下单
export const BookingError = [{
        value: '50001',
        label: "取消预订的政策发生变化"
    },
    {
        value: '50002',
        label: "可预订性检查请求参数错误"
    },
    {
        value: '50003',
        label: "价格日历请求参数错误"
    },
    {
        value: '50004',
        label: "请求资源不存在"
    },
    {
        value: '50005',
        label: "请求资源被禁用"
    },
    {
        value: '50006',
        label: "请求资源SKU不存在"
    },
    {
        value: '50007',
        label: "请求资源SKU该日不可预订"
    },
    {
        value: '50008',
        label: "请求资源SKU该日库存不足"
    },
    {
        value: '50009',
        label: "到店时间错误"
    },
    {
        value: '50010',
        label: "请求资源价格政策变动"
    },
    {
        value: '50011',
        label: "下单请求频繁"
    },
    {
        value: '50012',
        label: "请求资源价格变动"
    },
    {
        value: '50013',
        label: "不满足起订人数"
    },
    {
        value: '50014',
        label: "不满足最大预订人数"
    },
    {
        value: '50015',
        label: "免费司导人数计算错误"
    },
    {
        value: '50016',
        label: "总价计算错误"
    },
]

// 玩乐资源类型前台转后台,根据索引取值。搜索玩乐资源接口返回资源类型是value2
export const ResTypeToServer = [{
        value1: 'RESTAURANT',
        value2: 'restaurant',
        label: '餐厅'
    },
    {
        value1: 'TICKETS',
        value2: 'ticket',
        label: '门票'
    },
    {
        value1: 'CHARACTERISTIC_EXPERIENCE',
        value2: 'experience',
        label: '特色体验'
    },
]

export const RESTYPE_TO_CLIENT = {
    TEAM_MEAL: '团餐',
    SET_MEAL: '套餐',
    SUBSTITUTION_SEATS: '代订座'
}
export const TICKET_TO_CLIENT = {
    E_TICKET: '电子票',
    PAPER_TICKET: '纸质票',
    POSTAL_TICKET: '邮寄票'
}










export const RESOURCE_TYPE = {
    RESTAURANT: '餐厅',
    TICKETS: '门票',
    CHARACTERISTIC_EXPERIENCE: '特色体验',
}
export const RESOURCE_TYPE_TO_SERVER = [
    { value: 'RESTAURANT', label: '餐厅' },
    { value: 'TICKETS', label: '门票' },
    { value: 'CHARACTERISTIC_EXPERIENCE', label: '特色体验' },
]
export const RESOURCE_TYPE_TO_CLIENT = {
    RESTAURANT: {
        value: '1',
        label: '餐厅'
    },
    TICKETS: {
        value: '2',
        label: '门票'
    },
    CHARACTERISTIC_EXPERIENCE: {
        value: '3',
        label: '特色体验'
    },
}
export const TICKET_TYPE = {
    E_TICKET: '电子票',
    PAPER_TICKET: '纸质票',
    POSTAL_TICKET: '邮寄票'
}
export const RESTAURANT_TYPE = {
    TEAM_MEAL: '团餐',
    SET_MEAL: '套餐',
    SUBSTITUTION_SEATS: '代订座'
}
export const ORDER_STATUS = {
    TO_BE_PAID: '待支付',
    TO_BE_CONFIRMED: '待确认',
    CONFIRMED: '已确认',
    FAILED: '确认失败',
    CANCELED: '已取消',
    COMPLETED: '已完成',
    AUTO_CANCELED: '超时关闭',
    PAY_SUCCESS: '支付成功',
}

// 玩乐订单状态前台转后台
export const POS_TO_SERVER = [{
        value: 'TO_BE_PAID',
        label: '待支付',
        label1: '待支付'
    },
    {
        value: 'TO_BE_CONFIRMED',
        label: '待确认',
        label1: '待确认'
    },
    {
        value: 'CONFIRMED',
        label: '已确认',
        label1: '确认成功'
    },
    {
        value: 'FAILED',
        label: '确认失败',
        label1: '确认失败'
    },
    {
        value: 'CANCELED',
        label: '已取消',
        label1: '已取消'
    },
    {
        value: 'COMPLETED',
        label: '已完成',
        label1: '已完成'
    },
    {
        value: 'AUTO_CANCELED',
        label: '超时关闭',
        label1: '超时关闭'
    }, // 超过30分钟未支付，订单已自动取消。订单中心不用处理两个已取消，都传5后台查询两个
    {
        value: 'PAY_SUCCESS',
        label: '支付成功',
        label1: '支付成功',
    },
]

//  玩乐订单状态前台转后台
export const POS_TO_CLIENT = {
    TO_BE_PAID: {
        value: '1',
        label: '待支付',
        label1: '待支付'
    },
    TO_BE_CONFIRMED: {
        value: '2',
        label: '待确认',
        label1: '待确认'
    },
    CONFIRMED: {
        value: '3',
        label: '已确认',
        label1: '确认成功'
    },
    FAILED: {
        value: '4',
        label: '确认失败',
        label1: '确认失败'
    },
    CANCELED: {
        value: '5',
        label: '已取消',
        label1: '已取消'
    },
    COMPLETED: {
        value: '6',
        label: '已完成',
        label1: '已完成'
    },
    AUTO_CANCELED: {
        value: '7',
        label: '超时关闭',
        label1: '超时关闭'
    },
    PAY_SUCCESS: {
        value: '8',
        label: '支付成功',
        label1: '支付成功'
    }
}