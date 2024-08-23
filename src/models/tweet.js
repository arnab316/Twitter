const mongoose = require('mongoose');

const twitterSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max:[250, 'Tweets cannot be more than 250 characters'],
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]

}, {timestamps: true})

const Tweet = mongoose.model('Tweet', twitterSchema)
module.exports = Tweet;