import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    author_name: String,
    author_email:String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Users = mongoose.model('userSchema',userSchema);

export default Users;