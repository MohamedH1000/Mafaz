import React from "react";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <div className="min-h-[300px] border-t-2 border-blue-400  flex flex-col justify-between">
      <div className="flex justify-evenly items-center max-md:flex-col mt-10 mb-10 p-5">
        <div className="flex justify-center items-start flex-col gap-5 w-[400px] max-md:w-[250px] max-md:mb-10">
          <h1 className="font-bold text-3xl text-[blue]">
            شركة مفاز لخدمات استقدام العمالة المنزلية نساعدك على اختيار افضل
            الكوادر ذات كفاءة عالية
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-center gap-2">
            <p>المملكة العربية السعودية - الرياض، حي الملك فهد </p>
            <LocationOnIcon />
          </div>
          <div className="flex justify-center gap-2">
            <p>cs.manager@mafaz.sa</p>
            <MailIcon />
          </div>
          <div className="flex justify-center gap-2">
            <p>920020037</p>
            <PhoneIcon />
          </div>
          <div className="flex justify-center gap-2"></div>
          <div className="flex justify-center gap-2"></div>
        </div>
        <div className="mb-10">
          <h1 className="font-bold text-xl text-[blue]">كن على تواصل معنا</h1>
          <div className="flex justify-center items-center gap-2">
            <Link href={"https://x.com/mafaz5rec?s=21"} target="_blank">
              <div className="bg-[#afafd3] h-[50px] w-[50px] mt-5 rounded-md flex justify-center items-center cursor-pointer">
                <XIcon color="primary" />
              </div>
            </Link>
            <Link
              href={
                "https://www.instagram.com/mafaz_rec?igsh=MXdtMm12dzhmNGY5cA=="
              }
              target="_blank"
            >
              <div className="bg-[#afafd3] h-[50px] w-[50px] mt-5 rounded-md flex justify-center items-center cursor-pointer">
                <InstagramIcon color="primary" />
              </div>
            </Link>
            <Link
              href={"https://maps.app.goo.gl/i1nhfFEJwasL3avcA?g_st=ic"}
              target="_blank"
            >
              <div className="bg-[#afafd3] h-[50px] w-[50px] mt-5 rounded-md flex justify-center items-center cursor-pointer">
                <MyLocationIcon color="primary" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[50px] border-t-2 border-gray-500 p-5"></div>
    </div>
  );
};

export default Footer;
