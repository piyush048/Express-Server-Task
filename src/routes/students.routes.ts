import { Router } from "express";
import { createStudent, showStudent } from "../controllers/task";

const stuRouter = Router();

stuRouter.get("/student", showStudent);
stuRouter.post("/student", createStudent);

export {stuRouter};