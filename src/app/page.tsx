import Image from "next/image";
import Sports from "@/components/Sports";
import Collection from "@/components/Collection";


export default function Home() {
  return (
   <>
     <div className="bg-[#F7F7F8] w-full min-h-screen px-10 py-5 ">
       <Sports/>
       <Collection/>
     </div>
   </>
  );
}
