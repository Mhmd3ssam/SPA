import express from 'express';
import {getTweets} from '../controllers/index.js'
const router = express.Router();

router.get('/',getTweets);

export default router;