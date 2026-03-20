import supabase from "@/lib/supabase";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const role = formData.get("role");
    const shortDesc = formData.get("shortDesc");
    const location = formData.get("location");
    const jobType = formData.get("jobType");

    const descriptions = JSON.parse(formData.get("descriptions") || "[]");
    const requirements = JSON.parse(formData.get("requirements") || "[]");

    // ------------------------
    // VALIDATION
    // ------------------------

    const validTypes = ["Remote", "Work From Office", "Hybrid"];

    if (!validTypes.includes(jobType)) {
      return Response.json({ error: "Invalid job type" }, { status: 400 });
    }

    if (!role || role.trim() === "") {
      return Response.json({ error: "Role is required" }, { status: 400 });
    }

    if (role.length > 80) {
      return Response.json(
        { error: "Role must be less than 80 characters" },
        { status: 400 },
      );
    }

    if (!shortDesc || shortDesc.trim() === "") {
      return Response.json(
        { error: "Short description is required" },
        { status: 400 },
      );
    }

    if (!location || location.trim() === "") {
      return Response.json({ error: "Location is required" }, { status: 400 });
    }

    if (!jobType) {
      return Response.json({ error: "Job type is required" }, { status: 400 });
    }

    // ------------------------
    // CLEAN DATA
    // ------------------------

    const cleanDescriptions = descriptions.filter((d) => d && d.trim() !== "");

    const cleanRequirements = requirements.filter((r) => r && r.trim() !== "");

    // ------------------------
    // INSERT INTO DB
    // ------------------------

    const { data, error } = await supabase
      .from("careers")
      .insert([
        {
          role: role.trim(),
          short_desc: shortDesc.trim(),
          location: location.trim(),
          job_type: jobType,
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
