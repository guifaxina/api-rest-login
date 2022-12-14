import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
	  type: String,
    required: true,
    unique: true,
    lowercase: true,
  },   								
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 20,
  },
  admin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 12);
  this.password = hashedPassword;
  next();
});

export default mongoose.model("User", userSchema);
