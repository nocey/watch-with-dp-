const mongoose = require('mongoose')

const connection = {

}

/**
 * Database Connection 
 *
 * @console {number} if log has 1 you are connected the database .
 */
 export default async function connectDB () {
  if (connection.isConnected == 1) {
    return ;
  }
  await mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true
  });

  connection.isConnected = mongoose.connections[0].readyState;
  console.log(connection)
}
