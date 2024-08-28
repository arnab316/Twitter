import express from 'express'
import {connect} from './config/database.js'
import bodyParser from 'body-parser'
import apiRoutes from './routes/index.js'
import {UserRepostory, TweetRepository} from './repository/index.js'
import LikeService from './services/like-service.js'
const app = express()
const port = 4015
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', apiRoutes);




app.listen(port, async() => {
    console.log(`listening on ${port}`);
    await connect().then(() => console.log('mongo db connect'))
    .catch(() => console.log(' cant connect database'));
      

    // const userRepository = new UserRepostory();
    // const tweetRepository = new TweetRepository();
    // const tweets = await tweetRepository.getAll(0,10);
    // const users = await userRepository.getAll();
    //  const likeService = new LikeService();
    //  likeService.toggleLike(tweets[0].id, 'Tweet', users[1].id);
})


