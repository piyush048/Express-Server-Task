import { Document } from "mongoose";

interface Student extends Document {
    name : String,
    email : String,
    LibID: number,
    age?: number
}

export {Student};