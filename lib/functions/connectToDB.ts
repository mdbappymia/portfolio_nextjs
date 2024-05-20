import mongoose from "mongoose";
export const dbConnect = async () => {
  await mongoose.connect(
    "mongodb+srv://mdbappymia:101202mbm@bappy.3hrifbq.mongodb.net/"
  );
};
