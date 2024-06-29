const AvatarImage = ({img}) => {
    if (!img) {
        img = "https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-anh-meo-bua-buon-cuoi-nhat-12-09-57-09.jpg"
    }
    return ( 
        <div className="relative">
            <div className="size-10 rounded-full overflow-hidden content-center text-center">
                <img className="object-cover min-h-full min-w-full" src={img} alt="" />
            </div>
        </div>
     );
}
 
export default AvatarImage;