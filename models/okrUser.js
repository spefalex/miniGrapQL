import mongoose from "mongoose";
const Schema = mongoose.Schema;

const OkrUserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model("okrUser", OkrUserSchema);
