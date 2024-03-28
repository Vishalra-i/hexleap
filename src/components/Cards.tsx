import { Poppins } from "next/font/google";

interface Props{
    name : string ,
    events : number ,
    sports : string ,
    image : string 
};



function Cards(props : Props) {
    const {name , events ,sports , image} = props
  return (
    <div className="w-[239px] h-[511px] shadow-lg shadow-slate-300 p-2 hover:scale-110 "> 
        <img src={image} className="object-cover h-[385px] w-[387px]"  alt="" /> 
        <h2 className="font-normal font-serif px-2  text-lg py-2">{name}</h2>
        <div className="flex justify-between text-sm py-2  font-bold px-2 whitespace-nowrap tracking-wider">
           <div className="flex flex-col w-full gap-2">
              <p className="text-xs text-gray-400 ">Total Events</p>
              <h3 className="text-xs w-full">{events} Events</h3>
           </div>
        <div className="flex justify-between text-sm ">
           <div className="flex flex-col gap-2">
              <p  className="text-xs text-gray-400">Sport</p>
              <h3 className="text-xs w-full">{sports}</h3>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Cards