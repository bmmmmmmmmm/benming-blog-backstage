import { Controller } from 'egg';

export default class HomeController extends Controller {

  // 获取所有笔记
  async showNote() {
    const { ctx } = this;
    const dataList = await ctx.service.note.showNotes();
    ctx.body = {
      code: 0,
      masg: 'success!',
      data: dataList,
    };
  }

  // 获取单篇笔记
  async getNote() {
    const { ctx } = this;
    const data = await ctx.service.note.getNote({
      id: ctx.request.body.id,
    });
    ctx.body = {
      code: 0,
      masg: 'success!',
      data,
    };
  }

  // 添加笔记
  async addNote() {
    const { ctx } = this;
    await ctx.service.note.addNote({
      // id: ctx.request.body.id,
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

  // 修改笔记
  async changeNote() {
    const { ctx } = this;
    await ctx.service.note.changeNote(ctx.request.body);
    ctx.body = {
      code: 0,
      masg: 'add success!',
    };
  }

  // 添加标签
  async addTags() {
    const { ctx } = this;
    await ctx.service.note.addTags(ctx.request.body);
    ctx.body = {
      code: 0,
      masg: 'add success!',
    };
  }

  // 删除所有标签
  async clearTags() {
    const { ctx } = this;
    await ctx.service.note.clearTags(ctx.request.body);
    ctx.body = {
      code: 0,
      masg: 'add success!',
    };
  }
}
