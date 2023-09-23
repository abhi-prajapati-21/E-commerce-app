import mongoose from "mongoose";

class MongoDBService {

  connectToServer() {
    const mongoDB_Url = process.env.MONGO_DB_URL;
    mongoose
      .connect(mongoDB_Url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("connected with DB"))
      .catch((err) => console.log(err));
  }
}

export default new MongoDBService();
