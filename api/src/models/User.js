import { Schema, model } from "mongoose";

const user = new Schema({
    email: {
        type: String,
        required: [true, 'User email is required!'],
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
    }
});

const User = model('User', userSchema);
export default user