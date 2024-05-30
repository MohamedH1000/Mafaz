import React from "react";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { getAllResumes } from "@/lib/action/resume.action";
import Link from "next/link";
import FilteredCards from "@/components/FilteredCards/FilteredCards";

const page = async () => {
  const { userId } = auth();
  const Allresumes = await getAllResumes();
  const parsedAllResumes = JSON.parse(JSON.stringify(Allresumes));

  return (
    <div className="min-h-[80vh]">
      <div className="flex justify-center items-center">
        <Link href={"/"}>
          <Button className="mt-10 bg-blue-600 text-white">العودة</Button>
        </Link>
      </div>
      <FilteredCards resumes={parsedAllResumes} userId={userId} />
    </div>
  );
};

export default page;
