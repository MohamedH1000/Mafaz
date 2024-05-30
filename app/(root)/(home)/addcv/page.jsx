import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import AddForm from "@/components/AddForm/AddForm";

const page = () => {
  const { userId } = auth();
  return (
    <>
      {!userId ? (
        redirect("/")
      ) : (
        <div className="min-h-[90vh]">
          <div className="">
            <AddForm />
          </div>
        </div>
      )}
    </>
  );
};

export default page;
