const UserOffline = ({img,name}) => {
    if (!img) {
        img = "https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-anh-meo-bua-buon-cuoi-nhat-12-09-57-09.jpg"
    }
    return ( 
        <div className="flex items-center gap-3 w-full hover:bg-slate-200 px-3 py-[7px] rounded-[5px] opacity-50 hover:opacity-100">
            <div className="relative">
                <div className="size-10 rounded-full overflow-hidden content-center text-center">
                    <img className="object-cover  min-h-full min-w-full" src={img} alt="" />
                </div>
            </div>
            <div className="truncate">{name}</div>
        </div>
     );
}
 
export default UserOffline;