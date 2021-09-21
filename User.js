import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required:true, unique: true},
    // email, useranme은 딱 하나만 존재해야 하니까 unique
    password: { type: String, required: true },
    name: { type: String, required: true },
    location: String,
});

const User = mongoose.model("User", userSchema);

export default User;