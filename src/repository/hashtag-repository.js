import Hashtag from '../models/hashtag.js'
class HastagRepository{


    async create(data){

       try{
        const tag = await Hashtag.create(data);
        return tag;
       }catch(error){
        console.error(error);
       }
    }
    async bulkCreate(data){
        try {
            const tag = await Hashtag.insertMany(data);
             return tag;
        } catch (error) {
            console.error(error);
        }
    }

    async get(id){
        try{
            const tag = await Hashtag.findById(id);
            return tag;
           }catch(error){
            console.error(error);
           }
    }
    

    async update(tweetId, data){
        try{
            const tag = await Hashtag.findByIdAndUpdate(tweetId, data, {new: true});
            return tag;
           }catch(error){
            console.error(error);
           }
    }
    async destroy(id){
        try{
            const response = await Hashtag.findByIdAndDelete(id);
            return response;
           }catch(error){
            console.error(error);
           }
    }
    async  findByName(titleList){
        try {
            const tag = await Hashtag.find({
                title: titleList
            })      //.select('title -_id'); //! -_id is remove id
            return tag;
        } catch (error) {
            console.error(error);
        }
    }
    
}

export default HastagRepository;