import { Document } from "mongoose";

interface User extends Document {
    name: string,
    age: number,
    email: string,
    password: string,
    phoneNumber : number
}

export {User};