import AvatarImage from "../avatar/AvatarImage";
import ImageMessage from "./ImageMessage";

const ImageReceive = (props) => {
    return (
        <div className='flex justify-start pl-7'> 
            {props.sender && 
            <div className='mr-4'>
                <AvatarImage/>
            </div>
            } 
            <div className='min-[2000px]:max-w-[40%] max-w-[50%] rounded-l-[10px] rounded-r-[10px] overflow-hidden'>
                <ImageMessage {...props}/>
            </div>
        </div>
     );
}
 
export default ImageReceive;