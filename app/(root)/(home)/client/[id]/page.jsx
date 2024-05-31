import SingleResume from "@/components/SingleResume/SingleResume";
import React from "react";
import { getAllResumes } from "@/lib/action/resume.action";
import { auth } from "@clerk/nextjs/server";

const page = async ({ params }) => {
  const { userId } = auth();
  const { id } = params;
  const resumes = await getAllResumes();

  const singleResume = resumes.find((resume) => resume._id.toString() === id);

  const parsedResume = JSON.parse(JSON.stringify(singleResume));
  return (
    <div>
      <SingleResume singleResume={parsedResume} userId={userId} />
    </div>
  );
};

export default page;
