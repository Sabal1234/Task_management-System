import bcrypt from 'bcryptjs';
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, require: true },
    title: { type: String, require: true },
    role: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, require: true, default:false },
    tasks: [{ type: Schema.Types, ObjectId, ref: "Task" }],
    isActive: { type: Boolean, require: true, default: false },
}, { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;