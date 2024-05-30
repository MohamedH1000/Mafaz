"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
const RequestForm = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-4 border-2 border-[blue] w-[60%]  rounded-lg p-10 max-md:p-3 max-md:w-[90%]"
    >
      <h1 className="text-3xl font-bold text-[blue]">البيانات</h1>
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center gap-8 max-md:flex-col">
          <TextField label="الاسم" variant="outlined" fullWidth />
          <TextField label="رقم الجوال" variant="outlined" fullWidth />
        </div>
        <div className="flex justify-center items-center gap-8 max-md:flex-col">
          <TextField label="البريد الالكتروني" variant="outlined" fullWidth />
          <TextField label="مدينة العميل" variant="outlined" fullWidth />
        </div>
        <div className="flex justify-center items-center gap-8 max-md:flex-col">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">نوع السكن</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // className="w-full"
              fullWidth
              // value={formData.nationality}
              label="نوع السكن"
              // onChange={(e) =>
              //   setFormData({ ...formData, nationality: e.target.value })
              // }
            >
              <MenuItem value={"شقة"} key={"شقة"}>
                شقة
              </MenuItem>
              <MenuItem value={"فيلا"} key={"فيلا"}>
                فيلا
              </MenuItem>
              <MenuItem value={"عدد ادوار المنزل"} key={"عدد ادوار المنزل"}>
                عدد ادوار المنزل
              </MenuItem>
            </Select>
          </FormControl>{" "}
          <TextField label="عدد افراد الاسرة" variant="outlined" fullWidth />
        </div>
        <div className="flex justify-center items-center gap-8 max-md:flex-col">
          <textarea
            className="w-full focus:outline-none border-2 border-gray-300 p-4 rounded-lg "
            placeholder="ملاحظات"
          />
        </div>
        <div className="flex justify-end ">
          <Button className="flex justify-center items-center gap-8 w-[50%] max-md:w-[100%] bg-[#2e2ee3] hover:bg-[#2e2ee3] hover:opacity-80 text-white">
            ارسال طلبك
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RequestForm;
