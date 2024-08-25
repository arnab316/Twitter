import express from 'express'
import {connect} from './config/database.js'
const app = express()
const port = 4015
import TweetService  from './services/tweet-services.js'
app.listen(port, async() => {
    console.log(`listening on ${port}`);
    await connect().then(() => console.log('mongo db connect'))
    .catch(() => console.log(' cant connect database'));

    // let service = new TweetService();
    // const tweet = await service.create({
    //     content: 'This is a #Brand second tweet  awasome #exited #Python'
    // });
    // console.log(tweet);
    let service = new TweetService()
    await service.create({content: 'Done with #refactor ?'})
})


