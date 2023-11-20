import express from "express"
import { deleteComment, getComments, sendComment, getCommentsQ } from "../controllers/comments.js"

const router = express.Router()

router.get('/q/*', getCommentsQ)
router.get('/*', getComments)
router.post('/', sendComment)
router.delete('/*', deleteComment)

export default router