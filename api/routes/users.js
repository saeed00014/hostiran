import express from "express"
import { getUsers, getOneUser, getFillterUser, putAvatarUser } from "../controllers/users.js"

const router = express.Router()

router.get('/', getUsers)
router.get('/s/*', getFillterUser)
router.get('/*', getOneUser)
router.put('/*', putAvatarUser)

export default router