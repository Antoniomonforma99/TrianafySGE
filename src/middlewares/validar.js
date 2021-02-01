import { validationResult } from 'express-validator';

export const UserController = {

    usuarioPorId: (req, res) => {

        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            res.status(400).json(errores.array())
        } else {

            let user = userRepository.findById(req.params.id);
            if (user != undefined) {
                res.json(user);
            } else {
                res.sendStatus(404);
            }
        }
    },

};
