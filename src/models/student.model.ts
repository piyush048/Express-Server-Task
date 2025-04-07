import mongoose, {Schema, Document} from "mongoose";
import { Student } from "../interfaces";

const StudentSchema : Schema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    LibID : {
        type : Number,
        required : true
    },
    age : {
        type : Number,
        required : false
    }
});


export default mongoose.model<Student>('Student', StudentSchema);