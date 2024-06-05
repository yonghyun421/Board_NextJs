import dayjs from "dayjs";

export default function handler(req, res) {
  const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
  if (req.method === "GET") {
    return res.status(200).json(now);
  }
}
