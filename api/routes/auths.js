import express from "express"
import { login, logout, signup, validateToken } from "../controllers/auths.js"

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/vt', validateToken)
router.delete('/logout/*', logout)

export default router