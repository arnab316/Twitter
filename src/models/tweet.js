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
twitterSchema.virtual('contentWithEmail').get(function process(){  
    //! this is called virtual its non-persistence compiled with runtime
    return `${this.content} - ${this.userEmail}`
})
twitterSchema.pre('save', function(next){
   console.log('Inside a Hook')
   next()
})
const Tweet = mongoose.model('Tweet', twitterSchema)
module.exports = Tweet;