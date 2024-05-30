import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
// import { auth } from "@clerk/nextjs/server";

// import { Button } from "@/components/ui/button";
import LocaleLang from "../LocalLang/LocalLang";
const Navbar = () => {
  // const { userId } = auth();

  return (
    <div className="flex flex-col">
      <div className="max-md:hidden">
        <LocaleLang />
      </div>
      <div className="flex justify-center p-3 border-b-2 border-blue-400 items-center">
        <div className="flex flex-col justify-center items-center">
          <Link href={"/"} className="cursor max-md:mb-5">
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              width={250}
              height={80}
            />
          </Link>
          <div className="flex justify-center items-center md:hidden">
            المملكة العربية السعودية - الرياض، حي الملك فهد &nbsp;&nbsp;
            <LocationOnIcon />
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center">
          {/* <Link href={"/"}>
            <Button className="bg-[#2e2ee3] hover:bg-[#2e2ee3] hover:opacity-80">
              الرئيسية
            </Button>
          </Link>
          {!userId && (
            <Link href={"/sign-in"}>
              <Button className="bg-[#2e2ee3] hover:bg-[#2e2ee3] hover:opacity-80">
                لوحة تحكم
              </Button>
            </Link>
          )} */}
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
