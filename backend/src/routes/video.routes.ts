import { Router } from 'express';
import * as videoController from '../controllers/video.controller'; // * as videoController to avoid large deconstruction

const router = Router();

router.get('/videos', videoController.getAllVideos);

router.get('/videos/:id', videoController.getVideoById);

router.post('/videos', videoController.createVideo);

router.put('/videos/:id', videoController.updateVideo);

router.delete('/videos/:id', videoController.deleteVideo);

export default router;