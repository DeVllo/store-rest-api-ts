import { Request, Response } from 'express'

export function IndexWelcome(req: Request, res: Response) {
    return res.json('Welcome to my API')
}
