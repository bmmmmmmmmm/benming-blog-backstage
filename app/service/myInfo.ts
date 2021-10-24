// 引入service
import { Service } from 'egg';

// 扩展服务
export default class MyInfoService extends Service {

  // 获取所有数据
  async gainMyInfo() {
    const data = await this.app.model.MyInfo.find({});
    return data;
  }

  // 初始化数据
  async refreshMyInfo(data) {
    const oldData = await this.app.model.MyInfo.find({});
    if (oldData) {
      data.name = data.name ? data.name : oldData[0].name ? oldData[0].name : '';
      data.portrait = data.portrait ? data.portrait : oldData[0].portrait ? oldData[0].portrait : '';
      data.GitHub = data.GitHub ? data.GitHub : oldData[0].GitHub ? oldData[0].GitHub : '';
      data.QQ = data.QQ ? data.QQ : oldData[0].QQ ? oldData[0].QQ : '';
      data.WeChat = data.WeChat ? data.WeChat : oldData[0].WeChat ? oldData[0].WeChat : '';
      data.email = data.email ? data.email : oldData[0].email ? oldData[0].email : '';
      data.AliPay = data.AliPay ? data.AliPay : oldData[0].AliPay ? oldData[0].AliPay : '';
      data.WeChatPay = data.WeChatPay ? data.WeChatPay : oldData[0].WeChatPay ? oldData[0].WeChatPay : '';
      await this.app.model.MyInfo.remove({});
    }
    const model = new this.app.model.MyInfo(data);
    await model.save();
    return model;
  }

  // // 更改头像
  // async changePortrait(data) {
  //   const res = await this.app.model.MyInfo.updateOne({ identifier: '12356789' }, { portrait: data.portrait });
  //   // const model = new this.app.model.MyInfo(data)
  //   // await model.save();
  //   return res;
  // }

  // // 更改GitHub
  // async changeGitHub(data) {
  //   const res = await this.app.model.MyInfo.updateOne({ identifier: '12356789' }, { GitHub: data.GitHub });
  //   return res;
  // }

  // // 更改QQ
  // async changeQQ(data) {
  //   const res = await this.app.model.MyInfo.updateOne({ identifier: '12356789' }, { QQ: data.QQ });
  //   return res;
  // }

  // // 更改微信
  // async changeWeChat(data) {
  //   const res = await this.app.model.MyInfo.updateOne({ identifier: '12356789' }, { WeChat: data.WeChat });
  //   return res;
  // }

  // // 更改邮箱
  // async changeEmail(data) {
  //   const res = await this.app.model.MyInfo.updateOne({ identifier: '12356789' }, { email: data.email });
  //   return res;
  // }

  // // 更改支付宝
  // async changeAliPay(data) {
  //   const res = await this.app.model.MyInfo.updateOne({ identifier: '12356789' }, { AliPay: data.AliPay });
  //   return res;
  // }

  // // 更改微信支付
  // async changeWeChatPay(data) {
  //   const res = await this.app.model.MyInfo.updateOne({ identifier: '12356789' }, { WeChatPay: data.WeChatPay });
  //   return res;
  // }
}
