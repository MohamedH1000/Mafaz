import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const Loading = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center p-10 max-md:px-2">
      <div className="flex flex-col gap-4 border-[2px] border-[#bab8b8] w-[60%]  rounded-lg p-10 max-md:p-3 max-md:w-[90%]">
        <h1 className="text-3xl font-bold text-[blue]">البيانات</h1>
        <div className="flex flex-col gap-10">
          <div className="flex justify-center items-center gap-8 max-md:flex-col">
            <Skeleton className={"w-full h-10"} />
            <Skeleton className={"w-full h-10"} />
          </div>
          <div className="flex justify-center items-center gap-8 max-md:flex-col">
            <Skeleton className={"w-full h-10"} />
            <Skeleton className={"w-full h-10"} />
          </div>
          <div className="flex justify-center items-center gap-8 max-md:flex-col">
            <Skeleton className={"w-full h-10"} />
            <Skeleton className={"w-full h-10"} />
          </div>
          <div className="flex justify-center items-center gap-8 max-md:flex-col">
            <Skeleton className={"w-full h-[100px] rounded-lg"} />
          </div>
          <div className="flex justify-end">
            <Skeleton
              className={
                "flex justify-center items-center gap-8 w-[50%] max-md:w-[100%] h-10"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
