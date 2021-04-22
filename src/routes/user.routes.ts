import { Router } from 'express'
const router = Router();

import { getUsers, getUser, postUser, updateUser, deleteUser } from '../controllers/user.controller'

router.route('/')
    .get(getUsers)
    .post(postUser)

router.route('/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

export default router;