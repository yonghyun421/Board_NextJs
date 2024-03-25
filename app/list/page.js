import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((post) => (
        <div className="list-item" key={post._id}>
          <Link href={"/detail/" + post._id}>
            <h4>{post.title}</h4>
          </Link>
          <DetailLink />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
