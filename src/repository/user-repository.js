import User from '../models/user.js';
import CurdRepository from './curd-repository.js';

class UserRepostory extends  CurdRepository {
        constructor(){
            super(User);
        }

   

}

export default UserRepostory;