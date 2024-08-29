import express from 'express'
import {createTweet, getTweet} from '../../controllers/tweet-controllers.js'
import {toggleLike} from '../../controllers/like-controller.js'
import {createComment} from '../../controllers/comment-controller.js'
import  {singup} from '../../controllers/auth-controller.js'
const router = express.Router()
router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle', toggleLike);

router.post('/comments', createComment)

router.post('/singup', singup);

export default router;