import { Request, Response, NextFunction } from "express";
import Joi from 'joi';

const validate = (schema: Joi.ObjectSchema): any  => {
    return (req: Request, res : Response, next : NextFunction) => {
        const {error} = schema.validate(req.body);

        if(error){
            return res.json({message : error.details[0].message});
        }
        next();
    };
};

export {validate};
