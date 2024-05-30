"use server";
import Resume from "@/database/resume.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
export const maxDuration = 20;

export async function getResumes(params) {
  try {
    connectToDatabase();
    const { page = 1, pageSize = 9 } = params;

    const skipAmount = (page - 1) * pageSize;
    const resume = await Resume.find({})
      .skip(skipAmount)
      .limit(pageSize)
      .sort({ createdAt: -1 });
    return resume;
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/");
}
export async function getAllResumes() {
  try {
    connectToDatabase();

    const resume = await Resume.find({});
    return resume;
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/");
}
export async function createResume(params) {
  try {
    connectToDatabase();

    const { nationality, job, selectedFile } = params;
    const resume = await Resume.create({
      nationality,
      job,
      selectedFile,
    });
    const plainResume = JSON.stringify(resume);
    revalidatePath("/");
    return plainResume;
  } catch (error) {
    console.log(error);
  }
}
export async function EditResume(params) {
  try {
    connectToDatabase();

    const { productId, formData } = params;
    const resume = await Resume.findByIdAndUpdate(productId, formData, {
      new: true,
    });
    const plainResume = JSON.stringify(resume);
    revalidatePath("/");
    return plainResume;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteResume(params) {
  try {
    connectToDatabase();

    const { productId, path } = params;
    const resume = await Resume.findByIdAndDelete({ _id: productId });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
