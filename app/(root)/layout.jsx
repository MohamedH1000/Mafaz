import Navbar from "@/components/NavBar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import Footer from "@/components/Footer/Footer";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <main className="relative">
      <Navbar />
      <Link href={"https://wa.me/+966554311658"} target="_blank">
        <div className="fixed bottom-20 left-10 z-50">
          {" "}
          <Fab color="primary" aria-label="add">
            <WhatsAppIcon />
          </Fab>
        </div>
      </Link>
      {children}
      <Footer />
      <Toaster />
    </main>
  );
};

export default Layout;
