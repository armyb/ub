import { Request, Response } from 'express';

export default {
    'POST /api/login':(req:Request,res:Response) => {
        const { password, username } = req.body;
        //ok
        if (password === '123456' && username === 'admin') {
            res.send({
                status:'ok',
                currentAuthority: {
                    username: 'admin',
                    userid: 'abc123efdd',
                }
            })
            return;
        }
        res.send({
            status: 'error',
            currentAuthority: 'guest',
        });
    }
}