'use client'

import React, { useRef } from "react";
import MovingCards from "./MovingCards";
import {  faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




interface CollectionProps {}

const Collection: React.FC<CollectionProps> = () => {
    const ref = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (ref.current) {
            ref.current.scrollLeft -= 100;
        }
    };

    const scrollRight = () => {
        if (ref.current) {
            ref.current.scrollLeft += 100;
        }
    };


    return (
        <div className=" bg-[#F7F7F8] pt-10  dark:bg-gradient-to-t to-[#18282A] from-[#221A2C] my-8">
            <div className="flex justify-center items-center font-semibold flex-col gap-2">
                <h2 className="text-4xl text-center max-[700px]:text-2xl ">Collection Spotlight</h2>
                <p className="text-sm text-center dark:text-gray-400 text-gray-700">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br /> experience. Grab yours today!</p>
            </div>
            <div className="flex justify-between  duration-200 transition-all">
                <button onClick={scrollLeft} className="mx-5  "><FontAwesomeIcon className=" text-blue-400 px-3 py-4 border border-blue-300 font-extrabold " icon={faLessThan} /> </button>
            <div className=" py-12 px-2 overflow-x-hidden" ref={ref} >
                
                <div className="flex gap-10 " >
                   <MovingCards name="Las Vegas Aviators" place="Las Vegas Ballpark, Las Vegas, Nevada" buttonText="Take Flight Collection" image="https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxtMQ-umkbEHlxMyMnstAs6rYbIBMoz6Y6e6X~XvOsr-rAQ2g4qOWln3w~caMGqtbtAtbCjyj-yjVTMTm1mZVFfJBk5KOXa491~GuF-sCId9i622FHtykZ-nY9kpx54GqgSCB2nGFH3HeaHmDDrU0aEinZpFFnqbmnXRqB9agt6U5PFCW70dobn1FS2-uCCVjf-JcgJzpDyt6xoO-4xWk6IWNKkJCo1K7Ad4KoEpKKDiFYyDhsXOKGZrevPj~1tdFMRrtdkTS8ckyL82IMwnzlMMtKVgab1EpeEiBiF-BW88PwJ0towH4BaKyuBx~E-cLgN0lW8hacJNXlAv-u1nFA__"/>
                   <MovingCards name="Las Vegas Aviators" place="Las Vegas Ballpark, Las Vegas, Nevada" buttonText="Orange Collection" image="https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ptz8aSbr1X2gpkQvNp75uy5Qqc3G8thxATUNJrSlH2UpQlPHInbDDZzPDm06nh~Nz5I1JJ4DJV7c8-QhyhII56mMhaJJpXXDp1PCUpSFQ4e8Ye14EdQY91xENMHr1f0JdG2SSkVcxAMgzFhchgpPmcJgVvZX42PQo9HDwrB-Mu9YzL8HDg5lqq592kuVfpcoCk2mmirfFLs7nHYKlxKizeHFC38nNStqJTHYUJHGziz0RNo2oRTX9lYT5MCG0g7fSSu968zB9IjW7Xu5z337Wt3fLdxiQu12YbUec3D-iYVeMH-6xRitiF8XgVwKniDwWIEs6yrvu122pOCHDB~P6g__"/>
                   <MovingCards name="Las Vegas Aviators" place="Las Vegas Ballpark, Las Vegas, Nevada" buttonText="Take Flight Collection" image="https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxtMQ-umkbEHlxMyMnstAs6rYbIBMoz6Y6e6X~XvOsr-rAQ2g4qOWln3w~caMGqtbtAtbCjyj-yjVTMTm1mZVFfJBk5KOXa491~GuF-sCId9i622FHtykZ-nY9kpx54GqgSCB2nGFH3HeaHmDDrU0aEinZpFFnqbmnXRqB9agt6U5PFCW70dobn1FS2-uCCVjf-JcgJzpDyt6xoO-4xWk6IWNKkJCo1K7Ad4KoEpKKDiFYyDhsXOKGZrevPj~1tdFMRrtdkTS8ckyL82IMwnzlMMtKVgab1EpeEiBiF-BW88PwJ0towH4BaKyuBx~E-cLgN0lW8hacJNXlAv-u1nFA__"/>
                </div>
               
                
            </div>
                <button onClick={scrollRight} className="mx-5">  <FontAwesomeIcon className=" text-blue-400 px-3 py-4 border border-blue-300 font-extrabold " icon={faGreaterThan} /> </button>
            </div>
        </div>
    );
};

export default Collection;
