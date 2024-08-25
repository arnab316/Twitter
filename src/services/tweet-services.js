
import {TweetRepository, HastagRepository} from '../repository/index.js';
class TweetService{
  constructor(){
    this.tweetRepository = new TweetRepository();
    this.hastagRepository = new HastagRepository();
  }
   async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); // the regex for hashtags
        const tweet = await this.tweetRepository.create(data);
        let  alreadyPresentTags = await this.hastagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map(tag => tag.title)
        let newTags = tags.filter(tag =>!titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
          return {title :tag, tweets : [tweet.id]}
        });
        const response = await this.hastagRepository.bulkCreate(newTags); 
        alreadyPresentTags.forEach((tag) =>{
          tag.tweets.push(tweet.id);
          tag.save();
        })
        return tweet;
    }

}
export default TweetService;