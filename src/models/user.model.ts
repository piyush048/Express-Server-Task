import mongoose, { Schema } from "mongoose";
import { User } from "../interfaces";


const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
});

export default mongoose.model<User>('User', userSchema);

