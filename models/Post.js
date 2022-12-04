import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  user: {
    type: 'ObjectId',
    ref: 'User'
  },
    date: {
        type: Date,
        required: true,
        unique: true
    },
    mileage: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
});

const Post = mongoose.model('post', PostSchema);

export default Post;