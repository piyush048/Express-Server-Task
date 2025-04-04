import { Router} from "express";
import { createTasks, showTasks } from "../controllers";

const taskRouter = Router();

taskRouter.post("/", createTasks)

taskRouter.get("/", showTasks);


export {taskRouter};