const express = require('express')
const connect =require('./config/database')
const app = express()
const Tweet = require('./models/tweet')
const port = 4015
const TweetRepository = require('./repository/tweet-repository')
const Comment = require('./models/comments')

app.listen(port, async() => {
    console.log(`listening on ${port}`);
    await connect().then(() => console.log('mongo db connect'))

    // const tweet = await Tweet.create({
    //     content:'fourth  tweet',
    //     userEmail: 'four@example.com' 
    // })
    // const tweet = await Tweet.find()
    // console.log(tweet)
    const tweetRepo =  new TweetRepository()
    const tweet = await tweetRepo.getwithComments('66c1b46f278387975e4116da');
    console.log(tweet);
})


