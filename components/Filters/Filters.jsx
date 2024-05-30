"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTheme } from "@/context/ThemeProvider";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Filters = ({ resume }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { nationality, setNationality, job, setJob } = useTheme();
  const handleChangeNationality = (e) => {
    setNationality(e.target.value);
  };
  const handleChangeJob = (e) => {
    setJob(e.target.value);
  };

  const handleFilterClick = () => {
    setIsSubmitting(true);
    try {
      router.push("/filteresults");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(true);
    }
  };

  const UniqueResumesJob = [...new Set(resume?.map((res) => res.job))];
  const UniqueResumesNationality = [
    ...new Set(resume?.map((res) => res.nationality)),
  ];
  // console.log("uniques resume jobs", UniqueResumesJob);
  // console.log("uniques resume Nationality", UniqueResumesNationality);
  return (
    <div className="flex justify-center items-center gap-5 mt-10 ">
      <FormControl>
        <InputLabel id="demo-simple-select-label">الجنسية</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="w-[150px] max-sm:w-[70px]"
          value={nationality}
          label="الجنسية"
          onChange={handleChangeNationality}
        >
          {UniqueResumesNationality.map((res, i) => (
            <MenuItem value={res} key={i}>
              {res}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">المهنة</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="w-[150px] max-sm:w-[70px]"
          value={job}
          label="المهنة"
          onChange={handleChangeJob}
        >
          {UniqueResumesJob.map((res, i) => (
            <MenuItem value={res} key={i}>
              {res}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        className={` text-white bg-[#2e2ee3]
         hover:bg-[#2e2ee3] hover:opacity-80 
         w-[70px] h-[50px] max-md:w-[150px] max-sm:w-[70px] ${
           isSubmitting ? "text-[10px]" : "font-bold"
         }`}
        onClick={handleFilterClick}
        disabled={isSubmitting ? true : false}
      >
        {isSubmitting ? "جاري البحث" : "بحث"}
      </Button>
    </div>
  );
};

export default Filters;
