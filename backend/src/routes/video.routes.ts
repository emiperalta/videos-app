import { Router } from 'express';
import * as videoController from '../controllers/video.controller';

const router = Router();

router.get('/videos', videoController.getAllVideos);

export default router;