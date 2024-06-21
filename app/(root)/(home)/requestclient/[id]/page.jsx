import RequestForm from "@/components/RequestForm/RequestForm";
import React from "react";
// import Loading from "./loading";

const page = ({ params }) => {
  const { id } = params;
  let isLoading = true;

  // if (isLoading) return <Loading />;
  return (
    <div
      className="min-h-[80vh] flex justify-center items-center p-10 max-md:px-2"
      dir="rtl"
    >
      <RequestForm id={id} />
    </div>
  );
};

export default page;
