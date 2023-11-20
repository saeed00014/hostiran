import express from 'express'
import { deleteFriend, getFriends, sendFriend, getFriend, getFollows } from '../controllers/friends.js'

const router = express.Router()

router.get('/f/*', getFriend)
router.get('/q/*', getFollows)
router.get('/*', getFriends)
router.post('/', sendFriend)
router.delete('/*', deleteFriend)

export default router