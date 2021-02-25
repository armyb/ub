import { Request, Response } from 'express';

function getLogout(req: Request, res: Response) {
    return res.json({
      status: 'ok',
      msg: '成功',
    });
}
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
    },
    'GET  /api/logout': getLogout,
}