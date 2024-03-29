"use client"
import Image from "next/image";
import Sports from "@/components/Sports";
import Collection from "@/components/Collection";
import { useState } from "react";
import Button from "@/components/Button";

export default function Home() {
  

  const darkMode = () => {
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('dark');
  };

  return (
    <>
      <div className={`bg-[#F7F7F8]  dark:bg-[#292B32] dark:text-white  w-full min-h-screen max-[700px]:px-2 px-10 py-5`}>
         <div className=" px-2 relative py-2 w-full justify-between">
           <Button className="border-red-100 absolute top-[-5]  right-0 " darkMode={darkMode}/>
        </div>
        <Sports />
        <Collection />
      </div>
    </>
  );
}


