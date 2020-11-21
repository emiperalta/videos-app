import express from 'express';
import videoRoutes from './routes/video.routes';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(videoRoutes);

export default app;