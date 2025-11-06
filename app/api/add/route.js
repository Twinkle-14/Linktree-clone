import { getData, saveData } from "@/lib/data";

export async function POST(req) {
  const newEntry = await req.json();
  const data = getData();
  data.push(newEntry);
  saveData(data);
  return Response.json({ success: true });
}

export async function GET() {
  const data = getData();
  return Response.json(data);
}
