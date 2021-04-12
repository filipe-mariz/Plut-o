import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import User from '../model/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default {
    async index(req: Request, res: Response) {
        const {
            nome,
            email,
            password,
            confirmPassword
        } = req.body;

        const userRepository = getRepository(User);

        const emailExists = userRepository.findOne({ where: { email } });
        if (emailExists) {
            return res.send(400).json({
                message: 'This E-mail is already in use',
                solution: 'Change your e-mail'
            })
        }

        if (password != confirmPassword) {
            return res.status(400).json({
                message: 'This password not match with the confirmation',
                solution: 'confirm that your password is the password confirmation table'
            })
        }

        const data = {
            nome,
            email,
            password, 
        }

        const schemma = Yup.object().shape({
            nome: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required(),            
        })

        await schemma.validate(data, {
            abortEarly: false,
        });

        const user = userRepository.create(data);
        await userRepository.save(user)

        return res.status(200).json({
            user
        })

    },

    async login(req: Request, res: Response) {
        const {            
            email,
            password,            
        } = req.body

        const userRepository = await getRepository(User).findOne({ where: { email } })
        
        if (!userRepository) {
            return res.status(401).json({
                message: 'user not found',
                solution: 'Create a new user or recover your account'
            })
        }

        const passwordCheck = await bcrypt.compare(password, userRepository.password)
        if (!passwordCheck) {
            return res.status(401).json({ message: "Password incorrect"});
        }

        const token = jwt.sign({ id: userRepository.id }, process.env.TOKEN, {expiresIn: '1d'} );         

        return res.status(200).json({
            message: "User successfully logged in",
            token
        })


    }
}