import CurdRepository from './curd-repository.js';
import Comment from '../models/comments.js';
class CommentRepository extends CurdRepository {
      constructor(){
        super(Comment);
      }

}

export default CommentRepository;