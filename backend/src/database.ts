import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config';

const mongooseOptions: ConnectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

//execute database connection at runtime
(async () => {
    await mongoose.connect(`mongodb://${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`, mongooseOptions, () => console.log('Database is connected'));
})();