import { RequestHandler } from 'express';
import Video from '../models/Video';

export const getAllVideos: RequestHandler = (req, res) => {
    res.json('GET videos list');
}