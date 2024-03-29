import React from "react";

interface Props {
    name: string;
    place: string;
    buttonText: string;
    image: string;
}

function MovingCards(props: Props) {
    const { name, place, buttonText, image } = props;

    return (
        <div className="relative dark:bg-gray-700 dark:text-white" >
            <div className="max-[700px]:max-w-[210px] w-[257px] h-[625px]  box-border flex justify-center items-center flex-col border border-gray-200   shadow-md dark:shadow-black/75 dark:border-0 shadow-slate-300 ">
                <img src={image} className="w-[226px] max-[700px]:max-w-[180px] h-[415px] py-5" alt={name} />
                <div className="  text-center px-2  flex justify-center items-center gap-4 border-0 border-t-2 rounded-4xl border-t-gray-400 border-dashed my-2 py-3 flex-col ">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="text-base text-light ">OCT 15 | SUN | 4:30 PM</p>
                    <p className="text-sm text-gray-400">{place}</p>
                    <button className="bg-black w-[213px] max-[700px]:max-w-[170px] box-border text-white px-2 py-1 ">{buttonText}</button>
                </div>
            </div>
            <div className="absolute rounded-full bottom-[193px] left-0">
                <div className="w-5 h-5 rounded-full -mt-2 border border-r-gray-300 border-l-0 dark:bg-[#221A2C] dark:border-none bg-[#f3f3f7] -ml-2"></div>
            </div>
            <div className="absolute rounded-full bottom-[193px] z-20 right-0">
                <div className="w-5 h-5 border border-l-gray-300 border-r-0  dark:bg-[#221A2C] dark:border-0 rounded-full bg-[#f3f3f7] -mt-2 -mr-2"></div>
            </div>
        </div>
    );
}

export default MovingCards;
