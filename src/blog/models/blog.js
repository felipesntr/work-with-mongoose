const mongoose =  require('mongoose');

const { Schema } = mongoose;

const BlogSchema = new Schema({
    title: String,
    author: String, 
    body: String,
    comments: [ { body: String, date: Date }],
    date: { type: Date, default: Date.noew },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;