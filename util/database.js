import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://dydgus0421:ZBMW7XcVE9b2RBHS@cluster0.7hat8d3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {};
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
