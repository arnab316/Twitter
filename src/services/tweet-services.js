const {TweetRepository} = require('../repository')
class TweetService{
  constructor(){
    this.tweetRepository = new TweetRepository();
  }
   async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g); // the regex for hashtags
        tags = tags.map(tag => tag.substing(1));
        console.log(tag);
        const tweet = await this.tweetRepository.create(data);
        return tweet;
    }

}
module.exports = TweetService;