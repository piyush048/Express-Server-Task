import {NextFunction, Request, Response} from 'express';
import {StudentModel} from '../../models';

export const createStudent = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    try {
        const {name, email, LibID, age} = req.body;
        if(!name || !email || !LibID){
            res.json({message: 'Invalid name or email or LibID'});
            return;
        }

        const exitingStudent = await StudentModel.findOne({email});
        if(exitingStudent){
            res.json({message: 'Student Already Exists!'});
            return;
        }

        const newStudent = new StudentModel ({
            name, email, LibID, age
        });
        await newStudent.save();

        res.json({
            message: 'Student created!',
            Student : newStudent
        });
    } catch (error) {
        console.log('Error creating new Student!', error);
        res.json({message: 'Student not created!'});
        next(error);
    }
}

export const showStudent = async(req: Request, res: Response): Promise<void> => {
    try {
        const student = await StudentModel.find();
        res.json(student);
    } catch (error) {
        console.log('Error fetching all the tasks!', error);
        res.json({message: 'Task not fetched!'});
    }
}

