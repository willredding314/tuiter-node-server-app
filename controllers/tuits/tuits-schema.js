import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  image: String, 
  retuits: Number, 
  replies: Number, 
  topic: String, 
  userName: String, 
  time: String
}, {collection: 'tuits'});
export default schema;