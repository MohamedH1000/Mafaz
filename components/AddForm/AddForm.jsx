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
import Paper from "@mui/material/Paper";
import FileBase64 from "react-file-base64";
import { createResume, EditResume } from "@/lib/action/resume.action";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

import { useTheme } from "@/context/ThemeProvider";

const AddForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formData, setFormData, type, currentId } = useTheme();
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (type === "Edit") {
        await EditResume({ productId: currentId, formData });
        router.push("/");
        toast({
          description: "تم تعديل السيرة الذاتية بنجاح",
          className: "text-[blue] font-bold bg-white",
        });
      } else {
        await createResume(formData);
        router.push("/");
        toast({
          description: "تم اضافة السيرة الذاتية بنجاح",
          className: "text-[blue] font-bold bg-white",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        description: "حدث خطأ , يرجى المحاولة مرة اخرى",
        className: "text-[blue] font-bold bg-white",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const clear = (e) => {
    e.preventDefault();
    setFormData({
      nationality: "",
      job: "",
      contractType: "",
      selectedFile: "",
    });
  };

  const canSave = [
    formData.nationality && formData.job && formData.selectedFile,
  ].every(Boolean);
  return (
    <div className="flex justify-center items-center p-10 w-full max-md:px-3">
      <Paper
        elevation={3}
        className="p-6 max-sm:w-[250px] rounded-md max-md:p-1"
      >
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-3xl text-right font-bold">
            {type === "Edit" ? "عدل السيرة الذاتية" : "اضافة سيرة ذاتية"}
          </h1>
          <div className="flex max-md:flex-col gap-5">
            <Select
              dir="rtl"
              defaultValue={formData.nationality}
              onValueChange={(value) =>
                setFormData({ ...formData, nationality: value })
              }
            >
              <SelectTrigger className="w-[150px] max-md:mx-auto">
                <SelectValue placeholder="الجنسية" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>الجنسية</SelectLabel>
                  <SelectItem value="الفلبين">الفلبين</SelectItem>
                  <SelectItem value="اثيوبيا">اثيوبيا</SelectItem>
                  <SelectItem value="اوغندا">اوغندا</SelectItem>
                  <SelectItem value="سريلانكا">سريلانكا</SelectItem>
                  <SelectItem value="كينيا">كينيا</SelectItem>
                  <SelectItem value="بنجلاديش">بنجلاديش</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              dir="rtl"
              defaultValue={formData.job}
              onValueChange={(value) =>
                setFormData({ ...formData, job: value })
              }
            >
              <SelectTrigger className="w-[150px] max-md:mx-auto">
                <SelectValue placeholder="المهنة" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>المهنة</SelectLabel>
                  <SelectItem value="عاملات منزليات">عاملات منزليات</SelectItem>
                  <SelectItem value="سائقين">سائقين</SelectItem>
                  <SelectItem value="متخصصات في خدمة رعاية كبار السن">
                    متخصصات في خدمة رعاية كبار السن
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              dir="rtl"
              defaultValue={formData.contractType}
              onValueChange={(value) =>
                setFormData({ ...formData, contractType: value })
              }
            >
              <SelectTrigger className="w-[150px] max-md:mx-auto">
                <SelectValue placeholder="نوع العقد" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>نوع العقد</SelectLabel>
                  <SelectItem value="استقدام">استقدام</SelectItem>
                  <SelectItem value="نقل خدمات">نقل خدمات</SelectItem>
                  <SelectItem value="إيجار">إيجار</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="text-right">الرجاء قم برفع صورة السيرة الذاتية</p>
            <FileBase64
              required
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setFormData({ ...formData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className="bg-[#2e2ee3] hover:bg-[#2e2ee3] hover:opacity-80 text-white"
            type="submit"
            disabled={isSubmitting ? true : false || !canSave ? true : false}
          >
            {isSubmitting ? (
              <>{type === "Edit" ? "جاري التعديل" : "برجاء الانتظار"}</>
            ) : (
              <>
                {type === "Edit" ? "عدل السيرة الذاتية" : "اضف السيرة الذاتية"}
              </>
            )}
          </Button>
          <Button
            className="bg-[red] hover:bg-[#e33c3c] hover:opacity-80 text-white"
            onClick={clear}
            disabled={isSubmitting ? true : false}
          >
            اعد كتابة الحقول
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default AddForm;
