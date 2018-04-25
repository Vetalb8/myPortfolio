import mongoose from 'mongoose'


const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  startDate: Date,
  endDate: Date,
})

export default mongoose.model('project', ProjectSchema)
