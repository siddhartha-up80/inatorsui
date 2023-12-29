import ComponentCode from "@/lib/models/componentcode";
import { connectToDB } from "@/lib/db/database";

export const POST = async (request: any, response: any) => {
  try {
    // console.log(JSON.stringify(request.json()));
    const { name, category, code } = await request.json();

    console.log("Received component", category, name);
    

    await connectToDB();

    const componentdata = new ComponentCode({
      name,
      category,
      code,
    });

    await componentdata.save();
    // Respond with a success message
    return new Response(
      JSON.stringify({ message: "Data received successfully" }, componentdata),
      { status: 200 }
    );
  } catch (error) {
    return new Response("Failed to add component data", {
      status: 500,
    });
  }
};
