import express from 'express';
import videoRoutes from './routes/video.routes';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.use(videoRoutes);

export default app;