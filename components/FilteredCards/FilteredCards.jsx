"use client";
import React from "react";
import ResumeCard from "../ResumeCard/ResumeCard";
import { useTheme } from "@/context/ThemeProvider";

const FilteredCards = ({ resumes, userId }) => {
  const { nationality, job } = useTheme();
  const FilteredResumes = resumes?.filter((resume) => {
    const matchesNationality = nationality
      ? resume.nationality === nationality
      : false;
    const matchesJob = job ? resume.job === job : false;
    const matchesJobAndNationality =
      job && nationality
        ? resume.job && resume.nationality === job && nationality
        : false;
    if (matchesJobAndNationality) {
      return matchesJobAndNationality;
    } else if (matchesNationality || matchesJob) {
      return matchesNationality || matchesJob;
    } else {
      return false;
    }
  });
  return (
    <>
      {!nationality && !job ? (
        <div className="flex justify-center w-full">
          <div className="flex justify-center items-center gap-5 flex-wrap mt-10 mb-10 w-[80%]">
            <p className="font-bold text-3xl">لا يوجد نتائج</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-full">
          <div className="flex justify-center items-center gap-5 flex-wrap mt-10 mb-10 w-[80%]">
            {FilteredResumes?.map((resume, i) => (
              <div key={i}>
                <ResumeCard resume={resume} userId={userId} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FilteredCards;
