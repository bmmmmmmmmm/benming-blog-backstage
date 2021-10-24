import { Controller } from 'egg';

export default class HomeController extends Controller {

  // 获取笔记
  async showNote() {
    const { ctx } = this;
    const dataList = await ctx.service.note.showNotes();
    ctx.body = {
      code: 0,
      masg: 'success!',
      data: dataList,
    };
  }

  // 添加笔记
  async addNote() {
    const { ctx } = this;
    await ctx.service.note.addNote({
      id: ctx.request.body.id,
      title: ctx.request.body.title,
      discriptions: ctx.request.body.discriptions,
      tags: ctx.request.body.tags,
      content: ctx.request.body.content,
    });
    ctx.body = {
      code: 0,
      masg: 'add success!',
    };
  }
}
