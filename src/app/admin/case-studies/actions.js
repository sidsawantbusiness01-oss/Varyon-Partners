"use server";

import supabase from "@/lib/supabase";
import cloudinary from "@/lib/cloudinary";

export async function deleteCaseStudy(id) {
  const { data } = await supabase
    .from("case_studies")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) {
    return { error: "Case study not found" };
  }

  if (data.title_image_public_id) {
    await cloudinary.uploader.destroy(data.title_image_public_id);
  }

  if (data.inline_image_public_id) {
    await cloudinary.uploader.destroy(data.inline_image_public_id);
  }

  const { error } = await supabase.from("case_studies").delete().eq("id", id);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}
