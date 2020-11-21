import { Router } from 'express';
import { videosList } from '../controllers/video.controller';

const router = Router();

router.get('/videos', videosList);

export default router;