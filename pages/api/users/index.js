import connectDB from '../../../middleware/mongodb';
import bcrypt from '../../../middleware/bcrypt';
import User from '../../../models/user';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // TODO :e mail olup olmadığı kontrolu yapılacak.
    // TODO :password hash işlemi uygulanacak
    const { name, email, password } = req.body;
    if (name && email && password) {
        try {
          var user = new User({
            name,
            email,
            password: password,
          });
          // yeni user oluşturduk.
          var usercreated = await user.save();
          return res.status(200).send(usercreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data gönderimi tamamlandı.');
      }
  } else {
    res.status(422).send('request motedu desteğı yoktur.');
  }
};

export default connectDB(handler);