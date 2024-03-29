interface Props{
   image:string ,
   title:string ,
   description: string 
}

function AdCard(props:Props) {
    const {image , title = "Advertisment title" , description} = props
  return (
    <div className="w-[239px] overflow-hidden h-[511px] dark:bg-[#3B3E47] shadow-lg  shadow-slate-300 dark:shadow-black/75 p-2 hover:scale-110">
        <div className="relative">
        <img src={image}  className=" h-[218px] w-[222px] " alt="" />
        <p className="absolute top-0 right-0 text-sm bg-black text-white font-bold px-2">AD</p>
        </div>
        <div className="flex flex-col justify-center item-center border-2 border-gray-400 dark:border-green-800  ">
            <h4 className="font-bold ">{title}</h4>
            <p className="font-sans text-sm tracking-tighter  text-gray-700 dark:text-gray-300">{description}</p>
        </div>
    </div>
  )
}

export default AdCard