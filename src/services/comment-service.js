import {TweetRepository, CommentRepository} from '../repository/index.js';



class CommentService  {
    constructor(){
        this.commentRepo = new CommentRepository();
        this.tweetRepo = new TweetRepository();
    }
    async create(modelId, modelType, userId,content ){
//    console.log( 'modelId', modelId,'modelType', modelType, 'userId',userId, 'content', content );
        if(modelType == 'Tweet') {
            var commentable = await this.tweetRepository.get(modelId);
           } else if(modelType == 'Comment'){
               // TODO
               var commentable = await this.commentRepo.get(modelId);
           } else{
               throw new Error('Invalid model type');
           }

           if (!commentable) {
            throw new Error(`No ${modelType.toLowerCase()} found with the provided ID`);
        }
        if (!userId) {
            throw new Error('User ID is required');
        }
        const comment = await this.commentRepo.create({
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: []
        });
        console.log(comment);
        commentable.comments.push(comment);
        await commentable.save();
        return comment;
    }
}


export default CommentService;