import {LikeRepostory, TweetRepository} from '../repository/index.js';
class LikeService {
 constructor(){
    this.likeRepository = new LikeRepostory();
    this.tweetRepository = new TweetRepository();
   }

   async toggleLike(modelId, modelType, userId) {
     if(modelType == 'Tweet') {
      var likeable = await this.tweetRepository.find(modelId);
     } else if(modelType == 'Comment'){
         // TODO
     } else{
         throw new Error('Invalid model type');
     }
     const exists = await this.likeRepository.findByUserAndLikeable({
          user: userId,
          onModel: modelType,
          likeable: modelId
        })
     if(exists) {
      likeable.likes.pull(exists._id);
      await likeable.save();
      await this.likeRepository.destroy(exists._id);
      var isRemove = true;

     }else{

      const newLike = await this.likeRepository.create({
        user: userId,
        likeable: modelId,
        onModel: modelType
      });
      likeable.likes.push(newLike)
      await likeable.save()
      var isRemove = false;
     }
     return isRemove;
   }
   

}

export default LikeService;