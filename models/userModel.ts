// models/user.ts
import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser {
  name: string;
  email: string;
  password: string;
  createdAt?: Date; // Optional: Store account creation time
  role: string;
}

interface IUserDocument extends IUser, Document {}

const userSchema = new Schema<IUserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user", required: true },
  createdAt: { type: Date, default: Date.now }, // Automatically set when the user is created
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.isValidPassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

// console.log("UserModel Initialized:", !!mongoose.models);
const UserModel: Model<IUserDocument> =
  (mongoose.models && mongoose.models.User) ||
  mongoose.model<IUserDocument>("User", userSchema);

export default UserModel;
