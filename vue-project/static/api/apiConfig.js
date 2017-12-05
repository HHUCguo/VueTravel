
// const baseUrl = 'http://192.168.2.10:8092/stp/1.0';
// const baseUrl = 'http://jiayang.imwork.net:8092/stp/1.0';
const baseUrl = 'http://192.168.2.211:8090/stp/1.0';

export default {
    'baseUrl':baseUrl,
    "apiNav":baseUrl + '/order/select/options/find.do',//导航信息查询
    "apiTicketsDetail":baseUrl + '/order/select/ticket/choose.do',//点击加减号购买票
    "apiSubmit":baseUrl + '/order/submit/ticket/submit.do',//点击提交订单
    "apiTickets":baseUrl + '/order/select/tickets/find.do',//查询售票列表
    "apiId":baseUrl + '/order/submit/identityCard/find.do',//身份信息
    "apiTravelName":baseUrl + '/order/select/channelEnt/find.do',//旅行社搜索框
    "apiGuide":baseUrl + '/order/submit/guide/findByCard.do',//通过导游卡获取导游信息（导游票）?cardId=123
    "apiTaGuide":baseUrl + '/order/submit/guideList/findByCompany.do',//通过旅行社信息获取导游信息（旅行社购票）?channelId=123
   
    "apiCardInfo":baseUrl + '',//通过会员卡号获取信息?channelId=123
    "apiCardPost":baseUrl + '',//会员卡注销(换卡)信息提交
    "apiIdTest":baseUrl + '/card/activate/test.do'//测试websocket
}