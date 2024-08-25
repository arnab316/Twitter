import Tweet from '../models/tweet.js';

class TweetRepository{


    async create(data){

       try{
        const tweet = await Tweet.create(data);
        return tweet;
       }catch(error){
        console.error(error);
       }
    }


    async get(id){
        try{
            const tweet = await Tweet.findById(id);
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
    async destroy(id){
        try{
            const tweet = await Tweet.findByIdAndDelete(id);
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
}

export default TweetRepository;