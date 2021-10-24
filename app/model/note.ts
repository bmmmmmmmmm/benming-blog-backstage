export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const noteSchema = new Schema({
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    discriptions: {
      type: String,
    },
    tags: {
      type: Number || String || Array,
    },
    content: {
      type: String,
    },
  }, {
    timestamps: true,
  });

  return mongoose.model('Note', noteSchema);
};
