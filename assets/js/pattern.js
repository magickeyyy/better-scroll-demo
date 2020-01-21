/*
 * @Author: magckeyyy
 * @Date: 2019-11-12 09:59:40
 * @Description:
 * @Attention:
 */
export default {
    // phone: /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,
    phone: /^[1]([3-9])[0-9]{9}$/g, // 国内手机号
    otherPhone: /^\d{1,20}$/g, // 国外手机号
    smsYzm: /^(\d|[a-zA-Z]){6}$/g, // 短信验证码
    pwd: /^[a-zA-Z\d!@#$%^&*_]{6,30}$/g, // 6-20位，需同时包含数字，字母，符号仅可使用@#*_- /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
    // pwd: /^[a-zA-Z\\d!@#$%^&*_]{6,30}$/,
    imgyzm: /^\d{4}$/g, // 图型验证码：数字
    groupNo: /^[0-9a-zA-Z]{0,20}$/g, // 团号
    contactName: /^[\u4e00-\u9fa5a-zA-Z ]{0,20}$/g, // 联系人姓名
    contactAddr: /^.{0,60}$/g, // 玩乐门票特色收票地址
    otherRequired: /^.{0,50}$/g, // 玩乐餐厅其他需求，textarea
    userName: /^(YH)\d{8}$/g, // 用户名
    pnum: /^(\+|-)?[1-9][0-9]*$/g, //客人人数
    orgName: /^\S{2,80}$/g,
    contactNameRe: /^[\u4e00-\u9fa5a-zA-Z ]{1,40}$/g, // 联系人姓名
    emailLength: /^\S{6,30}$/g, // 联系人姓名
    date: /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/, //日期xxxx-xx-xx
    number:/^[0-9]*$/,//数字
    forgetPwdSms: /^[\d_]{6}$/g, // 使用手机找回密码的短信验证码
};
