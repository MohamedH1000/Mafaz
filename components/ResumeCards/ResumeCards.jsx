"use client";
import React from "react";
import ResumeCard from "../ResumeCard/ResumeCard";

const ResumeCards = ({ resumes, userId }) => {
  return (
    <div className="flex justify-center w-full min-h-[90vh] items-start">
      <div className="flex justify-center items-center gap-5 flex-wrap mt-10 mb-10 w-[80%]">
        {resumes.map((resume, i) => (
          <div key={i}>
            <ResumeCard resume={resume} userId={userId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeCards;
