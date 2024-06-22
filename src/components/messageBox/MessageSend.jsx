import Message from "./Message";

const MessageSend = ({children}) => {
    return ( 
        <div className="flex justify-end pr-7">
            <div className="max-w-[70%] bg-[#0084ff] pl-6 pr-4 py-2 text-white rounded-l-[30px] rounded-r-[10px]">
                <Message>{children}</Message>
            </div>
        </div>
     );
}
 
export default MessageSend;