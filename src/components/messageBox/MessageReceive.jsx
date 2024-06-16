import Message from "./Message";

const MessageReceive = ({children}) => {
    return ( 
        <div className="flex justify-start pl-7">
            <div className="max-w-[70%] bg-[#f0f0f0] pl-6 pr-4 py-2 text-black rounded-r-[30px] rounded-l-[10px]">
                <Message>{children}</Message>
            </div>
        </div>
     );
}
 
export default MessageReceive;