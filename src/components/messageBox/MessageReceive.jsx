import AvatarImage from "../avatar/AvatarImage";
import Message from "./Message";

const MessageReceive = ({sender,children}) => {
    return ( 
        <div className="flex justify-start pl-7">
            {sender && 
            <div className='mr-4'>
                <AvatarImage/>
            </div>
            }
            <div className="max-w-[60%] bg-[#f0f0f0] pl-6 pr-4 py-2 text-black rounded-r-[30px] rounded-l-[10px]">
                <Message>{children}</Message>
            </div>
        </div>
     );
}
 
export default MessageReceive;