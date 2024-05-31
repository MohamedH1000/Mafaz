"use client";
import { Card, CardActions, CardMedia } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useToast } from "../ui/use-toast";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTheme } from "@/context/ThemeProvider";

const SingleResume = ({ singleResume, userId }) => {
  const { toast } = useToast();
  const router = useRouter();
  const path = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setFormData, setType, setCurrentId } = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setOpen(false);
    try {
      await deleteResume({ productId: resume._id, path: path });
      toast({
        description: "تم حذف السيرة الذاتية بنجاح",
        className: "text-[blue] font-bold bg-white",
      });
    } catch (error) {
      console.log(error);
      toast({
        description: "حصل خطا اثناء الحذف",
        className: "text-[blue] font-bold bg-white",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();

    try {
      setFormData({
        nationality: resume?.nationality,
        job: resume?.job,
        contractType: resume?.contractType,
        selectedFile: resume?.selectedFile,
      });
      setType("Edit");
      setCurrentId(resume._id);
      router.push("/addcv");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center my-10">
      <Card className="w-[300px] rounded-md p-2 relative">
        <CardMedia
          component="img"
          height="130"
          image={singleResume.selectedFile}
          alt="Resume Image"
        />
        {userId && (
          <MoreVertIcon
            className="absolute top-4 right-2 cursor-pointer text-[blue]"
            onClick={handleEdit}
          />
        )}

        <CardActions>
          <div className="flex flex-col w-full items-center">
            <div className="flex justify-center items-center w-full gap-3">
              <Link href={"https://wa.me/+966559100579"} target="_blank">
                <Button className="flex justify-center items-center bg-[#2e2ee3] hover:bg-[#2e2ee3] hover:opacity-80 text-white">
                  تواصل واتس اب
                </Button>
              </Link>
            </div>
            {userId && (
              <div className="flex justify-center items-center  gap-3">
                <Button
                  className="bg-[red] hover:opacity-85 hover:bg-[#e83333] mt-3 text-white"
                  onClick={handleClickOpen}
                  disabled={isSubmitting ? true : false}
                >
                  {isSubmitting ? "برجاء الانتظار" : "حذف السيرة الذاتية"}
                </Button>
                <Dialog
                  open={open}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle className="text-right font-bold">
                    {"هل تريد بالتاكيد حذف السيرة الذاتية ؟"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      id="alert-dialog-slide-description"
                      className="text-right"
                    >
                      {
                        "!اذا وافقت على حذف السيرة الذاتية فلا يمكن استرجاعها من قواعد البيانات"
                      }
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleDelete}
                      className="bg-[red] text-[white] font-bold hover:bg-[#b12222] ml-5"
                    >
                      موافق
                    </Button>
                    <Button onClick={handleClose}>غير موافق</Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default SingleResume;
