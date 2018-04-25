import mongoose from 'mongoose'
import keys from '../../config/keys'


mongoose.Promise = Promise
mongoose.connect(keys.MONGODB_URI, { useMongoClient: true })

export default mongoose