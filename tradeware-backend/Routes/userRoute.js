import express from 'express'
const router = express.Router()

import { addUser, checkUserData } from '../Controllers/userController.js'


router.post("/", addUser);
router.put("/", checkUserData);

export default router