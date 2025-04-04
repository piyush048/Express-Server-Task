import mongoose, {Schema, Document} from "mongoose";

const TaskSchema : Schema = new Schema({
    id : {
        type : Number,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    }
});

export default mongoose.model('Task', TaskSchema);