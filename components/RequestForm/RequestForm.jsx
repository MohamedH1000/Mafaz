"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const RequestForm = ({ id }) => {
  const [requestData, setRequestData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    accomType: "",
    noFamily: "",
    notes: "",
  });
  console.log(requestData);

  const handleRequest = () => {
    const url =
      "https://wa.me/+966554311658" +
      "?text=" +
      "تم تعبئة البيانات التالية من خلال رابط اختيار العاملة المنزلية" +
      "%0a" +
      "الاسم :" +
      requestData.name +
      "%0a" +
      "الرقم :" +
      requestData.phone +
      "%0a" +
      "الايميل :" +
      requestData.email +
      "%0a" +
      "مدينة العميل :" +
      requestData.city +
      "%0a" +
      "نوع السكن :" +
      requestData.accomType +
      "%0a" +
      "عدد افراد العائلة :" +
      requestData.noFamily +
      "%0a" +
      "ملاحظات:" +
      requestData.notes +
      "%0a" +
      `هذا رابط الموظف المطلوب : https://mafaz.vercel.app/client/${id}`;

    window.open(url, "_blank").focus();
  };
  return (
    <form
      action=""
      className="flex flex-col gap-4 border-[2px] border-[#bab8b8] w-[60%]  rounded-lg p-10 max-md:p-3 max-md:w-[90%]"
    >
      <h1 className="text-3xl font-bold text-[blue]">البيانات</h1>
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center gap-8 max-md:flex-col">
          <Input
            placeholder="الاسم"
            className="w-full"
            value={requestData.name}
            onChange={(e) =>
              setRequestData({ ...requestData, name: e.target.value })
            }
          />
          <Input
            placeholder="رقم الجوال"
            className="w-full"
            value={requestData.phone}
            onChange={(e) =>
              setRequestData({ ...requestData, phone: e.target.value })
            }
          />
        </div>
        <div className="flex justify-center items-center gap-8 max-md:flex-col">
          <Input
            placeholder="البريد الالكتروني"
            className="w-full"
            value={requestData.email}
            onChange={(e) =>
              setRequestData({ ...requestData, email: e.target.value })
            }
          />
          <Input
            placeholder="مدينة العميل"
            className="w-full"
            value={requestData.city}
            onChange={(e) =>
              setRequestData({ ...requestData, city: e.target.value })
            }
          />
        </div>
        <div className="flex justify-center items-center gap-8 max-md:flex-col">
          <Select
            dir="rtl"
            onValueChange={(value) =>
              setRequestData({
                ...requestData,
                accomType: value,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="نوع السكن" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>نوع السكن</SelectLabel>
                <SelectItem value="شقة">شقة</SelectItem>
                <SelectItem value="فيلا">فيلا</SelectItem>
                <SelectItem value="دور">دور</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            placeholder="عدد افراد الاسرة"
            className="w-full"
            value={requestData.noFamily}
            onChange={(e) =>
              setRequestData({ ...requestData, noFamily: e.target.value })
            }
          />
        </div>
        <div className="flex justify-center items-center gap-8 max-md:flex-col">
          <textarea
            className="w-full focus:outline-none border-2 border-gray-300 p-4 rounded-lg "
            placeholder="ملاحظات"
            value={requestData.notes}
            onChange={(e) =>
              setRequestData({ ...requestData, notes: e.target.value })
            }
          />
        </div>
        <div className="flex justify-end ">
          <Button
            className="flex justify-center items-center gap-8 w-[50%] max-md:w-[100%] bg-[#2e2ee3] hover:bg-[#2e2ee3] hover:opacity-80 text-white"
            onClick={handleRequest}
          >
            ارسال طلبك
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RequestForm;
