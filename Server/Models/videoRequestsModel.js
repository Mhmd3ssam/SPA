import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
    author_name: String,
    author_email: String,
    topic_title: String,
    topic_details: String,
    expected_result: String,
    votes: {
        ups: { type: Number, default: 0 },
        downs: { type: Number, default: 0 },
    },
    target_level: { type: String, default: 'beginner' },
    status: { type: String, default: 'new' },
    video_ref: {
        link: { type: String, default: '' },
        date: { type: String, default: '' },
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const videoRequests = mongoose.model('videoSchema', videoSchema);

export default videoRequests;