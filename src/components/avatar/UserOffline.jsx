import AvatarImage from "./AvatarImage";

const UserOffline = ({img,name}) => {
    return ( 
        <div className="flex items-center gap-3 w-full hover:bg-slate-200 px-3 py-[7px] rounded-[5px] opacity-50 hover:opacity-100">
            <AvatarImage img={img}/>
            <div className="truncate">{name}</div>
        </div>
     );
}
 
export default UserOffline;