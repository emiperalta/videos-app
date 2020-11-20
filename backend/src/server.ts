import app from './app';
import config from './config';
import './database';

app.listen(config.MONGODB_PORT, () => console.log(`Server on port ${config.MONGODB_PORT}`));