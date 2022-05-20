import { Service } from 'egg';

export default class NoteService extends Service {

  // 获取所有笔记
  async showNotes() {
    const data = await this.app.model.Note.find({});
    return data;
  }

  // 获取单篇笔记
  async getNote(id) {
    const data = await this.app.model.Note.findOne({ _id: id.id });
    return data;
  }

  // 保存笔记
  async addNote(data) {
    const model = new this.app.model.Note(data);
    await model.save();
    return model;
  }

  // 修改笔记
  async changeNote(data) {
    const res = await this.app.model.Note.updateOne({ _id: data.id }, {
      title: data.title,
      content: data.content,
    });
    return res;
  }

  // 添加标签
  async addTags(data) {
    const oldTags = await this.app.model.Note.findOne({ _id: data.id });
    const tags = oldTags.tags.concat(data.tags);
    const res = await this.app.model.Note.updateOne({ _id: data.id }, { tags });
    return res;
  }

  // 清空标签
  async clearTags(data) {
    const res = await this.app.model.Note.updateOne({ _id: data.id }, { tags: [] });
    return res;
  }
}
