import { Card } from "@mui/material";
import React from "react";
import Skeleton from "@mui/material/Skeleton";

const loading = async () => {
  return (
    <div className="flex justify-center mt-20 flex-wrap gap-10 mb-20">
      <Card className="w-[300px] rounded-md p-2  h-[400px] flex flex-col">
        <Skeleton animation="wave" width="100%" className="h-[350px]" />
        <div className="flex gap-3">
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
        </div>
        <div className="flex justify-center items-center">
          <Skeleton animation="wave" width="50%" className="h-[50px]" />
        </div>
      </Card>
      <Card className="w-[300px] rounded-md p-2  h-[400px] flex flex-col">
        <Skeleton animation="wave" width="100%" className="h-[350px]" />
        <div className="flex gap-3">
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
        </div>
        <div className="flex justify-center items-center">
          <Skeleton animation="wave" width="50%" className="h-[50px]" />
        </div>
      </Card>
      <Card className="w-[300px] rounded-md p-2  h-[400px] flex flex-col">
        <Skeleton animation="wave" width="100%" className="h-[350px]" />
        <div className="flex gap-3">
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
        </div>
        <div className="flex justify-center items-center">
          <Skeleton animation="wave" width="50%" className="h-[50px]" />
        </div>
      </Card>
      <Card className="w-[300px] rounded-md p-2  h-[400px] flex flex-col">
        <Skeleton animation="wave" width="100%" className="h-[350px]" />
        <div className="flex gap-3">
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
        </div>
        <div className="flex justify-center items-center">
          <Skeleton animation="wave" width="50%" className="h-[50px]" />
        </div>
      </Card>
      <Card className="w-[300px] rounded-md p-2  h-[400px] flex flex-col">
        <Skeleton animation="wave" width="100%" className="h-[350px]" />
        <div className="flex gap-3">
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
        </div>
        <div className="flex justify-center items-center">
          <Skeleton animation="wave" width="50%" className="h-[50px]" />
        </div>
      </Card>
      <Card className="w-[300px] rounded-md p-2  h-[400px] flex flex-col">
        <Skeleton animation="wave" width="100%" className="h-[350px]" />
        <div className="flex gap-3">
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
        </div>
        <div className="flex justify-center items-center">
          <Skeleton animation="wave" width="50%" className="h-[50px]" />
        </div>
      </Card>
      <Card className="w-[300px] rounded-md p-2  h-[400px] flex flex-col">
        <Skeleton animation="wave" width="100%" className="h-[350px]" />
        <div className="flex gap-3">
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
        </div>
        <div className="flex justify-center items-center">
          <Skeleton animation="wave" width="50%" className="h-[50px]" />
        </div>
      </Card>
      <Card className="w-[300px] rounded-md p-2  h-[400px] flex flex-col">
        <Skeleton animation="wave" width="100%" className="h-[350px]" />
        <div className="flex gap-3">
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
          <Skeleton animation="wave" width="100%" className="h-[50px]" />
        </div>
        <div className="flex justify-center items-center">
          <Skeleton animation="wave" width="50%" className="h-[50px]" />
        </div>
      </Card>
    </div>
  );
};

export default loading;
