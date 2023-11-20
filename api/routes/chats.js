import express from 'express'
import { getChat, sendChat } from '../controllers/chats.js'

const router = express.Router()

router.get('/*', getChat)
router.post('/', sendChat)

export default router