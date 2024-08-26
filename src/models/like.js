import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
      onModel:{
         type: String,
         required: true,
         enum: ['Tweet', 'Comment'] 
      },
      likeable:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refpath: 'onModel',
      },
      user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      }
}, {timstamps: true})

const Like = new  mongoose.model('Like', likeSchema)

export default Like;