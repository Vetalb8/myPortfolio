import mongoose from 'mongoose';
import keys from '../../config/keys';


mongoose.Promise = Promise;
mongoose.connect(keys.MONGODB_URI, { useMongoClient: true });

module.exports = mongoose;
