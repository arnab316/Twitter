import {UserRepostory} from '../repository/index.js';
class UserService{
  constructor(){
    this.userRepository = new UserRepostory();
  }

  async singup(data){
    try {
        const user = await this.userRepository.create(data);
    return user;
    } catch (error) {
        throw error;
    }
  }

  async getUserByEmail(email){
    try {
      const user = await this.userRepository.findBy({email})
      return user;
    } catch (error) {
       throw error;
    }
  }

  async singin(data){
    try {
      const user = await this.getUserByEmail(data.email)
        if(!user) {
            throw {message: "User not found"}
        }
        if(!user.comparePassword(data.password)) {
           throw {message: "Invalid credentials"}
        }
        const token = user.genJwt()
        return token;
    } catch (error) {
      throw error;
    }
  }
}


export default UserService;