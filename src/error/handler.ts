import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if(error instanceof ValidationError){
        let errors: ValidationErrors = {};

        return response.status(400).json({ message: 'Validations fail', errors })
    }
    
    console.error(error);
    
    return response.status(500).json({message: 'internal server error'})
}

export default errorHandler;