import express from 'express'
import { deletePost, getPosts, getPost, sendPost } from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.get('/*', getPost)
router.post('/', sendPost)
router.delete('/*', deletePost)

export default router