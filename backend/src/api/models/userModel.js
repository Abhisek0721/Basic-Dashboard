import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    full_name: {
        type: String
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

const User = mongoose.model("users", userSchema);

export default User;