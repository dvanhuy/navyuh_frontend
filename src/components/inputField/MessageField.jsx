import { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useParams } from "react-router-dom";

const MessageField = ({
}) => {
    const messageText = useRef(null);
    const { serverID } = useParams()
    const handlePasteCapture = (e) => {
        let types = e.clipboardData.types
        // file
        if (types.includes('Files') && types.includes('text/html')) {
            console.log('file');
            e.preventDefault();
        }
        // text
        if (types.includes('text/plain') && types.includes('text/html')) {
            let textpaste = e.clipboardData.getData('text/plain')
        }
    }
    const handleEnterKey = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            handleSubmit()
        }
    }
    const handleSubmit = () =>{
        console.log(messageText.current.innerHTML);
        console.log(serverID);
        // const handleSendMessage = async () => {
        //     const url = BASE_URL + 'messages';
        //     let res = await callApi(url, 'post', {
        //         "message" : message,
        //         "server_id" : serverID,
        //     });
        //     console.log(res);
        // };
    }
    return (
         <div className="w-full sticky bottom-0 left-0 flex py-3 justify-center items-center">
            <div className="flex-1 ml-4">
                <div className="w-full bg-background outline-none pl-7 pr-4 py-2 rounded-[30px]">
                    <div
                        className="text-black w-full border-none outline-none break-all max-h-[200px] pr-3 
                                    overflow-y-auto empty:before:content-['Aa'] empty:before:text-[#5b5b5b]
                                    [&>img]:h-40
                                    "
                        contentEditable
                        onKeyDown={handleEnterKey}
                        // onInput={handleChange}
                        ref={messageText}
                        onPasteCapture={handlePasteCapture}
                    >
                    </div>
                </div>
            </div>
            <div className="mx-4 size-[45px] flex justify-center items-center rounded-full hover:bg-background">
                <IoIosSend size={"30px"} />
            </div>
         </div>
    );
}

export default MessageField;