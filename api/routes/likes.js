import express from 'express'
import { sendDisLike, sendLike, getPostLikes } from '../controllers/likes.js'

const router = express.Router()

router.get('/*', getPostLikes)
router.post('/', sendLike)
router.delete('/*', sendDisLike)

export default router