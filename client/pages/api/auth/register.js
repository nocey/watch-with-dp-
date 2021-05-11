import User from "models/user";
import connectDB from 'middlewares/dbconnect'

connectDB;


export default async function register(req, res) {
  const {username , email , password} = req.body;
  try {
    const user = await User.create({
      username, password , email 
    })
    res.status(200).json({ succes : true , user })
  }catch(err){
    res.status(500).json({ succes : false , error : err})
  } 
} 