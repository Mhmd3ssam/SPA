import mongoose from 'mongoose';

const tweetSchema = mongoose.Schema({
    tweet: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const tweets = mongoose.model('tweetSchema',tweetSchema);

export default tweets;