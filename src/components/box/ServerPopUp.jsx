import PopUpContainer from "./PopUpContainer";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const ServerPopUp = ({handleCancel,handleAllow,name}) => {
    return (
        <PopUpContainer>
            <div className="flex flex-col items-center gap-4">
                <div>{name}</div>
                <div>
                    <img className="w-6 h-6 rounded-full" src="https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-nen-meo-ngao-5-12-10-31-43.jpg" alt="" />
                </div>
                <div>Hiện tại máy chủ đăng mở tham gia !</div>
                <div>Bạn có muốn tham gia hay không ?</div>
                <div className="flex gap-8 text-[20px] font-bold text-white">
                    <div className="rounded-full bg-red-500 p-2 cursor-pointer" onClick={handleCancel}>
                        <AiOutlineClose />
                    </div>
                    <div className="rounded-full bg-green-500 p-2 cursor-pointer" onClick={handleAllow}>
                        <AiOutlineCheck />
                    </div>
                </div>
            </div>
        </PopUpContainer>
    );
}

export default ServerPopUp;