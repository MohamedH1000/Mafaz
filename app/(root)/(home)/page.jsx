import React from "react";
import { auth } from "@clerk/nextjs/server";

import { getResumes } from "@/lib/action/resume.action";
import AddFormButton from "@/components/AddFormButton/AddFormButton";
import Filters from "@/components/Filters/Filters";
import ResumeCards from "@/components/ResumeCards/ResumeCards";
import Paginat from "@/components/Paginat/Paginat";

const page = async ({ searchParams }) => {
  const { userId } = auth();
  let resumes;
  try {
    resumes = await getResumes({
      page: searchParams?.page ? +searchParams.page : 1,
    });
  } catch (error) {
    console.error("Error fetching resumes:", error);
    resumes = [];
  }

  const parsedResumes = resumes
    ? JSON.parse(JSON.stringify(resumes.resume))
    : [];
  return (
    <div>
      <AddFormButton userId={userId} />
      <Filters resume={parsedResumes} />
      <ResumeCards resumes={parsedResumes} userId={userId} />
      <Paginat
        resumes={parsedResumes}
        isNext={resumes?.isNext}
        totalResumes={resumes?.totalResumes}
      />
    </div>
  );
};

export default page;
