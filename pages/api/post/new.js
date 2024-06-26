import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body.title || !req.body.content) {
      return res.status(500).json({ message: "제목과 내용을 입력해주세요." });
    }

    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(req.body);
      return res.redirect(302, "/list");
    } catch (e) {
      console.log(e);
    }
  }
}
