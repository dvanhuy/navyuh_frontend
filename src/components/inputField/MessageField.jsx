import { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const MessageField = ({sendMessage}) => {
    const messageText = useRef(null);
    const [images, setImages] = useState([]);
    const handlePasteCapture = (e) => {
        let types = e.clipboardData.types
        console.log(types);
        // file
        if (types.includes('Files')) {
            let imagepaste = e.clipboardData.files[0]
            console.log(imagepaste);
            setImages((prevImages)=>[...prevImages,imagepaste])
            e.preventDefault();
        }
        // // text
        // if (types.includes('text/plain') && types.includes('text/html')) {
        //     let textpaste = e.clipboardData.getData('text/plain')
        // }
    }
    const handleEnterKey = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            handleSubmit()
        }
    }
    const handleSubmit = async () =>{
        let message = messageText.current.textContent
        messageText.current.innerHTML = ''
        if (message){
            sendMessage(message);
        }
    };
    return (
         <div className="w-full sticky bottom-0 left-0 flex py-3 justify-center items-center">
            <div className="flex-1 ml-4 rounded-[30px] bg-background">
                {images.length ===0 ? (<></>) : (
                    <div className='flex gap-5 mx-5 mb-2 mt-4'>
                        {images.map((item,index)=>{
                            let imgurl = URL.createObjectURL(item)
                            return (
                                <div className='h-14 relative' key={index}>
                                <img className='max-h-full max-w-full select-none' 
                                    src={imgurl} alt="" />
                                <div className='absolute -top-2 -right-2 bg-white rounded-full size-6 
                                                flex items-center justify-center border-[#707070] border-[1px] hover:bg-[#e2e2e2]'
                                    onClick={()=>{
                                        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
                                    }}
                                >
                                    <IoClose />
                                </div>
                            </div>
                            )
                        })}
                    </div>
                )}
                <div className="w-full outline-none pl-7 pr-4 py-2 ">
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
            <div className="mx-4 size-[45px] flex justify-center items-center rounded-full hover:bg-background"
                onClick={handleSubmit}>
                <IoIosSend size={"30px"} />
            </div>
         </div>
    );
}

export default MessageField;