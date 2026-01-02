import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    frontName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    gender : {
      type: String,
      required: true
    },
    agreeTerms1: {
      type: Boolean,
      required: true
    },
    agreeTerms2: {
      type: Boolean,
      required: true
    },
    agreeTerms3: {
      type: Boolean,
      required: true
    },
    agreeTerms4: {
      type: Boolean,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    birthdate: {
      type: Date,
      required: true},
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
