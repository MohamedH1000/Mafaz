"use client";
import Link from "next/link";
import React from "react";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocaleLang = () => {
  return (
    <div className="border-b-2 border-gray-200 flex justify-around flex-wrap p-3 items-center pb-4 max-md:flex-col-reverse">
      <div
        style={{ color: "rgb(3, 78, 162)" }}
        className="flex justify-center gap-5 flex-wrap"
      >
        <div>
          <MailIcon /> &nbsp;&nbsp;Mafazz.2024@gmail.com
        </div>
        <div>
          <PhoneIcon /> &nbsp;&nbsp;00966559100579
        </div>

        <div className="flex justify-center items-center">
          المملكة العربية السعودية - الرياض &nbsp;&nbsp;
          <LocationOnIcon />
        </div>
      </div>
      <div
        style={{ color: "rgb(3, 78, 162)" }}
        className="flex justify-center gap-5 max-md:mb-5"
      >
        <Link href={"https://x.com/mafaz5rec?s=21"} target="_blank">
          <XIcon />
        </Link>
        <Link
          href={"https://www.instagram.com/mafaz_rec?igsh=MXdtMm12dzhmNGY5cA=="}
          target="_blank"
        >
          <InstagramIcon />
        </Link>
        <Link
          href={"https://maps.app.goo.gl/i1nhfFEJwasL3avcA?g_st=ic"}
          target="_blank"
        >
          <MyLocationIcon />
        </Link>
      </div>
    </div>
  );
};

export default LocaleLang;
