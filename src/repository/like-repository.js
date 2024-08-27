import Like from '../models/like.js';
import CurdRepository from './curd-repository.js';

class LikeRepostory extends  CurdRepository {
        constructor(){
            super(Like);
        }

    async findByUserAndLikeable(data){
        try {
            const like = await Like.findOne(data)
            return like;
        } catch (error) {
            console.log(error);
        }
    }    

}

export default LikeRepostory;