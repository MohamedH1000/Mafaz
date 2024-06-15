"use client";
import React from "react";
import ResumeCard from "../ResumeCard/ResumeCard";

const FilteredCards = ({ resumes, userId }) => {
  return (
    <>
      {resumes.length > 0 ? (
        <div className="flex justify-center w-full">
          <div className="flex justify-center items-center gap-5 flex-wrap mt-10 mb-10 w-[80%]">
            {resumes?.map((resume, i) => (
              <div key={i}>
                <ResumeCard resume={resume} userId={userId} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-full">
          <div className="flex justify-center items-center gap-5 flex-wrap mt-10 mb-10 w-[80%]">
            <p className="font-bold text-3xl">لا يوجد نتائج</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FilteredCards;
