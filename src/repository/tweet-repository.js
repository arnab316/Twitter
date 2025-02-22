import Tweet from '../models/tweet.js';
import CurdRepository from './curd-repository.js';
class TweetRepository extends CurdRepository{
        constructor(){
            super(Tweet);
        }

    async create(data){

       try{
        const tweet = await Tweet.create(data);
        return tweet;
       }catch(error){
        console.error(error);
       }
    }


    async getwithComments(id){
        try{
        const tweet = await Tweet.findById(id).populate({path: 'comments'}).lean();;
        return tweet;
           }catch(error){
            console.log(error)
           }
    }

    async update(tweetId, data){
        try{
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data, {new: true});
            return tweet;
           }catch(error){
            console.error(error);
           }
    }
    
    async getAll(offset, limit){
        try{
            const tweets = await Tweet.find().skip(offset).limit(limit);
            return tweets;
           }catch(error){
            console.error(error);
           }
    }
    async find(id){
        try{
            const tweet = await Tweet.findById(id).populate({path: 'likes'});
            return tweet;
           }catch(error){
            console.error(error);
           }
    }
}

export default TweetRepository;