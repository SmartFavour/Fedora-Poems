import { connectDB } from "@/lib/mongodb";
import Poem from "@/models/Poem";

export async function GET() {
  await connectDB();

  const poems = await Poem.find().sort({ createdAt: -1 });

  return Response.json(poems);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();
  const poem = await Poem.create(body);

  return Response.json(Poem);
}
