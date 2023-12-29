import ComponentCode from "@/lib/models/componentcode";
import { connectToDB } from "@/lib/db/database";

export const GET = async (request: any, response: any) => {
  try {
    await connectToDB();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    console.log(category);

    const componentdata = await ComponentCode.find({});

    return new Response(JSON.stringify(componentdata), { status: 200 });
    // return new Response(JSON.stringify("found"), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch components", { status: 500 });
  }
};
