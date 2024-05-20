import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    default: Date.now(),
  },
  first_name: {
    type: String,
    default: "Anonymus",
  },
  last_name: {
    type: String,
    default: "User",
  },
  email: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
});

export const UserModel = model("UserModel", userSchema);
