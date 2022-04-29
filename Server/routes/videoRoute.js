import express from 'express';
import {getVideo, getAllVideos, createVideo, updateVideo, deleteVideo} from '../Controllers/video.js'
const router = express.Router();

router.get('/',getAllVideos);
router.post('/',createVideo);
router.get('/:id',getVideo);
router.patch('/:id',updateVideo);
router.delete('/:id',deleteVideo);



export default router;
