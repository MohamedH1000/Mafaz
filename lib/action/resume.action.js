"use server";
import Resume from "@/database/resume.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

export async function getResumes(params) {
  try {
    connectToDatabase();
    const {
      page = 1,
      pageSize = 9,
      jobfilter,
      nationalityfilter,
      contractfilter,
    } = params;
    const query = {};
    if (jobfilter || nationalityfilter || contractfilter) {
      query.$and = [];

      if (jobfilter) {
        query.$and.push({ job: { $regex: new RegExp(jobfilter, "i") } });
      }
      if (nationalityfilter) {
        query.$and.push({
          nationality: { $regex: new RegExp(nationalityfilter, "i") },
        });
      }
      if (contractfilter) {
        query.$and.push({
          contractType: { $regex: new RegExp(contractfilter, "i") },
        });
      }
    }
    const skipAmount = (page - 1) * pageSize;
    const resume = await Resume.find(query.$and ? query : {})
      .skip(skipAmount)
      .limit(pageSize)
      .sort({ createdAt: -1 });
    const totalResumes = await Resume.countDocuments(query.$and ? query : {});
    const isNext = totalResumes > skipAmount + resume.length;
    return { resume, totalResumes, isNext };
  } catch (error) {
    console.log(error);
  }
}
// export async function getAllResumes(params) {
//   try {
//     await connectToDatabase();

//     const { jobfilter, nationalityfilter, contractfilter } = params;
//     const query = {};

//     if (jobfilter || nationalityfilter || contractfilter) {
//       query.$and = [];

//       if (jobfilter) {
//         query.$and.push({ job: { $regex: new RegExp(jobfilter, "i") } });
//       }
//       if (nationalityfilter) {
//         query.$and.push({
//           nationality: { $regex: new RegExp(nationalityfilter, "i") },
//         });
//       }
//       if (contractfilter) {
//         query.$and.push({
//           contractType: { $regex: new RegExp(contractfilter, "i") },
//         });
//       }
//     }

//     const resume = await Resume.find(query.$and ? query : {});
//     return resume;
//     // try {
//     //   connectToDatabase();
//     //   const { jobfilter, nationalityfilter, contractfilter } = params;
//     //   const query = {};
//     //   if (jobfilter || nationalityfilter || contractfilter) {
//     //     if (jobfilter) {
//     //       query.$and = [{ job: { $regex: new RegExp(jobfilter, "i") } }];
//     //     }
//     //     if (nationalityfilter) {
//     //       query.$and = [
//     //         { nationality: { $regex: new RegExp(nationalityfilter, "i") } },
//     //       ];
//     //     }
//     //     if (contractfilter) {
//     //       query.$and = [
//     //         { contractType: { $regex: new RegExp(contractfilter, "i") } },
//     //       ];
//     //     }
//     //   }
//     //   const resume = await Resume.find(query.$and ? query : {});
//     //   return resume;
//   } catch (error) {
//     console.log(error);
//   }
// }
export async function createResume(params) {
  try {
    connectToDatabase();

    const { nationality, job, contractType, selectedFile } = params;
    const resume = await Resume.create({
      nationality,
      job,
      selectedFile,
      contractType,
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
