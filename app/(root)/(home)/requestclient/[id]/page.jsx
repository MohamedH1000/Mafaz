import RequestForm from "@/components/RequestForm/RequestForm";
import React from "react";

const page = () => {
  return (
    <div
      className="min-h-[80vh] flex justify-center items-center p-10 max-md:px-2"
      dir="rtl"
    >
      <RequestForm />
    </div>
  );
};

export default page;
