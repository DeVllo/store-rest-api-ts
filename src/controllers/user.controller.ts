import { Request, Response } from 'express'

import { connect } from '../database';
import { User } from '../interfaces/User.interface';

export async function getUsers( req: Request, resp: Response){
    const conn = await connect();

    const users = await conn.query('SELECT * FROM users');
    
    return resp.status(200).json(users[0]);
}

export async function postUser( req: Request, res: Response){
    
    const newUser: User = req.body;
    
    try {
        const conn = await connect();
        await conn.query('INSERT INTO users SET ?', [newUser]);
        return res.status(200).json({
            message: 'User created'
        });
    } catch (error) {
        res.status(401).json({
            message: 'Internal error'
        });

        throw error;
    }

    
    
}

export async function getUser( req:Request, res: Response){
    
    const id = req.params.userId;

    try {
        const conn = await connect();
        const user = await conn.query('SELECT * FROM users WHERE ID = ?', [id]);
        return res.status(200).json(user[0]);
    } catch (error) {
        res.status(401).json({
            message: 'Internal error'
        });

        throw error;
    }

}

export async function deleteUser( req: Request, res: Response){
    const id = req.params.userId;

    try {
        const conn = await connect();
        conn.query('DELETE FROM users WHERE id = ?', [id]);
        return res.status(200).json({
            message: 'User deleted'
        });

    } catch (error) {
        res.status(401).json({
            message: 'Internal error'
        });

        throw error;
    }
}

export async function updateUser( req: Request, res: Response) {
    
    const id = req.params.userId;

    const updateUser: User = req.body;

    const conn = await connect();
    await conn.query('UPDATE users set ? WHERE id = ?', [updateUser, id]);

    return res.status(200).json({
        message: 'User updated'
    });

}