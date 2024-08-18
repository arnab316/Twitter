const mongoose = require('mongoose');

const twitterSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail:{
        type: String
    }, 
    comments: [
        {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Comment'
        }
    ]
}, {timestamps: true})

const Tweet = mongoose.model('Tweet', twitterSchema)
module.exports = Tweet;