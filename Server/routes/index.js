import express from 'express';
import {getTweets, createTweet} from '../Controllers/index.js'
const router = express.Router();

router.get('/',getTweets);
router.post('/',createTweet);

export default router;