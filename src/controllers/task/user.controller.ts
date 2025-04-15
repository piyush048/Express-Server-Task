import {Request, Response} from "express";
import {UserModel} from '../../models';
import { comparePassword, hashPassword } from "../../utils/hash";

const createUser = async (req : Request, res : Response) : Promise<void> => {
    try {
        const { name, email, age, password, phoneNumber} = req.body;
        const exitingUser = await UserModel.findOne({email});

        if(exitingUser){
            res.json({message: 'User already exists!'});
            return;
        }

        const hashed = await hashPassword(password);
        const user = new UserModel({name, email, age, password: hashed, phoneNumber});
        await user.save();
        res.json({message : 'User created successfully!'});
    } catch (error) {
        res.json({message : 'Server error!', error: error });
    }
}


const getUser = async (req : Request, res : Response): Promise<void> => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    try {
        const users = await UserModel.find()
        .skip((page -1) * limit)
        .limit(limit)
        .select('-password');

        const total = await UserModel.countDocuments();
        res.json({
            users, 
            page, 
            totalpage: Math.ceil( total / limit )
        });

    } catch (error) {
        res.json({message : 'Server error!', error: error });
    }
};


const loginUser = async (req : Request, res : Response) : Promise<void> =>  {
    const {email, password} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(!user){
            res.json({message : 'User not found!'});
            return;
        }

        const isValid = await comparePassword(password, user.password);
        if(!isValid){
            res.json({message : 'Invalid credentials!'});
            return;
        }

        res.json({message : 'Login successful!', user : {email : user.email, name : user.name}});

    } catch (error) {
        res.json({message : 'Server error!', error: error });
    }
};

export {createUser, getUser, loginUser};