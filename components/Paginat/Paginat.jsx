"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Paginat = ({ resumes }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const TotalNumber = resumes.length;
  const pageSize = 9;
  useEffect(() => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: page.toString(),
    });
    router.push(newUrl);
  }, [page]);
  return (
    <div className="flex justify-center items-center p-4" dir="ltr">
      <Pagination
        count={Math.ceil(TotalNumber / pageSize)}
        shape="rounded"
        page={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
        color="primary"
      />
      {/* <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination> */}
    </div>
  );
};

export default Paginat;
