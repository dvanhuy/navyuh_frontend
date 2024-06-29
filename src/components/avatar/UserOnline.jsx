import AvatarImage from "./AvatarImage";

const UserOnline = ({img,name}) => {
    return ( 
        <div className="flex items-center gap-3 w-full hover:bg-slate-200 px-3 py-[7px] rounded-[5px]">
            <div className='relative'>
                <AvatarImage img={img}/>
                <div className="absolute bottom-[-3px] right-[-3px] p-[2px] bg-white rounded-full">
                    <div className="rounded-full size-3 z-10 bg-[#23a55a]"></div>
                </div>
            </div>
            <div className="truncate">{name}</div>
        </div>
     );
}
 
export default UserOnline;