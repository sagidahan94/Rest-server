import mongoose from "mongoose";

// //Set up default mongoose connection
const mongoDB = "mongodb://localhost/my_database";
// const dbConnection = async () => {
//   await mongoose
//     .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(console.log(`mongo db connected`))
//     .catch((error) => {
//       console.log(error);
//     });
// };

// //Get the default connection
// const db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// export default dbConnection;

const connectDB = async () => {
  const conn = await mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`mongo db connected: ${conn.connection.host}`);
};

export default connectDB;
