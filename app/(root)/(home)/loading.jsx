import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@mui/material";
import React from "react";

const Loading = async () => {
  return (
    <>
      <div className="flex justify-center items-center gap-5 mt-10 ">
        <Skeleton className="w-[150px] max-sm:w-[70px] h-[40px]" />
        <Skeleton className="w-[150px] max-sm:w-[70px] h-[40px]" />
        <Skeleton className="w-[150px] max-sm:w-[70px] h-[40px]" />
        <Skeleton className="w-[70px] h-[40px] max-md:w-[150px] max-sm:w-[70px]" />
      </div>
      <div className="flex justify-center mt-20 flex-wrap gap-10 mb-20">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Card className="w-[300px] rounded-md p-2" key={item}>
            <Skeleton animation="wave" width="100%" className="h-[300px]" />
            <div className="flex justify-around items-center w-full gap-3 mt-3 mb-1">
              <Skeleton
                animation="wave"
                className="h-[40px] flex justify-center items-center w-[70px]"
              />
              <Skeleton
                animation="wave"
                className="h-[40px] flex justify-center items-center w-[70px]"
              />
            </div>
          </Card>
        ))}
        <Card className="w-[300px] rounded-md p-2">
          <Skeleton animation="wave" width="100%" className="h-[300px]" />
          <div className="flex justify-around items-center w-full gap-3 mt-3 mb-1">
            <Skeleton
              animation="wave"
              className="h-[40px] flex justify-center items-center w-[70px]"
            />
            <Skeleton
              animation="wave"
              className="h-[40px] flex justify-center items-center w-[70px]"
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Loading;
