import { NextResponse } from "next/server";
import supabase from "@/lib/supabase";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const title = formData.get("title");
    const content = formData.get("content");
    const caption = formData.get("caption");

    const titleImage = formData.get("titleImage");
    const inlineImage = formData.get("inlineImage");

    let titleImageUrl = null;
    let inlineImageUrl = null;

    let titleImagePublicId = null;
    let inlineImagePublicId = null;

    // upload title image
    if (titleImage && titleImage.size > 0) {
      const bytes = await titleImage.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const upload = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "case-studies" }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          })
          .end(buffer);
      });

      titleImageUrl = upload.secure_url;
      titleImagePublicId = upload.public_id;
    }

    // upload inline image
    if (inlineImage && inlineImage.size > 0) {
      const bytes = await inlineImage.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const upload = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "case-studies" }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          })
          .end(buffer);
      });

      inlineImageUrl = upload.secure_url;
      inlineImagePublicId = upload.public_id;
    }

    const { error } = await supabase.from("case_studies").insert([
      {
        title,
        content,
        title_image: titleImageUrl,
        inline_image: inlineImageUrl,
        image_caption: caption,
        title_image_public_id: titleImagePublicId,
        inline_image_public_id: inlineImagePublicId,
      },
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CASE STUDY API ERROR:", err);

    return NextResponse.json(
      { error: "Server error while adding case study" },
      { status: 500 },
    );
  }
}
