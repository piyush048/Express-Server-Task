import express, {Request, Response} from 'express';
import {TaskModel} from '../../models';
import taskModel from '../../models/task.model';


const createTasks = async (req: Request, res: Response) => {
    try {
        const {id, title, description, completed} = req.body;

        if(!title || !description){
            throw new Error("Title or description is missing");
        }

        const newTask = new TaskModel({
            id, title, description, completed: false,
        });

        await newTask.save();

        res.json({
            message: 'Task created!',
            task : newTask
        });

    } catch (error) {
        console.log('Error creating new task!', error);
        res.json({message: 'Task not created!'});
    }
}


const showTasks = async(req: Request, res: Response) => {
    try {
        const tasks = await taskModel.find();
        res.json(tasks);
    } catch (error) {
        console.log('Error fetching all the tasks!', error);
        res.json({message: 'Task not fetched!'});
    }
}

export {createTasks, showTasks}