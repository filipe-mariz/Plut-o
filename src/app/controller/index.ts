import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Service from '../model/index';

export default {
    async index(req: Request, res: Response) {
        const {
            marketStatus,
            price,
            founds,
            size
        } = req.body

        const serviceRepository = getRepository(Service);

        if (marketStatus == false) {
            return res.status(400).json({
                message: 'REJECT',
                problem: 'the marketStatus field was marked as "closed"',
                solution: 'change the marketStatus field to open'
            })
        }

        if ((price == 1.01) || (price == 1000)) {
            return res.status(400).json({
                message: 'REJECT',
                problem: 'the price field has an incompatible value',
                valueIncompatible: '1.01 & 1000',
                solution: 'change the field to another compatible value'
            })
        }

        if ((size >= (founds/10))) {
            return res.status(400).json({
                message: 'REJECT',
                problem: 'size is equal to or greater than founds',
                solution: 'change the size field to less than 10% of founds'
            })
        }

        const data = {
            marketStatus,
            price,
            founds,
            size
        }

        const schemma = Yup.object().shape({
            marketStatus: Yup.boolean().required(),
            price: Yup.number().required(),
            founds: Yup.number().required(),
            size: Yup.number().required()
        })

        await schemma.validate(data, {
            abortEarly: false,
        });

        const service = serviceRepository.create(data);
        await serviceRepository.save(service)

        return res.status(200).json({
            service,

            message: 'ACCEPT'
        })

    }
}
