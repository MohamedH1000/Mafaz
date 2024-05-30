import React from "react";
import { auth } from "@clerk/nextjs/server";

import { getAllResumes, getResumes } from "@/lib/action/resume.action";
import AddFormButton from "@/components/AddFormButton/AddFormButton";
import Filters from "@/components/Filters/Filters";
import ResumeCards from "@/components/ResumeCards/ResumeCards";
import Paginat from "@/components/Paginat/Paginat";

const page = async ({ searchParams }) => {
  const { userId } = auth();
  const resumes = await getResumes({
    page: searchParams?.page ? +searchParams.page : 1,
  });
  const Allresumes = await getResumes({});
  const parsedResumes = JSON.parse(JSON.stringify(resumes));
  const parsedAllResumes = JSON.parse(JSON.stringify(Allresumes));
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
