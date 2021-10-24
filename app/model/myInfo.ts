export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const myInfoSchema = new Schema({
    identifier: {
      type: String,
    },
    name: {
      type: String,
    },
    portrait: {
      type: String,
    },
    GitHub: {
      type: String,
    },
    QQ: {
      type: String || Number,
    },
    WeChat: {
      type: String || Number,
    },
    email: {
      type: String,
    },
    AliPay: {
      type: String,
    },
    WeChatPay: {
      type: String,
    },
  }, {
    timestamps: true,
  });

  return mongoose.model('MyInfo', myInfoSchema);
};
