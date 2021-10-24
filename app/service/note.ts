import { Service } from 'egg';

export default class NoteService extends Service {

  // 获取所有笔记
  async showNotes() {
    const data = await this.app.model.Note.find({});
    return data;
  }

  // 保存笔记
  async addNote(data) {
    const model = new this.app.model.Note(data);
    await model.save();
    return model;
  }
}
