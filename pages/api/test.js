import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  if (req.method === "GET") {
    return res.status(200).json(result);
  } else if (req.method === "POST") {
    return res.status(200).json("처리완료");
  }
}
