import supabase from "@/lib/supabase";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const role = formData.get("role");
    const descriptions = JSON.parse(formData.get("descriptions") || "[]");
    const requirements = JSON.parse(formData.get("requirements") || "[]");

    // Validation
    if (!role) {
      return Response.json({ error: "Role is required" }, { status: 400 });
    }

    // Clean empty values
    const cleanDescriptions = descriptions.filter((d) => d.trim() !== "");
    const cleanRequirements = requirements.filter((r) => r.trim() !== "");

    // Insert into Supabase
    const { data, error } = await supabase
      .from("careers")
      .insert([
        {
          role,
          descriptions: cleanDescriptions,
          requirements: cleanRequirements,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase Error:", error);
      return Response.json(
        { error: "Database insert failed" },
        { status: 500 },
      );
    }

    return Response.json(
      { message: "Job created successfully", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Error:", error);

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
