const express = require('express')
const connect =require('./config/database')
const app = express()
const port = 4015
const {TweetRepository} = require('./repository')
const TweetService = require('./services/tweet-services')

app.listen(port, async() => {
    console.log(`listening on ${port}`);
    await connect().then(() => console.log('mongo db connect'))
    .catch(() => console.log(' cant connect database'));

    let service = new TweetService();
    const tweet = await service.create({
        content: 'This is a #Brand second tweet  awasome #exited #Python'
    });
    console.log(tweet);
})


