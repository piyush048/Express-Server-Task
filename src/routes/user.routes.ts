import {Router} from "express";
import { createUser, getUser, loginUser } from "../controllers/user.controller";
import { createUserSchema, loginSchema } from "../validations/user.validations";
import {validate} from '../middlewares/validate';

const router = Router();

router.get("/", getUser);
router.post("/register", validate(createUserSchema), createUser);
router.post("/login", validate(loginSchema), loginUser)

export {router as userRouter};