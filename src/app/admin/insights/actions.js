"use server";

import supabase from "@/lib/supabase";
import cloudinary from "@/lib/cloudinary";

export async function deleteInsight(id) {

  const { data } = await supabase
    .from("insights")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) {
    return { error: "Insight not found" };
  }

  // delete images from cloudinary
  if (data.title_image_public_id) {
    await cloudinary.uploader.destroy(data.title_image_public_id);
  }

  if (data.inline_image_public_id) {
    await cloudinary.uploader.destroy(data.inline_image_public_id);
  }

  // delete database record
  const { error } = await supabase
    .from("insights")
    .delete()
    .eq("id", id);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}