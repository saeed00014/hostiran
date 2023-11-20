import express from 'express'
import { deleteMessage, getMessages, sendMessage } from '../controllers/messages.js'

const router = express.Router()

router.post('/', sendMessage)
router.get('/*', getMessages)
router.delete('/*', deleteMessage)

export default router