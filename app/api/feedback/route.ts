import Feedback from "@/lib/models/feedback";
import { connectToDB } from "@/lib/db/database";

export const POST = async (request: any) => {
  const { name, email, category, message } = await request.json();

  try {
    await connectToDB();
    const feedback = new Feedback({ name, email, category, message });

    await feedback.save();
    return new Response(JSON.stringify(feedback), { status: 201 });
  } catch (error) {
    return new Response("Failed to add contact", { status: 500 });
  }
};
