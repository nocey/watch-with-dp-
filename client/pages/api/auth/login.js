import connectDB from 'middlewares/dbconnect'
import User from 'models/user';
connectDB;


export default async function handler(req, res) {
   const {email , password} = req.body;

   if(!email || !password ) {
     res.status(400).json({
       succes : false , error : 'Please provide email and password'
     })
   }

   try {
     const user = await User.findOne({ email }).select("+password");//user schema sinda bulur

     if(!user){
       res.status(400).json({succes : false , error : "Invaild credantials"})
     }
     
     const isMatch = await user.matchPasswords(password);

     if(!isMatch){
       res.status(400).json({succes : false , error : "Invaild password"})
     }
   }catch (err) {
     res.status(400).json({succes : false , error : err})
   }
    res.status(200).json({ name: 'John Doe' })
  }