import { Controller } from 'egg';

export default class HomeController extends Controller {

  // 获取我的信息
  async gainMyInfo() {
    const { ctx } = this;
    const dataList = await ctx.service.myInfo.gainMyInfo();
    ctx.body = {
      code: 0,
      masg: 'success!',
      data: dataList,
    };
  }

  // 重置信息
  async refreshMyInfo() {
    const { ctx } = this;
    await ctx.service.myInfo.refreshMyInfo({
      // identifier: ctx.request.body.identifier,
      identifier: '12356789',
      name: ctx.request.body.name,
      portrait: ctx.request.body.portrait,
      GitHub: ctx.request.body.GitHub,
      QQ: ctx.request.body.QQ,
      WeChat: ctx.request.body.WeChat,
      email: ctx.request.body.email,
      AliPay: ctx.request.body.AliPay,
      WeChatPay: ctx.request.body.WeChatPay,
    });
    ctx.body = {
      code: 0,
      masg: 'add success!',
    };
  }

  // // 更改头像
  // async changePortrait() {
  //   const { ctx } = this;
  //   await ctx.service.myInfo.changePortrait(ctx.request.body);
  //   ctx.body = {
  //     code: 0,
  //     masg: 'add success!',
  //   };
  // }

  // // 更改GitHub
  // async changeGitHub() {
  //   const { ctx } = this;
  //   await ctx.service.myInfo.changeGitHub(ctx.request.body);
  //   ctx.body = {
  //     code: 0,
  //     masg: 'add success!',
  //   };
  // }

  // // 更改QQ
  // async changeQQ() {
  //   const { ctx } = this;
  //   await ctx.service.myInfo.changeQQ(ctx.request.body);
  //   ctx.body = {
  //     code: 0,
  //     masg: 'add success!',
  //   };
  // }

  // // 更改微信
  // async changeWeChat() {
  //   const { ctx } = this;
  //   await ctx.service.myInfo.changeWeChat(ctx.request.body);
  //   ctx.body = {
  //     code: 0,
  //     masg: 'add success!',
  //   };
  // }

  // // 更改邮箱
  // async changeEmail() {
  //   const { ctx } = this;
  //   await ctx.service.myInfo.changeEmail(ctx.request.body);
  //   ctx.body = {
  //     code: 0,
  //     masg: 'add success!',
  //   };
  // }

  // // 更改支付宝
  // async changeAliPay() {
  //   const { ctx } = this;
  //   await ctx.service.myInfo.changeAliPay(ctx.request.body);
  //   ctx.body = {
  //     code: 0,
  //     masg: 'add success!',
  //   };
  // }

  // // 更改微信支付
  // async changeWeChatPay() {
  //   const { ctx } = this;
  //   await ctx.service.myInfo.changeWeChatPay(ctx.request.body);
  //   ctx.body = {
  //     code: 0,
  //     masg: 'add success!',
  //   };
  // }
}
