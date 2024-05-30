import React from "react";
import { auth } from "@clerk/nextjs/server";

import { getAllResumes, getResumes } from "@/lib/action/resume.action";
import AddFormButton from "@/components/AddFormButton/AddFormButton";
import Filters from "@/components/Filters/Filters";
import ResumeCards from "@/components/ResumeCards/ResumeCards";
import Paginat from "@/components/Paginat/Paginat";
export const maxDuration = 20;

const page = async ({ searchParams }) => {
  const { userId } = auth();
  let resumes;
  try {
    resumes = await getResumes({
      page: searchParams?.page ? +searchParams.page : 1,
    });
  } catch (error) {
    console.error("Error fetching resumes:", error);
    resumes = []; // or handle appropriately
  }

  let allResumes;
  try {
    allResumes = await getAllResumes({});
  } catch (error) {
    console.error("Error fetching all resumes:", error);
    allResumes = []; // or handle appropriately
  }
  const parsedResumes = resumes ? JSON.parse(JSON.stringify(resumes)) : [];
  const parsedAllResumes = allResumes
    ? JSON.parse(JSON.stringify(allResumes))
    : [];
  return (
    <div>
      <AddFormButton userId={userId} />
      <Filters resume={parsedAllResumes} />
      <ResumeCards resumes={parsedResumes} userId={userId} />
      <Paginat resumes={parsedAllResumes} />
    </div>
  );
};

export default page;
