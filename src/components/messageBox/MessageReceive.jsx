import Message from "./Message";

const MessageReceive = ({}) => {
    return ( 
        <div className="flex justify-start pl-7">
            <div className="max-w-[70%] bg-[#f0f0f0] pl-6 pr-4 py-2 text-black rounded-r-[30px] rounded-l-[10px]">
                <Message>Đây là nội dung tin nhắn đã gửi</Message>
            </div>
        </div>
     );
}
 
export default MessageReceive;