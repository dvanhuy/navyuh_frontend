import AvatarImage from "../avatar/AvatarImage";

const ServerInfo = () => {
    let img = "https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-anh-meo-bua-buon-cuoi-nhat-12-09-57-09.jpg"
    return ( 
        <div>
            <div className="w-full text-[25px] p-3">Chat với Huy</div>
            <div className='flex gap-2'>
                <div className="size-8 rounded-full overflow-hidden content-center text-center">
                    <img className="object-cover min-h-full min-w-full" src={img} alt="" />
                </div>
                <div>Đinh Văn Huy</div>
            </div>
            
        </div>
     );
}
 
export default ServerInfo;