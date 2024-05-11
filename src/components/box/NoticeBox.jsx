import { PiWarningFill } from "react-icons/pi";
import { MdOutlineError,MdCheckCircle  } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import classNames from "classnames";
const NoticeBox = ({visible,message,type,onClose}) => {
    const notice = {
        warning:{
            icon:<PiWarningFill size={'1.7rem'}/>,
            title:'Cảnh báo',
            background : 'bg-[#FFFC4C]/60',
            color : 'text-black',
        },
        error:{
            icon:<MdOutlineError size={'1.7rem'}/>,
            title:'Lỗi',
            background : 'bg-[#FF3B3B]/60',
            color : 'text-black',
        },
        success:{
            icon:<MdCheckCircle size={'1.7rem'}/>,
            title:'Thành công',
            background : 'bg-[#63FF53]/60',
            color : 'text-black',
        },
    }
    
    return ( 
        <div 
            className={classNames(
                "w-full rounded-2xl py-5 px-10 relative",
                notice[type].background,
                notice[type].color,
                {'hidden':!visible})}
        >
            <div className="absolute top-5 right-5 cursor-pointer" onClick={onClose}>
                <IoClose size={'1.5rem'} />
            </div>
            <div className="flex items-center gap-5 font-medium pt-2">
                <div>{notice[type].icon}</div>
                <div>{notice[type].title}</div>
            </div>
            <div className="pt-3 pb-1 text-justify">
                {message}
            </div>
        </div> 
    );
}
 
export default NoticeBox;