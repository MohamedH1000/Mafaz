"use client";
import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AddFormButton = ({ userId }) => {
  const { setType, setFormData } = useTheme();

  return (
    <>
      {userId && (
        <div className="flex justify-center items-center mt-6">
          <Link href="/addcv">
            <Button
              className="bg-[#2e2ee3] hover:bg-[#2e2ee3] hover:opacity-80 text-white"
              onClick={() => {
                setFormData({ nationality: "", job: "", selectedFile: "" });
                setType("");
              }}
            >
              قم باضافة سيرة ذاتية
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default AddFormButton;
