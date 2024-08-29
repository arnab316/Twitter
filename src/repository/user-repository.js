import User from '../models/user.js';
import CurdRepository from './curd-repository.js';

class UserRepostory extends  CurdRepository {
        constructor(){
            super(User);
        }

   async findBy(data){
      try {
        const response = await User.findOne(data);
        return response;
      } catch (error) {
        console.log(error)
      }
   }

}

export default UserRepostory;