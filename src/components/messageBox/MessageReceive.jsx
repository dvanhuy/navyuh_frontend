import Message from "./Message";

const MessageReceive = ({}) => {
    return ( 
        <div className="flex justify-start pl-7">
            <div className="bg-[#f0f0f0] px-4 py-2 text-black rounded-r-[30px] rounded-l-[10px] mt-1">
                <Message>Đây là nội dung tin nhắn đã gửi</Message>
            </div>
        </div>
     );
}
 
export default MessageReceive;